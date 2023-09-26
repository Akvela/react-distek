import React, { useState } from 'react';
import styles from './list-item.module.scss';
import { SvgSelector } from '../svg-selector/svg-selector';

export const ListItem = ({ number, title, content, opened, toggle }) => {
  
  return (
    <li className={styles.item}>
      <span className={styles.number}>{number}</span>
      <p className={styles.title}>{title}</p>
      <div className={styles.icon} onClick={toggle}><SvgSelector svg={opened ? 'dropdownOpen' : 'dropdownClose'} /></div>
      {opened && <p className={styles.accordion}>{content}</p>}
    </li>
  )
}