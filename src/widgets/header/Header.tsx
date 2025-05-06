import { Logo } from '@/shared/ui/logo';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import { ThemeSwitcher } from '@/shared/ui/themeSwitcher';

import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />

      <div className={styles.actions}>
        <Button
          label='Создать'
          icon={<Icon name='plus' className={styles.icon} />}
          className={styles.create}
          onClick={() => {}}
        />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
