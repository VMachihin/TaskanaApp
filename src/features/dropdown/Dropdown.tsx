import { Button, Icon } from '@/shared/ui';
import styles from './dropdown.module.css';

import clsx from 'clsx';
import { dropdownItems } from './lib/dropdownItems';
import { useState } from 'react';
import { DropdownItem } from '@/shared/types/dropdownItem';

export const Dropdown = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState(dropdownItems[4]);

  const handleOpenDropdown = () => {
    setIsOpenDropdown((prev) => !prev);
  };

  const handleSelectItem = ({ icon, label, value }: DropdownItem) => {
    setSelectedItem({ icon, label, value });
    // sortingTasks(value);
    handleOpenDropdown();
  };

  return (
    <div className={styles.dropdownWrapper} /* ref={dropdownRef} */>
      <Button
        className={clsx(
          styles.dropdownButton,
          isOpenDropdown ? styles.activeDropdown : ''
        )}
        label={`По ${selectedItem ? selectedItem.label.toLowerCase() : ''}`}
        icon={<Icon name={selectedItem.icon} />}
        hasChevron
        onClick={handleOpenDropdown}
      />

      <div
        className={clsx(
          styles.dropdownMenu,
          isOpenDropdown ? styles.isOpen : ''
        )}
      >
        <div className={styles.dropdownHeader}>
          <Icon name='filter' />
          <span className={styles.title}>Сортировка по</span>
        </div>

        <ul className={`${styles.dropdownList} `}>
          {dropdownItems.map((item) => (
            <li key={item.value} className={styles.menuItem}>
              <Button
                label={`${item.label}`}
                icon={<Icon name={item.icon} />}
                className={`${styles.menuButton} ${
                  item.value === 'header' ? styles.default : ''
                } ${selectedItem.value === item.value ? styles.checked : ''}`}
                onClick={() => handleSelectItem(item)}
              />

              <div className={styles.iconWrapper}>
                {selectedItem.value === item.value &&
                  selectedItem.value !== 'header' && <Icon name='check' />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
