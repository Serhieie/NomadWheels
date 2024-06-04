import { useDispatch } from 'react-redux';
import styles from './NoItems.module.scss';
import { Button } from '../../../Button';
import { fetchAdverts } from '../../../../redux/campers/campersOperation';
import { resetFilter } from '../../../../redux/filter/filterSlice';
import { useCampersState } from '../../../../hooks/useCampersState';

const NoItems = () => {
  const dispatch = useDispatch();
  const { loading, filteredLoading } = useCampersState();

  const handleLoadAllCampers = () => {
    dispatch(resetFilter());
    dispatch(fetchAdverts({ page: 1 }));
  };

  return (
    !loading &&
    !filteredLoading && (
      <div className={styles.noItems}>
        <p className={styles.noItemsMessage}>
          Sorry, no campers available with the current filters.
        </p>
        <div className={styles.buttonWrapper}>
          {' '}
          <Button
            type="button"
            text="Load Campers"
            width={200}
            handleClick={handleLoadAllCampers}
          />
        </div>
      </div>
    )
  );
};

export default NoItems;
