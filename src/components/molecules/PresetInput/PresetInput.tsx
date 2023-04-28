import React, { useCallback, useEffect, useState } from 'react';
import _, { cloneDeep } from 'lodash';
import { useRecoilState, useSetRecoilState } from "recoil";
import { bulkArriveAtom, bulkBreakAtom, weekAtom } from "@src/stores/week";
import { Input } from "@components/atoms";
import { useTranslation } from "react-i18next";

type Props = {
  type: 'arrive' | 'break';
}

function PresetInput({ type }:Props) {
  const { t } = useTranslation();

  const [week, setWeek] = useRecoilState(weekAtom);
  const [bulkArrive, setBulkArrive] = useRecoilState(bulkArriveAtom);
  const [bulkBreak, setBulkBreak] = useRecoilState(bulkBreakAtom);
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

  useEffect(() => {
    if(type === 'arrive') {
      setValue(bulkArrive)
    }
    else {
      setValue(bulkBreak)
    }
  }, [type, bulkArrive, bulkBreak])

  useEffect(() => {
    setWeek(prev => {
      const curr = cloneDeep(prev);
      curr[0].arrive = bulkArrive;
      curr[1].arrive = bulkArrive;
      curr[2].arrive = bulkArrive;
      curr[3].arrive = bulkArrive;
      curr[4].arrive = bulkArrive;

      return curr;
    })
  }, [bulkArrive, setWeek])

  useEffect(() => {
    setWeek(prev => {
      const curr = cloneDeep(prev);
      curr[0].break = bulkBreak;
      curr[1].break = bulkBreak;
      curr[2].break = bulkBreak;
      curr[3].break = bulkBreak;
      curr[4].break = bulkBreak;

      return curr;
    })
  }, [bulkBreak, setWeek])

  return (
    <Input variant='outline' value={value} onChange={onChange} placeholder={placeholder} style={{ width: 200 }} />
  )
}

export default PresetInput;