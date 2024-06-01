import { AboutUs } from '../HomeComponents/AboutUs/AboutUs';
import { Hero } from '../HomeComponents/Hero/Hero';
import { Spacer } from '../HomeComponents/Spacer/Spacer';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.welcome}>
      <Hero />
      <AboutUs />
      <Spacer />
    </div>
  );
};
