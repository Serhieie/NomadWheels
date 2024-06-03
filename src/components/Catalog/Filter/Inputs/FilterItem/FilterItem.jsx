import styles from './FilterItem.module.scss';
import sprite from '../../../../../assets/sprite.svg';
import { nanoid } from 'nanoid';
import clsx from 'clsx';

export const FilterItem = ({ label, register, type, kindOfItems }) => {
  const id = nanoid();
  const isCheckbox = type === 'checkbox';
  const labelText =
    label.icon === 'Shower' ? 'Shower/WC' : isCheckbox ? label.icon : label.value;
  const icon = label.icon;

  return (
    <>
      <input
        className={styles.checkbox}
        {...register(kindOfItems)}
        value={isCheckbox ? label.icon : label.value}
        id={isCheckbox ? id : label.value}
        type={type}
        name={kindOfItems}
      />
      <label htmlFor={isCheckbox ? id : label.value} className={styles.label}>
        <svg
          className={clsx(styles.equipmentIcon, {
            [styles.typesIcon]: !isCheckbox,
            [styles.acIcon]: icon === 'AC',
          })}
          width={isCheckbox ? 32 : 40}
          height={isCheckbox ? 32 : 28}
        >
          <use href={`${sprite}#icon-${icon}`}></use>
        </svg>
        {labelText}
      </label>
    </>
  );
};
