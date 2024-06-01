import { Logo } from '../Header/Logo/Logo';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerText}>FOOTER</span>
      <Logo red={false} />
    </footer>
  );
};
