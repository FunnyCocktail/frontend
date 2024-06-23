'use client'
import { Constants } from '@/constants'
import { usePathname } from 'next/navigation';
import { LinkButton } from '../common/buttons';
import { useEffect, useState } from 'react';
import { JWTService } from '@/services/jwt.service';
import styles from './header.module.scss'
import Link from 'next/link';

const Header = () => {
    const pathname = usePathname();
    const links = Constants.Links;

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const checkAuth = setInterval(() => {
            setIsAuth(JWTService.checkUserToken())
        }, 1000);
        return () => clearInterval(checkAuth);
    }, [])

    return(
        <>
        <nav className={`${styles.header} container`}>
            <ul className={`${styles.header__links}`}>
            {links.map(link => (
                <li key={link.id}>
                <Link
                className={pathname == link.link ? `${styles.header__link} ${styles.active}` : `${styles.header__link}`}
                href={`${link.link}`}>{link.text}</Link>
                </li>
            ))}
            </ul>
            <div className={`${styles.header__buttons}`}>
                {isAuth ? <LinkButton placeholder='Профиль' link='/i/profile'/> : <LinkButton placeholder='Вход в аккаунт' link='/i/sign-in'/>}
            </div>
        </nav>
        <nav className={`${styles.mobile}`}>
            <ul className={`${styles.mobile__nav}`}>
                {links.map(link => (
                    <li key={link.id}>
                        <Link className={pathname == link.link ? `${styles.mobile__nav__link}` : `${styles.mobile__nav__link}`}
                        href={link.link}>
                            <img className={`${styles.mobile__nav__link__img}`} src={link.svg.src} alt="photo" />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    )
}

export default Header