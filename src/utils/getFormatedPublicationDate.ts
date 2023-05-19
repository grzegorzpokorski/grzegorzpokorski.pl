export const getFormatedPublicationDate = (date: string) => {
  const [year, month, day] = date.split(".");

  const ISODate = new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day)),
  );

  return new Intl.DateTimeFormat("pl-PL", { dateStyle: "long" }).format(
    ISODate,
  );
};
