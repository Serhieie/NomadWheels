import { useState } from 'react';
import styles from './ModalTabs.module.scss';
import { ModalTabsHead } from './ModalTabsHead/ModalTabsHead';
import { BookCamperForm } from '../BookCamperForm/BookCamperForm';
import { Features } from './Features/Features';
import { Reviews } from './Reviews/Reviews';

export const ModalTabs = ({ activeCamper }) => {
  const [active, setActive] = useState('Features');

  const handleTabClick = (newActive) => {
    setActive(newActive);
  };

  return (
    <div id="tabs" className={styles.tabs}>
      <p className={styles.camperDescription}>{activeCamper.description}</p>
      <div className={styles.headWrapper}>
        <ModalTabsHead active={active} handleClick={handleTabClick} />
      </div>
      <div className={styles.tabsContentWrapper}>
        {active === 'Features' ? (
          <Features activeCamper={activeCamper} />
        ) : (
          <Reviews activeCamper={activeCamper} />
        )}
        <BookCamperForm />
      </div>
    </div>
  );
};
