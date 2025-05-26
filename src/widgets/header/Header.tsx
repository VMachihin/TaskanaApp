import { Logo, Button, Icon, ThemeSwitcher } from '@/shared/ui';
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
