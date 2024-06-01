import styles from './Label.module.scss';
import sprite from '../../../../assets/sprite.svg';

const icon = 'star';

export const Label = ({ text }) => {
  return (
    <div className={styles.label}>
      <svg width={20} height={20}>
        <use href={`${sprite}#icon-${icon}`}></use>
      </svg>
      {text}
    </div>
  );
};
