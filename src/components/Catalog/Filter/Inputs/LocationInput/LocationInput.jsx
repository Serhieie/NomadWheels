import sprite from 'assets/sprite.svg';
import styles from './LocationInput.module.scss';

export const LocationInput = ({ register }) => {
  return (
    <label htmlFor="location" className={styles.label}>
      Location
      <input
        className={styles.locationInput}
        {...register('location')}
        id="location"
        placeholder="City"
      />
      <svg className={styles.pinSvg} width={18} height={20}>
        <use href={`${sprite}#icon-Pin`}></use>
      </svg>
    </label>
  );
};
