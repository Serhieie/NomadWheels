export const areFiltersSet = (filters) => {
  return filters.details.length > 0 || filters.form !== '' || filters.location !== '';
};
