import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { bulkArriveAtom, bulkBreakAtom, weekAtom } from "@src/stores/week";
import { Button } from "@components/atoms";
import { cloneDeep } from "lodash";
import { useTranslation } from "react-i18next";

function ClearButton() {
  const { t } = useTranslation();

  const resetWeek = useResetRecoilState(weekAtom);
  const [ , setWeek ] = useRecoilState(weekAtom);
  const breakTime = useRecoilValue(bulkBreakAtom);
  const arriveTime = useRecoilValue(bulkArriveAtom);

  const onClick = () => {
    resetWeek();
    setWeek(prev => {
      const curr = cloneDeep(prev);

      curr[0].arrive = arriveTime; curr[0].break = breakTime;
      curr[1].arrive = arriveTime; curr[1].break = breakTime;
      curr[2].arrive = arriveTime; curr[2].break = breakTime;
      curr[3].arrive = arriveTime; curr[3].break = breakTime;
      curr[4].arrive = arriveTime; curr[4].break = breakTime;

      return curr;
    })
  }

  return (
   <Button style={{ padding: '16px 32px' }} variant='contain' onClick={onClick}>{ t('reset') }</Button>
  )
}

export default ClearButton;