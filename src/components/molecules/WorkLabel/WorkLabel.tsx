import React, { useEffect, useState } from 'react';
import { useRecoilState } from "recoil";
import { weekAtom } from "@src/stores/week";
import { Label } from "@components/atoms";
import { strToTime, timeToStr } from "@src/lib/time";
import { cloneDeep } from "lodash";

type Props = {
  index: number;
}

function WorkLabel({ index }:Props) {
  const [week, setWeek] = useRecoilState(weekAtom);
  const [work, setWork] = useState('');

  useEffect(() => {
    const _arrive = strToTime(week[index].arrive);
    const _leave = strToTime(week[index].leave);
    const _break = strToTime(week[index].break);
    const calc = _leave - _arrive - _break;

    const _work = (calc > 0) ? timeToStr(calc) : timeToStr(0);

    setWork(_work)
  }, [week[index].arrive, week[index].leave, week[index].break])

  useEffect(() => {
    setWeek(prev => {
      const curr = cloneDeep(prev);
      curr[index].work = work;
      return curr;
    })
  }, [work, index, setWeek])

  return (
    <Label typo='s1'>{week[index].work}</Label>
  )
}

export default WorkLabel;