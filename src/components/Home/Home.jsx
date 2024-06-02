import styles from './Home.module.scss';
import { AboutUs } from './AboutUs/AboutUs';
import { Hero } from './Hero/Hero';
import { Spacer } from './Spacer/Spacer';

export const Home = () => {
  return (
    <div className={styles.welcome}>
      <Hero />
      <AboutUs />
      <Spacer />
    </div>
  );
};
