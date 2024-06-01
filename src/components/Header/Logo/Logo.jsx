import clsx from 'clsx';
import styles from './Logo.module.scss';

export const Logo = ({ red = true }) => {
  return (
    <p className={styles.logoWrapper}>
      <span
        className={clsx(styles.logo, {
          [styles.redLogo]: red,
          [styles.whiteLogo]: !red,
        })}
      >
        NW
      </span>
      <span
        className={clsx(styles.logoDot, {
          [styles.redDot]: red,
          [styles.whiteDot]: !red,
        })}
      ></span>
    </p>
  );
};
