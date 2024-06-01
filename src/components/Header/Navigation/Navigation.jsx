import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import styles from './Navigation.module.scss';
import { Logo } from '../Logo/Logo';

export const Navigation = () => {
  const items = ['HomePage', 'Catalog', 'Favorites'];
  return (
    <ul className={styles.navigationList}>
      <li>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </li>
      {items.map((item) => (
        <li key={nanoid()} className={styles.navigationItem}>
          <NavLink
            className={styles.navigationItem_link}
            to={`/${item === 'HomePage' ? '' : item}`}
          >
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
