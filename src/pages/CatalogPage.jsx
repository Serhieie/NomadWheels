import { CamperList } from '../components/CamperList/CamperList';
import { FilterParts } from '../components/FilterParts/FilterParts';

function CatalogPage() {
  return (
    <>
      <FilterParts />
      <CamperList />
    </>
  );
}

export default CatalogPage;
