import { Navigation } from "../Navigation";
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.header__title}>Todo-app</h1>

        <Navigation />
      </div>
    </section>
  );
}