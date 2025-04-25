import { Illustration } from '@/components/illustration';

import styles from './statistic.module.css';

export const Statistic = () => {
  return (
    <div className={styles.statistic}>
      <div className={styles.inner}>
        <Illustration
          name='sideImg'
          colorBase={'var(--color-neutral-0)'}
          colorAccent={'var(--color-neutral-300)'}
        />

        <div className={styles.info}>
          <p>
            Здесь мы&nbsp;поможем тебе управлять твоими задачами, отслеживать
            статистику и&nbsp;самочувствие.
          </p>
        </div>
      </div>
    </div>
  );
};
