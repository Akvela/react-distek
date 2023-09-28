import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { Button } from '../button/button';
import { SvgSelector } from '../svg-selector/svg-selector';
import logo from '../../assets/images/logo.png';

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [windowWidth])

  return (
    <header className={styles.item}>
      <div className={styles.container}>
        <a href='/'>
          <img className={styles.logo} src={logo} alt='Логотип' />
        </a>

        <ul className={styles.menu}>
          <li>
            <a href='#' className={styles.link}>программное обеспечение <SvgSelector svg='arrowDown' /></a>
          </li>
          <li>
            <a href='#' className={styles.link}>Новости <SvgSelector svg='arrowDown' /></a>
          </li>
          <li>
            <a href='#' className={styles.link}>О нас <SvgSelector svg='arrowDown' /></a>
          </li>
        </ul>
      </div>
      <Button isPhone onClick='tel:+74956609370' size={windowWidth <= 1199 ? 'medium' : 'large'}>+7&#160;495&#160;660&#160;93&#160;70</Button>
    </header>
  )
}

export default Header;