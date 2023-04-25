import { atom } from "recoil";

const prefix = (str:string) => 'work_checker/store/week/'+str;

export type WeekType = {
  index: number;
  arrive: string;
  leave: string;
  work: string;
  break: string;
};

export const weekAtom = atom<Array<WeekType>>({
  key: prefix('weekAtom'),
  default: [
    { index: 0, arrive: '', break: '', leave: '', work: '' },
    { index: 1, arrive: '', break: '', leave: '', work: '' },
    { index: 2, arrive: '', break: '', leave: '', work: '' },
    { index: 3, arrive: '', break: '', leave: '', work: '' },
    { index: 4, arrive: '', break: '', leave: '', work: '' },
  ]
});

export const bulkArriveAtom = atom<string>({
  key: prefix('totalArriveAtom'),
  default: '0900'
});

export const bulkBreakAtom = atom<string>({
  key: prefix('totalBreakAtom'),
  default: '0100'
})