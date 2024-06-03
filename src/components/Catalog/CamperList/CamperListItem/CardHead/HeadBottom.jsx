import { useDispatch } from 'react-redux';
import sprite from '../../../../../assets/sprite.svg';
import styles from './CardHead.module.scss';
import {
  setActive,
  setIsCamperModalOpen,
} from '../../../../../redux/campers/campersSlice';

export const HeadBottom = ({ item }) => {
  const reviews = item.reviews.length >= 1 ? item.reviews.length : 'No';
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setActive(item));
    dispatch(setIsCamperModalOpen(true));
  };

  return (
    <div className={styles.bottomPart}>
      <a onClick={handleClick} href="#tabs" className={styles.rating}>
        <svg className={styles.svgRating} width={16} height={16}>
          <use href={`${sprite}#icon-star`}></use>
        </svg>
        {`${item.rating}(${reviews} Reviews)`}
      </a>
      <span className={styles.location}>
        <svg className={styles.svgLocation} width={16} height={16}>
          <use href={`${sprite}#icon-Pin`}></use>
        </svg>{' '}
        {item.location}
      </span>
    </div>
  );
};
