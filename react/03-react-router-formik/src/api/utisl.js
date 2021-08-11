export const wait = (ms = 800) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const createGetId = initialId => () => ++initialId;

export const getTimestamp = () => {
  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };
  const date = new Date(Date.now());
  return `${date.getFullYear()}-${date.getMonth() + 1}-${days[date.getDay()]} ${date.getHours()}:${date.getMinutes()}`;
};

export const throwError = id => {
  throw new Error(`Record with ID ${id} does not exist`);
};
