import { Label } from '../Label/Label';
import styles from './LabelList.module.scss';
import { nanoid } from 'nanoid';

export const LabelList = ({ item }) => {
  return (
    <ul className={styles.labelList}>
      {item.map((labelInfo) => (
        <Label key={nanoid()} labelInfo={labelInfo} />
      ))}
    </ul>
  );
};
