const numberPad = (num: number) => {
  const numberStr = num + '';
  return numberStr.length >= 2 ? numberStr : new Array(2 - numberStr.length + 1).join('0') + numberStr;
};
export const getDateParse = (second: number) => {
  const hours = Math.floor(second / 3600);
  const minutes = Math.floor((second / 60) % 60);
  const seconds = Math.floor(second % 60);

  return [numberPad(hours), numberPad(minutes), numberPad(seconds)];
};
export const getSecond = (dateStr: string) => {
  const newDate = new Date(`2021-01-12 ${dateStr}`);
  return newDate.getHours() * 60 * 60 + newDate.getMinutes() * 60 + newDate.getMinutes();
};
