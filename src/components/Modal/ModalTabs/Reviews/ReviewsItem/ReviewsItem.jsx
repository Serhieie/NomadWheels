import styles from './ReviewsItem.module.scss';
import { ReviewStars } from './ReviewsStars';

export const ReviewsItem = ({ review }) => {
  const firstLetter = review.reviewer_name[0].toUpperCase();

  return (
    <li className={styles.reviewsItem}>
      <div className={styles.reviewItemTopPart}>
        <div className={styles.userFrame}>
          <span className={styles.frameSpan}>{firstLetter}</span>
        </div>
        <div className={styles.nameContainer}>
          <h3 className={styles.userName}>{review.reviewer_name}</h3>
          <ReviewStars rating={review.reviewer_rating} />
        </div>
      </div>
      <p>{review.comment}</p>
    </li>
  );
};
