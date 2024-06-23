'use client'
import { CocktailItem } from '@/components/cocktail';
import { useEffect, useState } from 'react';
import styles from './page.module.scss'
import { useCocktail } from '@/hooks/useCocktail';

type CocktailArray = {
    name:string,
    description:string,
    imageUri?:string,
    authorId:string,
    author:{
        username:string,
    },
    id:string
}

const Page = () => {
    const { getAll } = useCocktail();
    const [cocktails, setCocktails] = useState<CocktailArray[]>([]);

    useEffect(() => {
        const cocktailFetchData = async () => {
            const cocktails = await getAll();
            setCocktails(cocktails);
        }; cocktailFetchData();
    }, [])

    return(
        <main className={`${styles.place} container`}>
            {cocktails.length > 0 && cocktails.map(cocktail => (
                <CocktailItem 
                    key={cocktail.id} 
                    id={cocktail.id}
                    name={cocktail.name}
                    description={cocktail.description}
                    imageUri={cocktail.imageUri}
                    author={cocktail.author}/>
            ))}
            <div className={`${styles.place__add}`}>
                <h1 className={`${styles.place__add__plus}`}>+</h1>
                <h2>Добавить коктейль</h2>
            </div>
        </main>
    )
}

export default Page