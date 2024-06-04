import ReactModal from 'react-modal';
import styles from './Modal.module.scss';
import { useCampersState } from '../../hooks/useCampersState';
import { useDispatch } from 'react-redux';
import { setIsCamperModalOpen } from '../../redux/campers/campersSlice';
import { ModalHead } from './ModalHead/ModalHead';
import { ImagesBlock } from './ImagesBlock/ImagesBlock';
import { ModalTabs } from './ModalTabs/ModalTabs';
import clsx from 'clsx';

ReactModal.setAppElement('#root-modal');

export const Modal = ({ children, hero = false }) => {
  const { isCamperModalOpen, activeCamper } = useCampersState();
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(setIsCamperModalOpen(false));
  };
  return (
    <ReactModal
      isOpen={isCamperModalOpen}
      onRequestClose={onClose}
      closeTimeoutMS={100}
      overlayClassName={styles.overlay}
      className={clsx(styles.modal, {
        [styles.heroModal]: hero,
      })}
    >
      {children ? (
        children
      ) : (
        <>
          <div className={styles.modalContentWrapper}>
            <ModalHead activeCamper={activeCamper} onClose={onClose} />
            <ImagesBlock gallery={activeCamper.gallery} />
            <ModalTabs activeCamper={activeCamper} />
          </div>
          <div className={styles.modalSpacer}></div>
        </>
      )}
    </ReactModal>
  );
};
