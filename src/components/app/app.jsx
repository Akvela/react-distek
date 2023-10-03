import React from 'react';
import styles from './app.module.scss';
import Header from '../header/header';
import Main from '../../pages/main/main';
import Footer from '../footer/footer';

function App() {
  const softRef = React.useRef(null);
  const newsRef = React.useRef(null);
  const aboutRef = React.useRef(null);

  const scrollEffect = ( targetRef ) =>{
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <div className={styles.app}>
      <Header softRef={softRef} newsRef={newsRef} aboutRef={aboutRef} scrollEffect={scrollEffect} />
      <Main softRef={softRef} newsRef={newsRef} aboutRef={aboutRef} />
      <Footer softRef={softRef} newsRef={newsRef} aboutRef={aboutRef} scrollEffect={scrollEffect} />
    </div>
  )
}

export default App;