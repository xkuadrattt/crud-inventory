import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  parseISO,
} from "date-fns";

export const workPeriod = (hireDate: string) => {
  const start = parseISO(hireDate);
  const today = new Date();
  const years = differenceInYears(today, start);
  const months = differenceInMonths(today, start) % 12;
  const days = differenceInDays(
    today,
    new Date(today.getFullYear(), today.getMonth() - 1, start.getDate())
  );

  return `${years}y ${months}mo`;
};
