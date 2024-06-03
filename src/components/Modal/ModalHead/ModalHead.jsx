import styles from './ModalHead.module.scss';
import sprite from '../../../assets/sprite.svg';
import { HeadBottom } from '../../Catalog/CamperList/CamperListItem/CardHead/HeadBottom';

export const ModalHead = ({ activeCamper, onClose }) => {
  return (
    <div className={styles.modalHeadWrapper}>
      <div className={styles.titleContainer}>
        <h1>{activeCamper.name}</h1>
        <svg onClick={onClose} className={styles.closeIcon} width={32} height={32}>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
      </div>
      <div className={styles.modalHeadBottom}>
        <HeadBottom item={activeCamper} />
        <span className={styles.price}>&#x20AC;{`${activeCamper.price}`}</span>
      </div>
    </div>
  );
};
