import { useCampersState } from '../../../../hooks/useCampersState';
import { FilterItem } from '../Inputs/FilterItem/FilterItem';
import styles from './Equipment.module.scss';
import { nanoid } from 'nanoid';

export const Equipment = ({ labels, register }) => {
  const { campers } = useCampersState();
  const totalItems = campers.length;
  return (
    <div className={styles.equipmentWrapper}>
      {totalItems && (
        <div className={styles.result}>
          <span>Filters</span>
          <span className={styles.resultSpan}>
            Total: <span className={styles.resultAmount}>{totalItems}</span> cars
          </span>
        </div>
      )}

      <div className={styles.equipment}>
        <h3>Vehicle equipment</h3>
        <hr />
        <ul className={styles.equipment_list}>
          {labels?.map((label) => (
            <FilterItem
              key={nanoid()}
              type="checkbox"
              label={label}
              register={register}
              kindOfItems="details"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
