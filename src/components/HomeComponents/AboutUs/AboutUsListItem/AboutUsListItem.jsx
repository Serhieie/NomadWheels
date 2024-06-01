import styles from './AboutUsListItem.module.scss';
import sprite from '../../../../assets/sprite.svg';

export const AboutUsListItem = ({ item }) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.itemIcon}>
        <svg width={60} height={60}>
          <use href={`${sprite}#icon-${item.icon}`}></use>
        </svg>
      </div>
      <div className={styles.itemHead}>
        <h3 className={styles.itemTitle}>{item.title}</h3>
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.itemDescription}>{item.description}</p>
      </div>
    </li>
  );
};
