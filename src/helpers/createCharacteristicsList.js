export const createCharacteristicsList = (camperData) => {
  const characteristics = [
    {
      label: 'Form',
      value:
        camperData.form === 'alcove'
          ? 'Alcove'
          : camperData.form === 'panelTruck'
          ? 'Panel truck'
          : 'Fully Integrated',
    },
    { label: 'Length', value: camperData.length },
    { label: 'Width', value: camperData.width },
    { label: 'Height', value: camperData.height },
    { label: 'Tank', value: camperData.tank },
    { label: 'Consumption', value: camperData.consumption },
  ];

  return characteristics;
};
