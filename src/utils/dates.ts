const monthStrings = {
  en: [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  fr: [
    '',
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Julliet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
};

function isValidDate(date: string | Date) {
  if (!date) return false;

  let dateToCheck = date;

  if (typeof dateToCheck === 'string') {
    if (dateToCheck.includes('/')) {
      const [day, month, year] = dateToCheck.split('/');

      dateToCheck = new Date(+year, +month - 1, +day);
    } else {
      dateToCheck = new Date(date);
    }
  }

  return !Number.isNaN(dateToCheck.getTime());
}

function formatDate(date: string | Date, withTime = false) {
  let JSDate = date;

  if (typeof JSDate === 'string') JSDate = new Date(date);

  if (!isValidDate(JSDate)) return null;

  const formattedDate = JSDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: withTime ? '2-digit' : undefined,
    minute: withTime ? '2-digit' : undefined,
  });

  return formattedDate;
}

function formatLongDate(
  formattedDateString: string,
  language: 'en' | 'fr' = 'en'
) {
  let dateString = formattedDateString;

  if (dateString.includes('-')) {
    dateString = dateString.replace(/-/g, '/');
  }

  const [day, month, year] = dateString.split('/');

  return `${parseInt(day, 10)} ${
    monthStrings[language][parseInt(month, 10)]
  } ${year}`;
}

function formatShortDate(
  formattedDateString: string,
  withYear?: 'short' | 'long',
  language: 'en' | 'fr' = 'en',
  includeDay = true
) {
  let dateString = formattedDateString;

  if (dateString.includes('-')) {
    dateString = dateString.replace(/-/g, '/');
  }

  const [day, month, year] = dateString.split('/');

  const date = new Date(+year, +month - 1, +day);

  if (!isValidDate(date)) {
    return null;
  }

  return `${includeDay ? `${parseInt(day, 10)} ` : ''}${monthStrings[language][
    parseInt(month, 10)
  ].slice(0, 3)}${
    withYear === 'short'
      ? ` '${year.slice(2)}`
      : withYear === 'long'
      ? ` ${year}`
      : ''
  }`;
}

function newDateFromFormat(formattedDateString: string) {
  let dateString = formattedDateString;

  if (dateString.includes('-')) {
    dateString = dateString.replace(/-/g, '/');
  }

  const [day, month, year] = dateString.split('/');

  const date = new Date(+year, +month - 1, +day);

  if (!isValidDate(date)) {
    return null;
  }

  return date;
}

function dateWithWeekday(date: string | Date, language: 'en' | 'fr' = 'en') {
  // convert date iso string or js date to string with format 'weekday, DD month YYYY'
  let dateToCheck = date;

  if (typeof dateToCheck === 'string') dateToCheck = new Date(date);

  if (!isValidDate(dateToCheck)) return null;

  const formattedDate = dateToCheck.toLocaleDateString(language, {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return formattedDate;
}

function dateIsBetween(
  date: string | Date,
  startDate: string | Date,
  endDate: string | Date
) {
  let dateToCheck = date;
  let startDateToCheck = startDate;
  let endDateToCheck = endDate;

  if (typeof dateToCheck === 'string') dateToCheck = new Date(date);
  if (typeof startDateToCheck === 'string')
    startDateToCheck = new Date(startDate);
  if (typeof endDateToCheck === 'string') endDateToCheck = new Date(endDate);

  return dateToCheck >= startDateToCheck && dateToCheck <= endDateToCheck;
}

function daysBetween(startDate: string | Date, endDate: string | Date) {
  const startDateToCheck = new Date(startDate);
  const endDateToCheck = new Date(endDate);

  if (!isValidDate(startDateToCheck) || !isValidDate(endDateToCheck)) {
    return null;
  }

  const diffTime = Math.abs(
    endDateToCheck.getTime() - startDateToCheck.getTime()
  );
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
function isDateInFuture(date: Date | string) {
  let targetDate: Date;
  if (typeof date === 'string') {
    targetDate = new Date(date);
  } else {
    targetDate = date;
  }
  const now = new Date();
  return targetDate > now;
}

function isSameDay(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function isDTS(date: Date | null) {
  if (!date) return false;

  const januaryDate = new Date(date.getFullYear(), 0, 1);
  const julyDate = new Date(date.getFullYear(), 6, 1);

  return (
    date.getTimezoneOffset() <
    Math.max(januaryDate.getTimezoneOffset(), julyDate.getTimezoneOffset())
  );
}

export {
  formatDate,
  formatLongDate,
  formatShortDate,
  newDateFromFormat,
  dateWithWeekday,
  isValidDate,
  dateIsBetween,
  daysBetween,
  isDateInFuture,
  isSameDay,
  isDTS,
};
