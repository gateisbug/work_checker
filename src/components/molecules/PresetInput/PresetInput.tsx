import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import { useSetRecoilState } from "recoil";
import { bulkArriveAtom, bulkBreakAtom } from "@src/stores/week";
import { Input } from "@components/atoms";
import { useTranslation } from "react-i18next";

type Props = {
  type: 'arrive' | 'break';
}

function PresetInput({ type }:Props) {
  const { t } = useTranslation();

  const setBulkArrive = useSetRecoilState(bulkArriveAtom);
  const setBulkBreak = useSetRecoilState(bulkBreakAtom);
  const [value, setValue] = useState<string>('');

  const placeholder = (() => {
    if(type === 'arrive') {
      return `${t('totalArrivePlaceholder')}`;
    }
    else {
      return `${t('totalBreakPlaceholder')}`;
    }
  })();

  const debouncedSetRecoil = useCallback(_.debounce((v: string) => {
    if(type === 'arrive') {
      setBulkArrive(v);
    }
    else {
      setBulkBreak(v);
    }
  }, 500), [type]);

  const onChange = (v:string) => {
    setValue(v);
    debouncedSetRecoil(v);
  }

  return (
    <Input value={value} onChange={onChange} placeholder={placeholder} />
  )
}

export default PresetInput;