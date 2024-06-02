import styles from './Hero.module.scss';
import heroImg from '../../../assets/images/camperHero.webp';
import { Button } from '../../CustomItems/Button';

export const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.roadDiv1}></div>
      <div className={styles.roadDiv2}></div>
      <div className={styles.roadDiv3}></div>
      <div className={styles.roadDiv4}></div>
      <div className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
        <div className={styles.rentDiv}>
          <h1 className={styles.heroTitle}>Your next Outdoorsy adventure starts here</h1>
          <p>
            Discover the best RV, camper van or travel trailer rental for your next
            vacation.
          </p>
          <Button width={240} text={'Rent Now'} type="button" />
        </div>
      </div>
    </section>
  );
};
