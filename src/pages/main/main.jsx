import React, { useState, useRef, createRef } from 'react';
import styles from './main.module.scss';
import { Link } from '../../components/link/link';
import { Tab } from '../../components/tab/tab';
import { SvgSelector } from '../../components/svg-selector/svg-selector';
import { ListItem } from '../../components/list-item/list-item';
import { Button } from '../../components/button/button';
import { Card } from '../../components/card/card';
import { FormInput } from '../../components/form-input/form-input';
import arrowDownWhite from '../../assets/images/arrow-down-white.svg';
import backgroundTabSoft1 from '../../assets/images/tab-1.gif';
import backgroundTabSoft2 from '../../assets/images/tab-2.gif';
import backgroundTabSoft3 from '../../assets/images/tab-3.gif';
import backgroundCard1 from '../../assets/images/card1.jpeg';
import backgroundCard2 from '../../assets/images/card2.jpeg';
import backgroundCard3 from '../../assets/images/card3.jpeg';
import backgroundCard4 from '../../assets/images/card4.jpeg';

function Main({ softRef, newsRef, aboutRef, tabsLinksRefs, cardTitleRefs, windowWidth }) {
  const [isHoverTab, setIsHoverTab] = useState(false);
  const [openIdAccordion, setOpenIdAccordion] = useState('');
  const accordionBodyRefs = useRef([]);
  
  const linksPartner = [
    { title: 'Sketchup', logo: 'partnerLogoSketchup' },
    { title: 'Tekla structures', logo: 'partnerLogoTekla' },
    { title: 'Tekla model sharing', logo: 'partnerLogoTekla' },
    { title: 'Trimble connect', logo: 'partnerLogoTrimble' }
  ];

  const accordionItems = [
    { number: '01', title: 'Маркетинг', text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
      aliquip ex ea commodo consequat.` },
    { number: '02', title: 'Поддержка при работе с заказчиками', text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
      est laborum.` },
    { number: '03', title: 'Более 30 партнеров', text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua.` },
    { number: '04', title: 'Информационная поддержка', text: `Pellentesque sit amet porttitor eget. Diam sit amet nisl suscipit 
      adipiscing bibendum est ultricies. Quam id leo in vitae turpis massa sed elementum. Risus nec feugiat in fermentum posuere urna 
      nec tincidunt praesent. Lectus quam id leo in vitae turpis massa. Sit amet consectetur adipiscing elit duis. Lacus luctus 
      accumsan tortor posuere ac. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Netus et malesuada 
      fames ac. Egestas sed sed risus pretium. Auctor neque vitae tempus quam pellentesque nec nam. Duis ultricies lacus sed 
      turpis.` },
    { number: '05', title: 'Логистика', text: `Pellentesque sit amet porttitor eget.` },
    { number: '06', title: 'Обучение', text: `Pellentesque sit amet porttitor eget. Diam sit amet nisl suscipit adipiscing bibendum 
      est ultricies. Quam id leo in vitae turpis massa sed elementum. Risus nec feugiat in fermentum posuere urna nec tincidunt 
      praesent.` },
  ]

  const tabsSoft = [
    { number: 'one',
      title: 'Эскизное 3d‑моделирование',
      image: backgroundTabSoft1,
      listLinks: [{ title: 'Sketchup', logo: 'partnerLogoSketchup' }],
      listAdvantages: [
        'Быстрое, простое и качественное создание 3D-моделей любых объектов по чертежу, изображению, фотографии и т.д.',
        'Оформление проектной документации по требованиям ЕСКД и СПДС, создание отчётов и спецификаций',
        'Крупнейшая библиотека бесплатных 3D-моделей',
        'Просмотр модели в виртуальной реальности',
        'Обмер помещений непосредственно в SketchUp'
      ]
    },
    { number: 'two',
      title: 'Моделирование и деталировка',
      image: backgroundTabSoft2,
      listLinks: [{ title: 'Tekla structures', logo: 'partnerLogoTekla' }, { title: 'Tekla model sharing', logo: 'partnerLogoTekla' }],
      listAdvantages: [
        'Создание информационной модели с высоким уровнем детализации (LOD 500)',
        'Совместная работа над проектом с неограниченным количеством участников',
        'Создание отчетов и экспорт ЧПУ файлов',
        'Экономическая оценка конструкций на этапе планирования',
        'Проверка на коллизии в один клик'
      ]
    },
    { number: 'three',
      title: 'Доступ к проектной информации',
      image: backgroundTabSoft3,
      listLinks: [{ title: 'Trimble connect', logo: 'partnerLogoTrimble' }],
      listAdvantages: [
        'Совместная работа над проектом из любой точки мира',
        'Неограниченное облачное хранилище документов и моделей',
        'Контроль изменений в проекте',
        'Назначение статуса и определение сроков выполнения задач',
        'Просмотр сведения о проекте в мобильном приложении Trimble Connect или VR-гарнитуре'
      ]
    },
  ];

  const towns = ['Москва', 'Ярославль', 'Волгоград', 'Казань', 'Люберцы', 'Екатеринбург', 'Санкт-Петербург', 'Липецк', 'Ростов-на-Дону',
    'Тверь', 'Краснодар', 'Великий Новгород', 'Калининград', 'Вельск'];

  const news = [
    { date: '09.02.2022',
      title: 'Вебинар «Опыт AFRY: от предпроекта до выпуска рабочей документации. Как достичь высокой производительности работ?»',
      image: backgroundCard1,
      link: 'distek.tekla.ru'
    },
    { date: '03.02.2022',
      title: 'Квиз-тест по SketchUp! Получи сертификат c указанием уровня владения программой',
      image: backgroundCard2,
      link: 'distek.tekla.ru'
    },
    { date: '21.01.2022',
      title: 'Вебинар «Опыт AFRY: от предпроекта до выпуска рабочей документации. Как достичь высокой производительности работ?»',
      image: backgroundCard3,
      link: 'distek.tekla.ru'
    },
    { date: '21.01.2022',
      title: 'Квиз-тест по SketchUp! Получи сертификат c указанием уровня владения программой',
      image: backgroundCard4,
      link: 'distek.tekla.ru'
    }
  ]

  function toggleAccordion (id, accordionBody) {
    if (openIdAccordion === id) {
      setOpenIdAccordion('');
      accordionBody.current.style.height = 0;
    } else {
      setOpenIdAccordion(id);
    }
  }
  
  accordionBodyRefs.current = accordionItems.map((_, i) => accordionBodyRefs.current[i] ?? createRef());
  tabsLinksRefs.current = tabsSoft.map((_, i) => tabsLinksRefs.current[i] ?? createRef());
  cardTitleRefs.current = news.map((_, i) => cardTitleRefs.current[i] ?? createRef());

  return (
    <main>
      <section className={styles.section + ' ' + styles.section_type_title} ref={aboutRef}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>Distek – дистрибьютор программного обеспечения</h1>
          <span className={styles.span}>решения для BIM-моделирования</span>
        </div>
        <ul className={styles.listLinks}>
          {linksPartner.map((link, index)=>(
            <li className={styles.listItem} key={index}>
              <Link title={link.title} icon={link.logo} />
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.tabs}>
        <div className={(isHoverTab && windowWidth > 1505) ? `${styles.tabsContainer} ${styles.tabsContainerActive}` : styles.tabsContainer}>
          <Tab number='one' title='партнерам и вендорам'>
            <a className={styles.tabEmail} href='#'><SvgSelector svg='email' />info@distek.ru</a>
            <div className={styles.tabBackground}></div>
            <h3 className={styles.titleListAdvantages}>преимущества</h3>
            <ol className={styles.listAdvantages}>

              {accordionItems.map((item, index)=>(
                <ListItem 
                  number={item.number} 
                  title={item.title}
                  content={item.text}
                  opened={openIdAccordion === item.number}
                  toggle={() => toggleAccordion(item.number, accordionBodyRefs.current[index])}
                  refBody={accordionBodyRefs.current[index]}
                  key={index}
                />
              ))}
            
            </ol>
          </Tab>
          <Tab number='two' title='пользователям' setHover={setIsHoverTab}>
            <p className={styles.paragraphAdvantages}>Подберите программные продукты для моделирования конструкции и визуализации проектов</p>
            <a className={styles.linkAdvantages} href='#'>
              <SvgSelector svg={windowWidth <= 1505 ? 'arrowDownBlue' : 'roundDownArrow'} />
              <img className={styles.linkAdvantagesIcon} src={arrowDownWhite} alt='иконка стрелка вниз' />подробнее о решениях для ваших задач
            </a>
          </Tab>
        </div>
      </section>
      <section ref={softRef}>
        <div className={styles.section}>
          <h2 className={styles.softTitle}>Программное обеспечение для ваших задач</h2>
        </div>
        <div className={styles.softTabs}>

          {tabsSoft.map((tab, index)=>(
            <Tab number={tab.number} title={tab.title} imageBackgroundSoft={tab.image} key={index}>
              <ul className={styles.listSoftLinks} ref={tabsLinksRefs.current[index]}>
                {tab.listLinks.map((link, index)=>(
                  <li key={index}>
                    <Link title={link.title} icon={link.logo} />
                  </li>
                ))}
              </ul>
              <ul className={styles.listSoftAdvantages}>
                {tab.listAdvantages.map((link, index)=>(
                  <li className={styles.listItemSoftAdvantages} key={index}>
                    {link}
                  </li>
                ))}
              </ul>
            </Tab>
          ))}

        </div>
      </section>
      <section className={styles.section + ' ' + styles.section_type_dilers}>
        <div className={styles.containerDilers}>
          <h2 className={styles.titleDilers}>Дилерская сеть – более 30 партнёров</h2>
          <ul className={styles.listDilers}>
          {towns.map((item, index)=>(
            <li className={styles.listItemTowns} key={index}>
              {item}
            </li>
          ))}
          </ul>
          <ol className={styles.listContacts}>
            <li className={styles.itemListContacts}>
              <span className={styles.numberListContacts}>01</span>
              <div>
                <h3 className={styles.titleItemListContacts}>хотите стать партнером?</h3>
                <span className={styles.spanItemListContacts}>оставьте заявку для консультации</span>
              </div>
              <div>
                <Button size='small'>закажите звонок</Button>
              </div>
            </li>
            <li className={styles.itemListContacts}>
              <span className={styles.numberListContacts}>02</span>
              <span className={styles.titleItemListContacts}>ООО Дистек</span>
              <span className={styles.titleItemListContacts + ' ' + styles.rightPosition}>Москва</span>
            </li>
            <li className={styles.itemListContacts}>
              <span className={styles.numberListContacts}>03</span>
              <span className={styles.titleItemListContacts }>+7&#160;495&#160;660&#160;93&#160;70</span>
              <span className={styles.titleItemListContacts + ' ' + styles.rightPosition}>info@distek.ru</span>
            </li>
          </ol>
        </div>
      </section>
      <section ref={newsRef}>
        <div className={styles.headerNews}>
          <div className={windowWidth <= 743 ? '' : styles.section}>
            <h2 className={styles.titleNews}>Новости</h2>
            <p className={styles.textNews}>самое актуальное на сегодняшний день в мире bim-проектирования</p>
          </div>
          <div className={windowWidth <= 743 ? '' : styles.section}>
            <FormInput />
          </div>
        </div>
        <ul className={styles.newsList}>
          {news.map((item, index)=>(
            <li className={styles.newsItem} key={index}>
              <Card date={item.date} background={item.image} title={item.title} link={item.link} refTitle={cardTitleRefs.current[index]}/>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;