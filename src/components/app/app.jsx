import styles from './app.module.css';
import Header from '../header/header';
import Main from '../../pages/main';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  )
}

export default App;