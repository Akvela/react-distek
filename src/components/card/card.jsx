import styles from './card.module.scss';
import { SvgSelector } from '../svg-selector/svg-selector';

export const Card = ({ date, title, background, link, refTitle }) => {
  const cardStyle = {
    background: `url(${background}) center left / cover no-repeat`
  };

  return (
    <a className={styles.container} href={`http://${link}/`} style={cardStyle}>
      <article className={styles.item}>
        <div className={styles.dateContainer}>
          <span className={styles.date}>{date}</span>
        </div>
        <h2 className={styles.title} ref={refTitle}>{title}</h2>
        <div className={styles.link}>
          <p className={styles.linkText}>подробнее на <span className={styles.linkUrl}>{link}</span></p>
          <SvgSelector svg='roundRightArrow' />
        </div>
      </article>
    </a>
  )
}
