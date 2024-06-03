import { nanoid } from 'nanoid';
import styles from './ImagesBlock.module.scss';

export const ImagesBlock = ({ gallery }) => {
  return (
    <ul className={styles.imgsBlock}>
      {gallery.map((img) => (
        <li key={nanoid()}>
          <img src={img} alt="Car details" width={290} height={310}></img>
        </li>
      ))}
    </ul>
  );
};
