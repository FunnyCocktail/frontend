import { FC } from "react"
import styles from './cocktail-info.module.scss'

type Cocktail = {
    name:string,
    description:string,
    author:{
        username:string,
        id:string,
        userAdditionalInfo:{
            imageUri:string,
        }
    }
}

const CocktailInfo: FC<Cocktail> = ({name, description, author}) => {
    return(
        <main className={`${styles.place}`}>
            <h1>{name}</h1>
            <div className={`${styles.place__author}`}>
                {author && author.username && (
                    <>
                        <img 
                            src={author.userAdditionalInfo.imageUri} 
                            alt="authorPhoto" 
                            className={`${styles.place__author__image}`} />
                        <h1>{author.username}</h1>
                    </>
                )}
            </div>
            <p className={`${styles.place__description}`}>{description}</p>
        </main>
    )   
}

export default CocktailInfo