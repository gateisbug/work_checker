export function strToTime(string: string): number {
  const hour = Number(string.slice(0, 2));
  const min = Number(string.slice(2, 4));

  return (hour * 60) + min;
}

export function timeToStr(time: number): string {
  const hour = Math.floor(time / 60);
  const min = time % 60;

  const _hour = (`${hour}`.length > 1) ? `${hour}` : `0${hour}`;
  const _min = (`${min}`.length > 1) ? `${min}` : `0${min}`;

  return `${_hour}${_min}`;
}