import cn from 'classnames'

import s from './Btn.module.scss'

type Props = {
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'

  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export default function Btn({
  children,
  onClick,
  disabled = false,
  className,
  variant = 'primary',
  type = 'button',
  leftIcon,
  rightIcon,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        s.root,
        s[variant],
        disabled && s.disabled,
        className
      )}
    >
      {leftIcon && <span className={s.iconLeft}>{leftIcon}</span>}

      {children && <span className={s.text}>{children}</span>}

      {rightIcon && <span className={s.iconRight}>{rightIcon}</span>}
    </button>
  )
}