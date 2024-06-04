export const setFiltersUrl = ({ location, form }) => {
  const urlSearchParams = new URLSearchParams();
  if (location !== '') {
    urlSearchParams.append('location', location);
  }
  if (form === 'Van') {
    urlSearchParams.append('form', 'panelTruck');
  } else if (form === 'Fully Integrated') {
    urlSearchParams.append('form', 'fullyIntegrated');
  } else if (form !== '') {
    urlSearchParams.append('form', form.toLowerCase());
  }
  return urlSearchParams;
};
