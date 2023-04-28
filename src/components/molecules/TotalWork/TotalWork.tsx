import classnames from 'classnames/bind';
import styles from './TotalWork.module.scss';
import { Label } from "@components/atoms";
import { useRecoilState } from "recoil";
import { weekAtom } from "@src/stores/week";
import { useEffect, useState } from "react";
import { strToTime, timeToStr } from "@src/lib/time";

const cx = classnames.bind(styles);

function TotalWork() {
  const [ week ] = useRecoilState(weekAtom);
  const [ total, setTotal ] = useState('');

  useEffect(() => {
    let time = 0;

    for (let i = 0; i < week.length; i++) {
      time += strToTime(week[i].work);
    }

    setTotal(timeToStr(time));
  }, [week])

  return (
    <div className={ cx("total-container") }>
      <Label typo='s1'>Total Works</Label>
      <Label typo='h6' style={{ color: '#ffcc80' }}>{ total }</Label>
    </div>
  )
}

export default TotalWork;