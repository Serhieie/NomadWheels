import { useDispatch } from 'react-redux';
import { createDetailsList } from '../../../../helpers';
import { Button } from '../../../Button';
import styles from './CamperListItem.module.scss';
import { CardHead } from './CardHead/CardHead';
import { LabelList } from './LabelList/LabelList';
import { setActive, setIsCamperModalOpen } from '../../../../redux/campers/campersSlice';

export const CamperListItem = ({ item, icon }) => {
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    dispatch(setActive(item));
    dispatch(setIsCamperModalOpen(true));
  };

  return (
    <li className={styles.camperListItem}>
      <div className={styles.cardWrapper}>
        <div className={styles.frame}>
          <img className={styles.camperListItem_img} src={item.gallery[0]} alt="camper" />
        </div>
        <div className={styles.camperListItem_info}>
          <CardHead item={item} icon={icon} />
          <p className={styles.description}>{item.description}</p>
          <LabelList item={createDetailsList(item)} fixedHeight={true} />
          <Button
            text="Show more"
            type="button"
            width={166}
            handleClick={handleModalOpen}
          />
        </div>
      </div>
    </li>
  );
};
