import styles from './tab.module.scss';
import { SvgSelector } from '../svg-selector/svg-selector';

export const Tab = ({ number, title, children, setHover, imageBackgroundSoft }) => {
  return (
    <article className={styles.item} onMouseEnter={setHover ? () => setHover(true) : () => {}} onMouseLeave={setHover ? () => setHover(false) : () => {}}>
      <span className={styles.icon}><SvgSelector svg={number} /></span>
      <h2 className={styles.title}>{title}</h2>
      {imageBackgroundSoft && <img className={styles.backgroundSoftTab} src={imageBackgroundSoft} alt='фон карточки' />}
      {children}
    </article>
  )
}