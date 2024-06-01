import styles from './Checkbox.module.scss';
import sprite from '../../../assets/sprite.svg';
import { nanoid } from 'nanoid';

const icon = 'camper1';

export const Checkbox = ({ text, register }) => {
  const id = nanoid();
  return (
    <div>
      <input
        className={styles.checkbox}
        {...register('equipments')}
        value={text}
        id={id}
        type="checkbox"
      />
      <label htmlFor={id} className={styles.label}>
        <svg width={40}>
          <use href={`${sprite}#icon-${icon}`}></use>
        </svg>
        {text}
      </label>
    </div>
  );
};
