import styles from './Label.module.scss';
import sprite from '../../../../../assets/sprite.svg';

export const Label = ({ labelInfo, fixedHeight }) => {
  const value =
    labelInfo.icon === 'Adults' || labelInfo.icon === 'Beds'
      ? labelInfo.value
      : !fixedHeight && labelInfo.value !== 0
      ? labelInfo.value
      : '';

  return (
    labelInfo.value !== 0 && (
      <li className={styles.label}>
        <svg width={20} height={20}>
          <use href={`${sprite}#icon-${labelInfo.icon}`}></use>
        </svg>
        {`${value} ${labelInfo.icon}`}
      </li>
    )
  );
};
