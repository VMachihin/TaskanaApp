import { useTasks } from '@/hooks/useTasks';

import { Logo } from '@/components/logo';
import { Button } from '@/components/button';
import { Icon } from '@/components/icon';
import { ThemeSwitcher } from '@/components/themeSwitcher';

import styles from './header.module.css';

export const Header = () => {
  const { handleOpenTaskEditor } = useTasks();

  return (
    <header className={styles.header}>
      <Logo />

      <div className={styles.actions}>
        <Button
          label='Создать'
          icon={<Icon name='plus' />}
          className={styles.create}
          onClick={handleOpenTaskEditor}
        />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
