/* eslint-disable no-bitwise */
import { newDateFromFormat } from './dates';

function setColorByPercentage(percentage: number) {
  if (percentage > 0 && percentage < 50) return 'red.01';
  if (percentage >= 50 && percentage < 100) return 'orange.02';
  if (percentage === 100) return 'green.01';
  return 'grey.01';
}

function setBackgroundColorByPercentage(percentage: number) {
  if (percentage > 0 && percentage < 50) return 'red.02';
  if (percentage >= 50 && percentage < 100) return 'orange.03';
  if (percentage === 100) return 'green.03';
  return 'grey.03';
}

function setColorByDate(date: string, isCustomFormat = false) {
  const currentDate = new Date();

  let endDate: Date | null;

  if (isCustomFormat) {
    endDate = newDateFromFormat(date);
  } else {
    endDate = new Date(date);
  }

  const endDateDecreasedDays = new Date(
    new Date(date).setDate(new Date(date).getDate() - 2)
  );
  
  if (endDate === null) {
    throw new Error("date null");
  }
  
  if (currentDate > endDate) return 'red.500';
  if (currentDate >= endDateDecreasedDays && currentDate < endDate)
    return 'orange.500';
  return 'black';
}

function stringToHslColor(str: string, s = 89, l = 89) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = hash % 360;
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export {
  setColorByPercentage,
  setBackgroundColorByPercentage,
  setColorByDate,
  stringToHslColor,
};
