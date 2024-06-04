import { useEffect } from 'react';
import { useCampersState } from '../../hooks/useCampersState';
import { CamperListItem } from '../Catalog/CamperList/CamperListItem/CamperListItem';
import styles from './Favorites.module.scss';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/campers/campersSlice';
import { NavLink } from 'react-router-dom';
import { Modal } from '../Modal/Modal';

export const Favorites = () => {
  const { favorites } = useCampersState();
  const dispatch = useDispatch();

  const showFavorites = favorites.length > 0;

  useEffect(() => {
    dispatch(setPage(1));
  }, []);

  return (
    <section className={styles.favorites}>
      <div className={styles.roadDiv1}></div>
      {showFavorites ? (
        <div className={styles.listWrapper}>
          <ul className={styles.favoritesList}>
            {favorites?.map((favorite) => (
              <CamperListItem key={nanoid()} item={favorite} icon="close" />
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.noFavoriteItemsWrapper}>
          <h2 className={styles.noFavoriteTitle}>No Favorites Yet?</h2>
          <p className={styles.noFavoriteText}>
            Create Your Wishlist: Browse our top picks, add your favorite models, and get
            ready for the best trips of your life
          </p>
          <NavLink className={styles.navLink} to="/Catalog">
            Back to Catalog
          </NavLink>
        </div>
      )}
      <Modal />
    </section>
  );
};
