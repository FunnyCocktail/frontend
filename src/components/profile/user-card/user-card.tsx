'use client'
import { FC } from "react"
import Image from "next/image"
import styles from './user-card.module.scss'
import noPhoto from '@/assets/images/no-photo.jpg'

type PropTypes = {
    id:string
}

const UserCard: FC<PropTypes> = ({id}) => {
    return(
        <main className={`${styles.card}`}>
            <Image className={`${styles.card__photo}`} width={300} height={300} src={noPhoto} alt="photo"/>
            <h1 className={`${styles.card__nickname}`}>Nickname</h1>
        </main>
    )
}

export default UserCard