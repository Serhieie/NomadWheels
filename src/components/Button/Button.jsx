import clsx from 'clsx';
import styles from './Button.module.scss';
import { Loader } from '../Loader/Loader';
import { useCampersState } from '../../hooks/useCampersState';

export const Button = ({
  text,
  width = 145,
  accent = true,
  handleClick = null,
  type = 'button',
  loader = false,
  filters = false,
}) => {
  const { loading, filteredLoading } = useCampersState();
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
      {(loader && loading) || (filters && filteredLoading) ? <Loader /> : text}
    </button>
  );
};
