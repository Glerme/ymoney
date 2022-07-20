import {addMinutes} from 'date-fns';

export const combineDateTime = (date: string, time: string) =>
  new Date(date + 'T' + time);

export const fixTimezone = (() => {
  const offset = new Date().getTimezoneOffset();
  return (date: Date) => addMinutes(date, offset);
})();

const dateFormat = (value: Date | null | undefined) =>
  value
    ? `${value.getDate().toString().padStart(2, '0')}/${(value.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${value.getFullYear()}`
    : '';

const dateFormatWithHours = (value: Date | null | undefined) =>
  value
    ? `${String(value.getDate()).padStart(2, '0')}/${String(
        value.getMonth() + 1,
      ).padStart(2, '0')}/${value.getFullYear()} ${String(
        value.getHours(),
      ).padStart(2, '0')}:${String(value.getMinutes()).padStart(2, '0')}`
    : '';

const timeFormat = (value: Date | null | undefined) =>
  value
    ? `${String(value.getHours()).padStart(2, '0')}:${String(
        value.getMinutes(),
      ).padStart(2, '0')}`
    : '';

const toDateTimeLocal = (date: Date | null) => {
  if (!date) {
    return '';
  }

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000)
    .toISOString()
    .slice(0, 16);
};

const fromDateTimeLocal = (dateStr: string) => {
  if (!dateStr) {
    return null;
  }

  const date = new Date(dateStr);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
};

export {
  dateFormat,
  dateFormatWithHours,
  fromDateTimeLocal,
  toDateTimeLocal,
  timeFormat,
};
