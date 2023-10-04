import React, { useEffect, useState } from 'react';
import styles from './footer.module.scss';
import { Button } from '../button/button';
import { SvgSelector } from '../svg-selector/svg-selector';
import { FormInput } from '../form-input/form-input';
import logo from '../../assets/images/logo.png';
import inst from '../../assets/images/in.svg';
import fc from '../../assets/images/fc.svg';
import vk from '../../assets/images/vk.svg';
import yt from '../../assets/images/yt.svg';
import studio from '../../assets/images/logo-studio.svg';
import arrowUpBlue from '../../assets/images/arrow-up-blue.svg';
import arrowRightBlue from '../../assets/images/arrow-right-blue.svg';


function Footer({ softRef, newsRef, aboutRef, scrollEffect }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [windowWidth])

  return (
    <footer>
      <div className={styles.item}>
        <div className={styles.logoContainer}>
          <a href='/'>
            <img className={styles.logo} src={logo} alt='логотип' />
          </a>
          <p className={styles.copyright}><span>ООО «ДИСТЕК»</span> Все права защищены</p>
        </div>
        <div className={styles.main}>
          <div>
            <button onClick={() =>scrollEffect(softRef)} className={styles.link + ' ' + styles.linkTitle}>программное обеспечение <SvgSelector svg='arrowUp' /><img className={styles.arrow} src={arrowUpBlue} alt='иконка стрелка вверх' /></button>
            <ul className={styles.listLinks}>
              <li>
                <a className={styles.link} href='#'>Sketchup <SvgSelector svg='arrowRight' /><img className={styles.arrow} src={arrowRightBlue} alt='иконка стрелка вправо' /></a>
              </li>
              <li>
                <a className={styles.link} href='#'>tekla structures <SvgSelector svg='arrowRight' /><img className={styles.arrow} src={arrowRightBlue} alt='иконка стрелка вправо' /></a>
              </li>
              <li>
                <a className={styles.link} href='#'>Tekla model sharing <SvgSelector svg='arrowRight' /><img className={styles.arrow} src={arrowRightBlue} alt='иконка стрелка вправо' /></a>
              </li>
              <li>
                <a className={styles.link} href='#'>Trimble connect <SvgSelector svg='arrowRight' /><img className={styles.arrow} src={arrowRightBlue} alt='иконка стрелка вправо' /></a>
              </li>
            </ul>
          </div>
          <div>
            <button onClick={() =>scrollEffect(aboutRef)} className={styles.link + ' ' + styles.linkTitle}>О нас <SvgSelector svg='arrowUp' /><img className={styles.arrow} src={arrowUpBlue} alt='иконка стрелка вверх' /></button>
            <ul className={styles.listLinks}>
              <li>
                <button onClick={() =>scrollEffect(newsRef)} className={styles.link}>Новости <SvgSelector svg='arrowUp' /><img className={styles.arrow} src={arrowUpBlue} alt='иконка стрелка вверх' /></button>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.form}>
          <FormInput />
        </div>
      </div>
      <div className={styles.contacts}>
        <Button isPhone onClick='tel:+74956609370' size={windowWidth <= 743 ? 'medium' : 'large'} addClass={styles.button}>+7&#160;495&#160;660&#160;93&#160;70</Button>
        <ul className={styles.icons}>
          <li className={styles.wrapper}>
            <a href='#' className={styles.socialUrl}><img src={fc} alt='иконка соцсети' /></a>
          </li>
          <li className={styles.wrapper}>
            <a href='#' className={styles.socialUrl}><img src={vk} alt='иконка соцсети' /></a>
          </li>
          <li className={styles.wrapper}>
            <a href='#' className={styles.socialUrl}><img src={yt} alt='иконка соцсети' /></a>
          </li>
          <li className={styles.wrapper}>
            <a href='#' className={styles.socialUrl}><img src={inst} alt='иконка соцсети' /></a>
          </li>
        </ul>
        <div className={windowWidth <= 743 ? styles.autors : styles.wrapper + ' ' + styles.autors}>
          <p className={styles.autorsContacts}><span>Москва</span> | 
            <a className={styles.autorsContactsUrl} href='tel:+74956609370'>+7&#160;495&#160;660&#160;93&#160;70</a> | 
            <a className={styles.autorsContactsUrl} href='#'>info@distek.ru</a>
          </p>
          <p className={styles.autorsContacts + ' ' + styles.autorsLogo}>
            сделано в 
            <img src={studio} alt='логотип студии' />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;