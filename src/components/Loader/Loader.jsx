import { ProgressBar } from 'react-loader-spinner';
import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.overlay}>
      <ProgressBar
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
      />
    </div>
  );
};
