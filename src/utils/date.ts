type ISOString = string;

const toUTCString = (date: ISOString) => new Date(date);

export const getScreenReaderDate = (date: ISOString): string => {
  const utcDate = toUTCString(date);
  return new Intl.DateTimeFormat('en-US').format(utcDate);
};

export const getFullMonthDate = (date: ISOString): string => {
  const utcDate = toUTCString(date);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(utcDate);
};
