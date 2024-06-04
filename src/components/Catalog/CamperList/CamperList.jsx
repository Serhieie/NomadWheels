import { useCampersState } from '../../../hooks/useCampersState';
import { nanoid } from 'nanoid';
import { CamperListItem } from './CamperListItem/CamperListItem';
import styles from './CamperList.module.scss';
import { Button } from '../../Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchAdverts,
  fetchFilteredAdverts,
} from '../../../redux/campers/campersOperation';
import { setPage } from '../../../redux/campers/campersSlice';
import { selectFilter } from '../../../redux/filter/filterSlice';
import NoItems from './NoItems/NoItems';

export const CamperList = () => {
  const { campers, page, loading, noItems } = useCampersState();
  const filters = useSelector(selectFilter);
  const dispatch = useDispatch();
  const showNoItems = campers.length === 0;

  useEffect(() => {
    if (filters?.location || filters?.form || filters?.details.length > 0) {
      dispatch(fetchFilteredAdverts(filters));
    } else dispatch(fetchAdverts({ page }));
  }, [page, dispatch, filters]);

  const handleLoadMore = () => {
    if (loading) return;
    dispatch(setPage(page + 1));
  };

  return (
    <div className={styles.camperListWrapper}>
      {showNoItems ? (
        <NoItems />
      ) : (
        <ul className={styles.camperList}>
          {campers?.map((item) => (
            <CamperListItem key={nanoid()} item={item} icon="emptyHeart" />
          ))}
        </ul>
      )}
      {!noItems && !showNoItems && (
        <Button
          type="button"
          text={'Load more'}
          loader={true}
          accent={false}
          handleClick={handleLoadMore}
        />
      )}
    </div>
  );
};
