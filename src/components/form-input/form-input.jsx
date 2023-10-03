import styles from './form-input.module.scss';
import { SvgSelector } from '../svg-selector/svg-selector';

export const FormInput = () => {
  return (
    <>
      <p className={styles.title}>подпишитесь на наши новости</p>
      <form className={styles.container}>
        <input className={styles.item} type='text' placeholder='your@email.ru' />
        <button className={styles.button} type='submit'><span>подписаться </span><SvgSelector svg='roundRightArrow'/></button>
        <p className={styles.agreement}>
          Отправляя заполненную форму, вы принимаете условия <a className={styles.agreementUrl} 
          href='#'>Политики обработки персональных данных</a> и подписываете <a className={styles.agreementUrl} href='#'>
          Заявление-согласие субъекта</a> на передачу его персональных данных третьей стороне.
        </p>
      </form>
    </>
  )
}
