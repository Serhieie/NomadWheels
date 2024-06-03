import { CamperList } from './CamperList/CamperList';
import { FilterParts } from './Filter/Filter';
import styles from './Catalog.module.scss';
import { Modal } from '../Modal/Modal';
import { useEffect } from 'react';
import { useCampersState } from '../../hooks/useCampersState';

export const Catalog = () => {
  const { isCamperModalOpen } = useCampersState();

  useEffect(() => {
    if (isCamperModalOpen) {
      document.body.classList.add('body--no-scroll');
    } else {
      document.body.classList.remove('body--no-scroll');
    }

    return () => {
      document.body.classList.remove('body--no-scroll');
    };
  }, [isCamperModalOpen]);

  return (
    <div className={styles.catalog}>
      <FilterParts />
      <CamperList />
      <Modal />
    </div>
  );
};
