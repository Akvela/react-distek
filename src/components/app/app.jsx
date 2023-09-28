import styles from './app.module.scss';
import Header from '../header/header';
import Main from '../../pages/main/main';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  )
}

export default App;