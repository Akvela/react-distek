import React, { useEffect, useState } from 'react';
import styles from './main.module.scss';
import { Link } from '../components/link/link';
import { Tab } from '../components/tab/tab';
import { SvgSelector } from '../components/svg-selector/svg-selector';
import { ListItem } from '../components/list-item/list-item';
import backgroundTab from '../images/main-screen.png';
import arrowDownWhite from '../images/arrow-down-white.svg'

function Main() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHoverTab, setIsHoverTab] = useState(false);
  const [openIdAccordion, setOpenIdAccordion] = useState('');

  function toggleAccordion (id) {
    if (openIdAccordion === id) {
      setOpenIdAccordion('');
    } else {
      setOpenIdAccordion(id);
    }
  }

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
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>Distek – дистрибьютор программного обеспечения</h1>
          <span className={styles.span}>решения для BIM-моделирования</span>
        </div>
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
              <ListItem 
                number='01' 
                title='Маркетинг' 
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat.'
                opened={openIdAccordion === '01'}
                toggle={() => toggleAccordion('01')}
              />
              <ListItem 
                number='02' 
                title='Поддержка при работе с&#160;заказчиками' 
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                  laborum.'
                opened={openIdAccordion === '02'}
                toggle={() => toggleAccordion('02')}
              />
              <ListItem 
                number='03' 
                title='Более 30 партнеров' 
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                  magna aliqua.' 
                opened={openIdAccordion === '03'}
                toggle={() => toggleAccordion('03')}
              />
              <ListItem 
                number='04' 
                title='Информационная поддержка' 
                content='Pellentesque sit amet porttitor eget. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Quam 
                  id leo in vitae turpis massa sed elementum. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. 
                  Lectus quam id leo in vitae turpis massa. Sit amet consectetur adipiscing elit duis. Lacus luctus accumsan tortor 
                  posuere ac. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Netus et malesuada fames 
                  ac. Egestas sed sed risus pretium. Auctor neque vitae tempus quam pellentesque nec nam. Duis ultricies lacus sed 
                  turpis.' 
                opened={openIdAccordion === '04'}
                toggle={() => toggleAccordion('04')}
              />
              <ListItem 
                number='05' 
                title='Логистика' 
                content='Pellentesque sit amet porttitor eget.' 
                opened={openIdAccordion === '05'}
                toggle={() => toggleAccordion('05')}
              />
              <ListItem 
                number='06' 
                title='Обучение' 
                content='Pellentesque sit amet porttitor eget. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Quam 
                id leo in vitae turpis massa sed elementum. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.' 
                opened={openIdAccordion === '06'}
                toggle={() => toggleAccordion('06')}
              />
            </ol>
          </Tab>
          <Tab number='two' title='пользователям' setHover={setIsHoverTab}>
            <p className={styles.paragraphAdvantages}>Подберите программные продукты для моделирования конструкции и визуализации проектов</p>
            <a className={styles.linkAdvantages} href='#'>
              <SvgSelector svg={windowWidth <= 1505 ? 'arrowDownBlue' : 'roundDownArrow'} />
              <img className={styles.linkAdvantagesIcon} src={arrowDownWhite} alt='иконка стрелка вниз' />подробнее о решениях для ваших задач
            </a>
          </Tab>
        </div>
      </section>
    </main>
  )
}

export default Main;