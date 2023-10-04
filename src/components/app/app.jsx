import React, { useState, useEffect, useRef, createRef } from 'react';
import styles from './app.module.scss';
import Header from '../header/header';
import Main from '../../pages/main/main';
import Footer from '../footer/footer';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const softRef = useRef(null);
  const newsRef = useRef(null);
  const aboutRef = useRef(null);
  const tabsLinksRefs = useRef([]);
  const cardTitleRefs = useRef([]);

  const scrollEffect = ( targetRef ) =>{
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  useEffect(() => {
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWindowWidth);

  if (tabsLinksRefs.current !== null) {
    for (let i = 1; i < tabsLinksRefs.current.length; i++) {
      if (windowWidth > 1380) {
        if (tabsLinksRefs.current[i].current.offsetHeight < tabsLinksRefs.current[i - 1].current.offsetHeight) {
          tabsLinksRefs.current[i].current.style.height = tabsLinksRefs.current[i - 1].current.offsetHeight + 'px';
        } else if (tabsLinksRefs.current[i].current.offsetHeight > tabsLinksRefs.current[i - 1].current.offsetHeight) {
          tabsLinksRefs.current[i - 1].current.style.height = tabsLinksRefs.current[i].current.offsetHeight + 'px';
        }
      } else {
        if (i === 1) {
          tabsLinksRefs.current[i - 1].current.style.height = 'auto';
        }
        tabsLinksRefs.current[i].current.style.height = 'auto';
      }
    } 
  }

  if (cardTitleRefs.current !== null) {
    for (let i = 1; i < cardTitleRefs.current.length; i++) {
      if (cardTitleRefs.current[i].current.offsetHeight < cardTitleRefs.current[i - 1].current.offsetHeight) {
        cardTitleRefs.current[i].current.style.height = cardTitleRefs.current[i - 1].current.offsetHeight + 'px';
      } else if (cardTitleRefs.current[i].current.offsetHeight > cardTitleRefs.current[i - 1].current.offsetHeight) {
        cardTitleRefs.current[i - 1].current.style.height = cardTitleRefs.current[i].current.offsetHeight + 'px';
      }
    }
  }

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [windowWidth])

  return (
    <div className={styles.app}>
      <Header softRef={softRef} newsRef={newsRef} aboutRef={aboutRef} scrollEffect={scrollEffect} windowWidth={windowWidth} />
      <Main softRef={softRef} newsRef={newsRef} aboutRef={aboutRef} tabsLinksRefs={tabsLinksRefs} cardTitleRefs={cardTitleRefs} windowWidth={windowWidth}  />
      <Footer softRef={softRef} newsRef={newsRef} aboutRef={aboutRef} scrollEffect={scrollEffect} windowWidth={windowWidth} />
    </div>
  )
}

export default App;