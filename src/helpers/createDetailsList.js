export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const createDetailsList = (item) => {
  if (!item) {
    return [
      { icon: 'Automatic', value: '' },
      { icon: 'Kitchen', value: '' },
      { icon: 'AC', value: '' },
      { icon: 'Shower', value: '' },
      { icon: 'TV', value: '' },
      { icon: 'Freezer', value: '' },
      { icon: 'Microwave', value: '' },
    ];
  }

  const fixedDetails = [
    { icon: 'Adults', value: item.adults },
    { icon: 'Beds', value: item.details?.beds },
    { icon: 'Automatic', value: item.transmission },
    { icon: 'Engine', value: item.engine },
    { icon: 'Kitchen', value: item.details?.kitchen },
  ];

  const allDetails = [
    { icon: 'AC', value: item.details?.airConditioner },
    { icon: 'Shower', value: item.details?.shower },
    { icon: 'TV', value: item.details?.TV },
    { icon: 'Freezer', value: item.details?.freezer },
    { icon: 'Gas', value: item.details?.gas },
    { icon: 'Hob', value: item.details?.hob },
    { icon: 'Microwave', value: item.details?.microwave },
    { icon: 'Radio', value: item.details?.radio },
    { icon: 'Bathroom', value: item.details?.toilet },
    { icon: 'Water', value: item.details?.water },
  ];

  //рандомні значення
  //   const shuffledDetails = shuffleArray(allDetails);
  //   const randomDetails = shuffledDetails.slice(0, 7);

  return [...fixedDetails, ...allDetails];
};
