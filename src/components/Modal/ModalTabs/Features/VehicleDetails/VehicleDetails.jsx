import { createCharacteristicsList } from '../../../../../helpers';
import { nanoid } from 'nanoid';
import styles from './VehicleDetails.module.scss';

export const VehicleDetails = ({ activeCamper }) => {
  const characteristics = createCharacteristicsList(activeCamper);
  return (
    <div className={styles.vehicleDetails}>
      <h2>Vehicle Details</h2>
      <hr />
      <ul className={styles.vehicleDetailsList}>
        {characteristics.map((characteristic) => (
          <li key={nanoid()}>
            {characteristic.label}
            <span> {characteristic.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
