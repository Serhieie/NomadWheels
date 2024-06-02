import { useCampersState } from '../../../hooks/useCampersState';
import { nanoid } from 'nanoid';
import { CamperListItem } from './CamperListItem/CamperListItem';
import styles from './CamperList.module.scss';
import { Button } from '../../CustomItems/Button';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdverts } from '../../../redux/campers/campersOperation';
import { setPage } from '../../../redux/campers/campersSlice';

export const CamperList = () => {
  const { campers, page, loading, noItems } = useCampersState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts({ page }));
  }, [page, dispatch]);

  const handleLoadMore = () => {
    if (loading) return;
    dispatch(setPage(page + 1));
  };

  return (
    <div className={styles.camperListWrapper}>
      <ul className={styles.camperList}>
        {campers.map((item) => (
          <CamperListItem key={nanoid()} item={item} />
        ))}
      </ul>
      {!noItems && (
        <Button
          type="button"
          text={'Load more'}
          loading={loading}
          accent={false}
          handleClick={handleLoadMore}
        />
      )}
    </div>
  );
};
