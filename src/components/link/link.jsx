import styles from './link.module.css';
import { SvgSelector } from '../svg-selector/svg-selector';

export const Link = ({ title, icon }) => {
  return (
    <a className={styles.link}>
      <div className={styles.logoContainer}><SvgSelector svg={icon} /></div>
      <p className={styles.title}>{title} <SvgSelector svg='arrowUp' /></p>
    </a>
  )
}