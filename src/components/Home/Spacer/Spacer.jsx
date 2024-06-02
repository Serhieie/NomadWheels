import { useEffect, useRef } from 'react';
import styles from './Spacer.module.scss';

export const Spacer = ({ children }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.61}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.spacer}>
      <div className={styles.window} ref={parallaxRef}>
        {children}
      </div>
    </section>
  );
};
