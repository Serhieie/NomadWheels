import styles from './AboutUs.module.scss';
import { AboutUsList } from './AboutUsList/AboutUsList';

export const AboutUs = () => {
  return (
    <section className={styles.section}>
      <AboutUsList />
    </section>
  );
};
