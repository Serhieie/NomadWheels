import clsx from 'clsx';
import styles from './Button.module.scss';
import { Loader } from '../../Loader/Loader';

export const Button = ({
  text,
  width = 145,
  accent = true,
  handleClick = null,
  type = 'button',
  loading = false,
}) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.accentBtn]: accent,
        [styles.notAccentBtn]: !accent,
      })}
      onClick={handleClick && handleClick}
      type={type}
      style={{ minWidth: width }}
    >
      {loading ? <Loader /> : text}
    </button>
  );
};
