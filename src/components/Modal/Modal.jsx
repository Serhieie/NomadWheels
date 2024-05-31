import ReactModal from 'react-modal';
import styles from './Modal.module.scss';

ReactModal.setAppElement('#root-modal');

export const Modal = ({ isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={200}
      overlayClassName={styles.overlay}
      className={styles.modal}
    ></ReactModal>
  );
};
