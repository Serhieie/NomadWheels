import styles from './Checkbox.module.scss';
import sprite from '../../../assets/sprite.svg';
import { nanoid } from 'nanoid';

export const Checkbox = ({ label, register }) => {
  const id = nanoid();
  return (
    <div>
      <input
        className={styles.checkbox}
        {...register('equipments')}
        value={label.icon}
        id={id}
        type="checkbox"
      />
      <label htmlFor={id} className={styles.label}>
        <svg width={40}>
          <use href={`${sprite}#icon-${label.icon}`}></use>
        </svg>
        {label.icon}
      </label>
    </div>
  );
};
