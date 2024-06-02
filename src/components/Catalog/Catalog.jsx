import { CamperList } from './CamperList/CamperList';
import { FilterParts } from './FilterParts/FilterParts';
import styles from './Catalog.module.scss';

export const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <FilterParts />
      <CamperList />
    </div>
  );
};
