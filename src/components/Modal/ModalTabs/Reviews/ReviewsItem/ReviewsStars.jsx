import styles from './ReviewsItem.module.scss';
import sprite from '../../../../../assets/sprite.svg';
import { nanoid } from 'nanoid';

export const ReviewStars = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const goldenStar = Math.round(rating) >= index + 1;
    return (
      <li key={nanoid()}>
        <svg
          className={`${goldenStar ? styles.goldenStarIcon : styles.regularStarIcon}`}
          width={16}
          height={16}
        >
          <use href={`${sprite}#icon-star`}></use>
        </svg>
      </li>
    );
  });

  return <ul className={styles.starsList}>{stars}</ul>;
};
