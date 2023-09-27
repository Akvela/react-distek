import React, { useState, useRef } from 'react';
import styles from './list-item.module.scss';
import { SvgSelector } from '../svg-selector/svg-selector';

export const ListItem = ({ number, title, content, opened, toggle, refBody }) => {
  const accordionContent = useRef(null);
  let heightElement = 0;
  if (refBody.current !== null) {
    if (!opened) {
      refBody.current.style.height = 0;
    }
  }
  
  function handleClick() {
    heightElement = accordionContent.current.offsetHeight;
    refBody.current.style.height = heightElement + 'px';
    toggle();
  }
  
  return (
    <li className={styles.item} onClick={handleClick}>
      <span className={styles.number}>{number}</span>
      <p className={styles.title}>{title}</p>
      <div className={styles.icon}><SvgSelector svg={opened ? 'dropdownOpen' : 'dropdownClose'} /></div>
      <div className={styles.containerAccordion} ref={refBody}> 
        <p className={styles.accordion} ref={accordionContent}>{content}</p>
      </div>
    </li>
  )
}