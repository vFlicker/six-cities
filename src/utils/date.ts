const toUTCString = (date: Date) => new Date(date);

export const getScreenReaderDate = (date: Date): string => {
  const utcDate = toUTCString(date);
  return new Intl.DateTimeFormat('en-US').format(utcDate);
};

export const getFullMonthDate = (date: Date): string => {
  const utcDate = toUTCString(date);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(utcDate);
};
