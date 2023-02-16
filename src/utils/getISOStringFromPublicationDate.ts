export const getISOStringFromPublicationDate = (date: string): string => {
  const [year, month, day] = date.split(".");

  return new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day)),
  ).toISOString();
};
