import styles from './Hero.module.scss';
import sprite from '../../../assets/sprite.svg';
import heroImg from '../../../assets/images/camperHero.webp';
import { Button } from '../../Button';
import { Modal } from '../../Modal/Modal';
import { BookCamperForm } from '../../Modal/BookCamperForm/BookCamperForm';
import { useDispatch } from 'react-redux';
import { setIsCamperModalOpen } from '../../../redux/campers/campersSlice';
import { useCampersState } from '../../../hooks/useCampersState';

export const Hero = () => {
  const { isCamperModalOpen } = useCampersState();
  const dispatch = useDispatch();
  const handleClick = () => {
    if (isCamperModalOpen) {
      dispatch(setIsCamperModalOpen(false));
    } else dispatch(setIsCamperModalOpen(true));
  };

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
          <Button handleClick={handleClick} width={240} text={'Book Now'} type="button" />
        </div>
      </div>
      <Modal hero={true}>
        <svg onClick={handleClick} className={styles.close} width={32} height={32}>
          <use href={`${sprite}#icon-close`}></use>
        </svg>
        <BookCamperForm />
      </Modal>
    </section>
  );
};
