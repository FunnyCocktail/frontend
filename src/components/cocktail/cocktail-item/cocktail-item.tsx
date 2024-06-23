import { FC } from "react"
import Link from "next/link";
import styles from './cocktail-item.module.scss'

type CocktailItem = {
    id:string,
    name:string,
    description:string,
    imageUri?:string,
    author:{
        username:string,
    },
}

const CocktailItem: FC<CocktailItem> = ({id, name, description, author, imageUri}) => 
    <Link className={`${styles.item}`} href={`cocktails/${id}`}>
        <img className={`${styles.item__img}`} src={`${imageUri}`} alt="cocktail photo"/>
        <h1 className={`${styles.item__title}`}>{name}</h1>
        <p className={`${styles.item__author}`}>Автор: {author.username}</p>
    </Link>
export default CocktailItem;