import React from 'react';
import styles from './styles.scss';

const SelectControlItem = ({ onRemove, title, multiple }) => (
  <li className={styles.item}>
    {title}
    { multiple && <span className={styles.close} onClick={onRemove} /> }
  </li>
);
export default SelectControlItem;
