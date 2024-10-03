import { differenceInMonths, differenceInYears, parseISO } from "date-fns";

export const workPeriod = (hireDate: string) => {
  const start = parseISO(hireDate);
  const today = new Date();
  const years = differenceInYears(today, start);
  const months = differenceInMonths(today, start) % 12;

  return `${years}y ${months}mo`;
};
