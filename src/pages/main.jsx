import React, { useEffect, useState } from 'react';
import styles from './main.module.css';
import { Link } from '../components/link/link';
import { Tab } from '../components/tab/tab';
import { SvgSelector } from '../components/svg-selector/svg-selector';
import { ListItem } from '../components/list-item/list-item';
import backgroundTab from '../images/main-screen.png';

function Main() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHoverTab, setIsHoverTab] = useState(false);

  useEffect(() => {
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [windowWidth])

  return (
    <main>
      <section className={styles.section + ' ' + styles.section_type_title}>
        <h1 className={styles.title}>Distek – дистрибьютор программного обеспечения</h1>
        <span className={styles.span}>решения для BIM-моделирования</span>
        <ul className={styles.listLinks}>
          <li className={styles.listItem}>
            <Link title='Sketchup' icon='partnerLogoSketchup' />
          </li>
          <li className={styles.listItem}>
            <Link title='Tekla structures' icon='partnerLogoTekla' />
          </li>
          <li className={styles.listItem}>
            <Link title='Tekla model sharing' icon='partnerLogoTekla' />
          </li>
          <li className={styles.listItem}>
            <Link title='Trimble connect' icon='partnerLogoTrimble' />
          </li>
        </ul>
      </section>
      <section className={styles.tabs}>
        <div className={(isHoverTab && windowWidth >= 1505) ? `${styles.tabsContainer} ${styles.tabsContainerActive}` : styles.tabsContainer}>
          <Tab number='one' title='партнерам и вендорам' email='info@distek.ru' imageBackground={backgroundTab}>
            <a className={styles.tabEmail} href='#'><SvgSelector svg='email' />info@distek.ru</a>
            <h3 className={styles.titleListAdvantages}>преимущества</h3>
            <ol className={styles.listAdvantages}>
              <ListItem number='01' title='Маркетинг' />
              <ListItem number='02' title='Поддержка при работе с&#160;заказчиками' />
              <ListItem number='03' title='Более 30 партнеров' />
              <ListItem number='04' title='Информационная поддержка' />
              <ListItem number='05' title='Логистика' />
              <ListItem number='06' title='Обучение' />
            </ol>
          </Tab>
          <Tab number='two' title='пользователям' setHover={setIsHoverTab}>
            <p className={styles.paragraphAdvantages}>Подберите программные продукты для моделирования конструкции и визуализации проектов</p>
            <a className={styles.linkAdvantages} href='#'><SvgSelector svg={windowWidth <= 1505 ? 'arrowDownBlue' : 'roundDownArrow'} />подробнее о решениях для ваших задач</a>
          </Tab>
        </div>
      </section>
    </main>
  )
}

export default Main;