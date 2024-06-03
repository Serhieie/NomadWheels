import { createDetailsList } from '../../../../helpers';
import { LabelList } from '../../../Catalog/CamperList/CamperListItem/LabelList/LabelList';
import styles from './Features.module.scss';
import { VehicleDetails } from './VehicleDetails/VehicleDetails';

export const Features = ({ activeCamper }) => {
  return (
    <div className={styles.featuresContainer}>
      <LabelList item={createDetailsList(activeCamper)} fixedHeight={false} />
      <VehicleDetails activeCamper={activeCamper} />
    </div>
  );
};
