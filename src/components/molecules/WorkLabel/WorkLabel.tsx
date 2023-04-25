import React, { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { weekAtom } from "@src/stores/week";

type Props = {
  index: number;
}

function WorkLabel({ index }:Props) {
  const [week, setWeek] = useRecoilState(weekAtom);

  useEffect(() => {

  }, [week])

  return (
    <div></div>
  )
}

export default WorkLabel;