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

  return [...fixedDetails, ...allDetails];
};
