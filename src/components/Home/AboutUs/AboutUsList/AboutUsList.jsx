import { AboutUsListItem } from '../AboutUsListItem/AboutUsListItem';
import styles from './AboutUsList.module.scss';
import { aboutUsItems } from './aboutUsItems';
import { nanoid } from 'nanoid';

export const AboutUsList = () => {
  return (
    <ul className={styles.list}>
      {aboutUsItems.map((item) => (
        <AboutUsListItem key={nanoid()} item={item} />
      ))}
    </ul>
  );
};
