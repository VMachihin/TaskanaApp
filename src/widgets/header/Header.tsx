import { Logo, Button, Icon, ThemeSwitcher } from '@/shared/ui';
import { useTaskEditorStore } from '@/app/store/store';

import styles from './header.module.css';

export const Header = () => {
  const { toggleTaskEditor } = useTaskEditorStore((state) => state);

  return (
    <header className={styles.header}>
      <Logo />

      <div className={styles.actions}>
        <Button
          label='Создать'
          icon={<Icon name='plus' className={styles.icon} />}
          className={styles.create}
          onClick={toggleTaskEditor}
        />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
