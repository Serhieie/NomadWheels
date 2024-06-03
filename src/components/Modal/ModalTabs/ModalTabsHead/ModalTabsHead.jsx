import styles from './ModalTabsHead.module.scss';

export const ModalTabsHead = ({ active, handleClick }) => {
  return (
    <div className={styles.spansWrapper}>
      <span
        onClick={() => handleClick('Features')}
        className={`${
          active === 'Features' ? styles.infoNameSpanActive : styles.infoNameSpan
        }`}
      >
        Features
      </span>
      <span
        onClick={() => handleClick('Reviews')}
        className={`${
          active === 'Reviews' ? styles.infoNameSpanActive : styles.infoNameSpan
        }`}
      >
        Reviews
      </span>
    </div>
  );
};
