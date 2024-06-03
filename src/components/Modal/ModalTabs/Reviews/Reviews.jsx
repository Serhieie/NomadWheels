import { nanoid } from 'nanoid';
import styles from './Reviews.module.scss';
import { ReviewsItem } from './ReviewsItem/ReviewsItem';

export const Reviews = ({ activeCamper }) => {
  return (
    <div className={styles.reviewsContainer}>
      <ul className={styles.reviewList}>
        {activeCamper.reviews.map((review) => (
          <ReviewsItem key={nanoid()} review={review} />
        ))}
      </ul>
    </div>
  );
};
