import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar,{}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.link}>Главная</AppLink>
                <AppLink to={'/about'} className={cls.link}>О сайте</AppLink>
            </div>
        </div>
    )
}

export default Navbar