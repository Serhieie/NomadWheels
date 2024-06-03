import styles from './CardHead.module.scss';
import sprite from '../../../../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../../../../redux/campers/campersSlice';
import clsx from 'clsx';
import { useCampersState } from '../../../../../hooks/useCampersState';
import { HeadBottom } from './HeadBottom';

export const CardHead = ({ item, icon }) => {
  const { favorites } = useCampersState();
  const isInFavorites = favorites.some((favorite) => item._id === favorite._id);

  const dispatch = useDispatch();

  const handleAddFavorite = (id) => {
    if (isInFavorites) {
      dispatch(removeFavorite(id));
    } else dispatch(addFavorite(id));
  };

  return (
    <div className={styles.cardHead}>
      <div className={styles.topPart}>
        <h2>{item.name}</h2>
        <span className={styles.price}>&#x20AC;{`${item.price}`}</span>
        <span
          onClick={() => handleAddFavorite(item._id)}
          className={`${
            icon === 'close' ? styles.favoriteText : styles.favoriteTextCatalog
          }`}
        >
          {' '}
          {icon === 'close' ? 'Remove' : ''}
          <svg
            className={clsx(styles.hearth, {
              [styles.favorite]: isInFavorites,
              [styles.inFavoritePage]: icon === 'close',
            })}
            width={icon === 'close' ? 32 : 24}
            height={icon === 'close' ? 32 : 24}
          >
            <use href={`${sprite}#icon-${icon}`}></use>
          </svg>
        </span>
      </div>
      <HeadBottom item={item} />
    </div>
  );
};
