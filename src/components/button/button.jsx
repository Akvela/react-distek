import styles from './button.module.css';

export const Button = ({
  size = 'large',
  onClick,
  children,
  disabled = false,
  htmlType = 'button',
  isPhone = false
}) => {
  return (
    isPhone ? (
      <a 
        href={onClick} 
        className = {`${styles.button} ` + (size === 'large' ?
          styles.large :
          size === 'medium' ?
            styles.medium :
              size === 'mediumHeader' ?
                styles.mediumHeader :
                styles.small
        ) + ' ' + (disabled ? styles.disabled : '')}
        >
        {children}
      </a>
    ) : (
      <button 
        onClick={onClick}
        type={htmlType}
        disabled={disabled}
        className = {`${styles.button} ` + (size === 'large' ?
          styles.large :
          size === 'medium' ?
            styles.medium :
            styles.small
        ) + ' ' + (disabled ? styles.disabled : '')}
      >
        {children}
      </button>
    )
  );
}