import styles from './Header.module.scss';
import { Navigation } from './Navigation/Navigation';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.roadDiv1}></div>
      <div className={styles.roadDiv2}></div>
      <Navigation />
    </header>
  );
};
