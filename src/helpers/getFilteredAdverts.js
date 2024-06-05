export const getFilteredAdverts = (filteredAdverts, details) => {
  return filteredAdverts.filter((advert) => {
    for (const detail of details) {
      let detailToCompare = detail.toLowerCase();

      if (detail === 'TV' || detail === 'CD') {
        detailToCompare = detail;
      } else if (detail === 'AC') {
        detailToCompare = 'airConditioner';
      } else if (detail === 'Automatic') {
        if (advert.transmission !== 'automatic') {
          return false;
        }
        continue;
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
