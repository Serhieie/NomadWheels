import { ProgressBar } from 'react-loader-spinner';
import styles from './Loader.module.scss';

export const Loader = ({ isSuspense = false }) => {
  const width = isSuspense ? '120' : '80';
  const height = isSuspense ? '120' : '80';
  return (
    <div className={styles.overlay}>
      <ProgressBar
        visible={true}
        height={width}
        width={height}
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
      />
    </div>
  );
};
