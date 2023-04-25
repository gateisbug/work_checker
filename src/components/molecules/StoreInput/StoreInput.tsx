import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import { useRecoilState } from "recoil";
import { weekAtom } from "@src/stores/week";
import { Input } from "@components/atoms";
import { useTranslation } from "react-i18next";

type Props = {
  index: number;
  type: 'arrive' | 'leave' | 'break';
}

function StoreInput({ index, type }:Props) {
  const { t } = useTranslation();

  const [week, setWeek] = useRecoilState(weekAtom);
  const [value, setValue] = useState<string>('');

  const placeholder = (() => {
    if(type === 'arrive') {
      return `${t('arrivePlaceholder')}`;
    }
    else if(type === 'break') {
      return `${t('breakPlaceholder')}`;
    }
    else {
      return `${t('leavePlaceholder')}`;
    }
  })();

  const debouncedSetRecoil = useCallback(_.debounce((v: string) => {
    if(week.length > 0 && !!week[index] && v !== week[index][`${type}`]) {
      const curr = _.cloneDeep(week);
      curr[index][`${type}`] = v;
      setWeek(curr)
    }
  }, 500), [week, index, type]);

  const onChange = (v:string) => {
    setValue(v);
    debouncedSetRecoil(v);
  }

  return (
    <Input value={value} onChange={onChange} placeholder={placeholder} />
  )
}

export default StoreInput;