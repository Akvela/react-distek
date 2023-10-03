import styles from './link.module.scss';
import { SvgSelector } from '../svg-selector/svg-selector';

export const Link = ({ title, icon }) => {
  return (
    <a className={styles.item}>
      <div className={styles.logoContainer}><SvgSelector svg={icon} /></div>
      <p className={styles.title}>{title} <SvgSelector svg='arrowRightBlue' /></p>
    </a>
  )
}