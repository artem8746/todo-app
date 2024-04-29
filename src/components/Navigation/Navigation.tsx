import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Navigation.module.scss';
import { handleNavLinkIsActive } from './utils';

export const Navigation = () => {
  return (
    <aside>
      <nav
        className={styles.nav}
      >
        <NavLink
          to='/'
          className={handleNavLinkIsActive(styles.nav__link, styles['nav__link--active'])}
        >
          All
        </NavLink>
        <NavLink to='deleted' className={handleNavLinkIsActive(styles.nav__link, styles['nav__link--active'])}>
          Deleted
        </NavLink>
      </nav>
    </aside>
  )
}