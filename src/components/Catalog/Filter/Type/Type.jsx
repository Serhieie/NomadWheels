import { nanoid } from 'nanoid';
import styles from './Type.module.scss';
import { FilterItem } from '../Inputs/FilterItem/FilterItem';

export const Type = ({ types, register }) => {
  return (
    <div className={styles.type}>
      <hr />
      <h3>Vehicle type</h3>
      <ul className={styles.type_list}>
        {types?.map((type) => (
          <FilterItem
            key={nanoid()}
            type="radio"
            label={type}
            register={register}
            kindOfItems="form"
          />
        ))}
      </ul>
    </div>
  );
};
