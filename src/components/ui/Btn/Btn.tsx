import cn from 'classnames'

import s from './Btn.module.scss'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'

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
  ...props
}: Props) {
  return (
    <button
      {...props}
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
