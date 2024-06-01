import clsx from 'clsx';
import styles from './Button.module.scss';

export const Button = ({
  text,
  width = 155,
  accent = true,
  handleClick = null,
  type = 'button',
}) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.notAccentBtn]: !accent,
      })}
      onClick={handleClick && handleClick}
      type={type}
      style={{ minWidth: width }}
    >
      {text}
    </button>
  );
};
