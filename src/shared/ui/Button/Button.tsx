import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: string
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { className, children, theme, ...otherProps } = props

    return (
        <button
            {...otherProps}
            className={classNames(cls.Button,{}, [className, cls[theme]])}
        >
            {children}
        </button>
    )
}

export default Button