import { Label } from '../Label/Label';
import styles from './LabelList.module.scss';
import { nanoid } from 'nanoid';

export const LabelList = ({ item, fixedHeight }) => {
  return (
    <ul
      className={`${styles.labelList} ${fixedHeight ? styles.labelListFixedHeight : ''}`}
    >
      {item.map((labelInfo) => (
        <Label key={nanoid()} labelInfo={labelInfo} fixedHeight={fixedHeight} />
      ))}
    </ul>
  );
};
