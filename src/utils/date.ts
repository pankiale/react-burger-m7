export const getCorrectDate = (inputDate: string | undefined) => {
  let dayDiff;
  const date: any = new Date(inputDate as string);
  const time = date.toLocaleTimeString('ru', {timeZoneName: 'short'})
  const currentDate: any = new Date();
  const currentWeekDay = currentDate.getDay() === 0 ? 7 : currentDate.getDay();
  const diff = Math.round((currentDate - date)/(24*60*60*1000))

  if (diff === 0) dayDiff = 'Сегодня, '
  else if (diff === 1) dayDiff = 'Вчера, '
  else if (diff === 2) dayDiff = 'Позавчера, '
  else if (diff <= currentWeekDay) dayDiff = 'На этой неделе, '
  else if ((diff - currentWeekDay) <7) dayDiff = 'На прошлой неделе, '
  else if ((diff - currentWeekDay) <14) dayDiff = 'Две недели назад, '
  else dayDiff = 'Более двух недель назад, '

  return `${dayDiff}${time}`
}