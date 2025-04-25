import { Icon } from '@/components/icon';

import styles from './navbar.module.css';

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href='##' className={styles.link}>
            <Icon name='inbox' />
            <span>Входящие</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
