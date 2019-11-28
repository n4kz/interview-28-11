export default {
  loadData: async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(backendData.slice());
      }, 1000);
    });
  },
};

const backendData = [
  {
    id: 0,
    title: 'Jack',
    subtitle: 'Daniels',
    car: {
      name: 'Porshe',
      year: 2010,
    },
  },
  {
    id: 1,
    title: 'Alex',
    subtitle: 'Groover',
    car: {
      name: 'LADA',
      year: 1997,
    },
  },
  {
    id: 2,
    title: 'Bob',
    subtitle: 'Marley',
    car: {
      name: 'Mercedes',
      year: 2001,
    },
  },
  {
    id: 3,
    title: 'Vasya',
    subtitle: 'Petrov',
    car: {
      name: 'LADA',
      year: 2010,
    },
  },
  {
    id: 4,
    title: 'Nick',
    subtitle: 'Johnson',
    car: {
      name: 'BMW',
      year: 2018,
    },
  },
  {
    id: 6,
    title: 'Jack 1',
    subtitle: 'Daniels',
    car: {
      name: 'Porshe',
      year: 2010,
    },
  },
  {
    id: 7,
    title: 'Alex 1',
    subtitle: 'Groover',
    car: {
      name: 'Mercedes',
      year: 1997,
    },
  },
  {
    id: 8,
    title: 'Bob 1',
    subtitle: 'Marley',
    car: {
      name: 'Mercedes',
      year: 2001,
    },
  },
  {
    id: 9,
    title: 'Vasya 1',
    subtitle: 'Petrov',
    car: {
      name: 'LADA',
      year: 2010,
    },
  },
  {
    id: 10,
    title: 'Nick 1',
    subtitle: 'Johnson',
    car: {
      name: 'Mercedes',
      year: 2018,
    },
  },
];
