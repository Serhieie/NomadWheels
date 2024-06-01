import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from './Main';
import styles from './Layout.module.scss';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
