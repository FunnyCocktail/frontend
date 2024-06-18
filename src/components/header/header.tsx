'use client'
import { Constants } from '@/constants'
import styles from './header.module.scss'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LinkButton } from '../common/buttons';
import { useState } from 'react';

const Header = () => {
    const pathname = usePathname();
    const links = Constants.Links;

    const [isAuth, setIsAuth] = useState(false);

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
                {isAuth ? <h1>Профиль</h1> : <LinkButton placeholder='Вход в аккаунт' link='/i/sign-in'/>}
            </div>
        </nav>
        </>
    )
}

export default Header