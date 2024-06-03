import { useEffect } from 'react';
import { useCampersState } from '../../hooks/useCampersState';
import { CamperListItem } from '../Catalog/CamperList/CamperListItem/CamperListItem';
import styles from './Favorites.module.scss';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/campers/campersSlice';

export const Favorites = () => {
  const { favorites } = useCampersState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(1));
  }, []);

  return (
    <section className={styles.favorites}>
      <div className={styles.roadDiv1}></div>
      <div className={styles.listWrapper}>
        <ul className={styles.favoritesList}>
          {favorites?.map((favorite) => (
            <CamperListItem key={nanoid()} item={favorite} icon="close" />
          ))}
        </ul>
      </div>
    </section>
  );
};
