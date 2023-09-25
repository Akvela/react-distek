import styles from './list-item.module.css';
import { SvgSelector } from '../svg-selector/svg-selector';

export const ListItem = ({ number, title }) => {
  return (
    <li className={styles.item}>
      <span className={styles.number}>{number}</span>
      <p className={styles.title}>{title}</p>
      <div className={styles.icon}><SvgSelector svg='dropdown' /></div>
    </li>
  )
}