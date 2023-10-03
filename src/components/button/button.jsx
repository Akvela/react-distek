import styles from './button.module.scss';

export const Button = ({
  size = 'large',
  onClick,
  children,
  disabled = false,
  htmlType = 'button',
  isPhone = false,
  addClass
}) => {

  const buttonSelector = `${styles.item} ` + (size === 'large' ? styles.large : size === 'medium' ? styles.medium : styles.small) + 
    ' ' + addClass + ' ' + (disabled ? styles.disabled : '');

  return (
    isPhone ? (
      <a href={onClick} className={buttonSelector}>
        {children}
      </a>
    ) : (
      <button onClick={onClick} type={htmlType} disabled={disabled} className={buttonSelector}>
        {children}
      </button>
    )
  );
}