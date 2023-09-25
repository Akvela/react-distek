import styles from './tab.module.css';
import { SvgSelector } from '../svg-selector/svg-selector';

export const Tab = ({ number, title, children, imageBackground, setHover }) => {
  return (
    <article className={styles.tab} onMouseEnter={setHover ? () => setHover(true) : () => {}} onMouseLeave={setHover ? () => setHover(false) : () => {}}>
      <span className={styles.icon}><SvgSelector svg={number} /></span>
      <h2 className={styles.title}>{title}</h2>
      {imageBackground && <img className={styles.background} src={imageBackground}/>}
      {children}
    </article>
  )
}