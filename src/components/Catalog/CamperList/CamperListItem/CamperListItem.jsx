import { createDetailsList } from '../../../../helpers/createDetailsList';
import { Button } from '../../../CustomItems/Button';
import styles from './CamperListItem.module.scss';
import { CardHead } from './CardHead/CardHead';
import { LabelList } from './LabelList/LabelList';

export const CamperListItem = ({ item, icon }) => {
  return (
    <li className={styles.camperListItem}>
      <div className={styles.cardWrapper}>
        <div className={styles.frame}>
          <img className={styles.camperListItem_img} src={item.gallery[0]} alt="camper" />
        </div>
        <div className={styles.camperListItem_info}>
          <CardHead item={item} icon={icon} />
          <p className={styles.description}>{item.description}</p>
          <LabelList item={createDetailsList(item)} />
          <Button text="Show more" type="button" width={166} />
        </div>
      </div>
    </li>
  );
};
