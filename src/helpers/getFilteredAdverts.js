export const getFilteredAdverts = (filteredAdverts, details) => {
  return filteredAdverts.filter((advert) => {
    for (const detail of details) {
      let detailToCompare = detail.toLowerCase();
      if (detail === 'TV' || detail === 'CD') {
        detailToCompare = detail;
      } else if (detail === 'AC') {
        detailToCompare = 'airConditioner';
      }
      if (detail === 'Automatic') {
        return advert.transmission === 'automatic';
      }
      if (
        !advert.details ||
        !(detailToCompare in advert.details) ||
        advert.details[detailToCompare] === 0
      ) {
        return false;
      }
    }
    return true;
  });
};
