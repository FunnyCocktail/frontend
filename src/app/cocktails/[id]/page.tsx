'use client'
import { useCocktail } from "@/hooks/useCocktail";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { CocktailInfo } from "@/components/cocktail";
import { AcceptButton } from "@/components/common/buttons";
import { JWTService } from "@/services/jwt.service";
import styles from './page.module.scss'
import toast from "react-hot-toast";


type Cocktail = {
    id:string,
    name:string,
    description:string,
    imageUri?:string,
    author:{
        username:string,
        email:string,
        id:string,
        userAdditionalInfo:{
            imageUri:string,
        }
    },
}

const Page = () => {
    const params = useParams();
    const { getById, rateCocktail } = useCocktail();
    
    const [cocktail, setCocktail] = useState<Cocktail>(Object);
    const [ratingCount, setRatingCount] = useState([1, 2, 3, 4, 5]);
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const [userRating, setUserRating] = useState<number>(0);

    useEffect(() => {
        const cocktailFetchData = async () => {
            const cocktailData = await getById(params.id.toString())
            setCocktail(cocktailData);
        }; cocktailFetchData();
    }, [params])

    useEffect(() => {
        const checkAuth = setInterval(() => {
            setIsAuth(JWTService.checkUserToken());
        }, 2000);
        return () => clearInterval(checkAuth);
    }, [params])

    const handleRateCocktail = async () => {
        try{
            await rateCocktail(params.id.toString(), userRating);
            toast.success('Успешно!')
        }
        catch{
            toast.error('Ошибка')
        }
    }

    return(
        <main className={`${styles.place} container`}>
            <h1 className={`${styles.place__name}`}>Коктейль {cocktail.name}</h1>
            <div className={`${styles.place__main_info}`}>
                <img className={`${styles.place__main_info__image}`} src={cocktail.imageUri}/>
                    <div className={`${styles.place__main_info__data}`}>
                        <CocktailInfo 
                            name={cocktail.name}
                            description={cocktail.description}
                            author={cocktail.author}/>
                        <div className={`${styles.place__main_info__data__rating}`}>
                            {ratingCount.map(rating => (
                                <input 
                                    onChange={() => setUserRating(rating)} 
                                    type="radio" name="rating" 
                                    value={rating} 
                                    key={rating} />
                            ))}
                            {userRating != 0 && isAuth &&
                                <AcceptButton 
                                    placeholder={"Оценить"} 
                                    onClick={handleRateCocktail}/>
                            }
                        </div>
                    </div>
            </div>
        </main>
    )
}

export default Page