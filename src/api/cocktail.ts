import { Constants } from '@/constants'
import { userService } from '@/services/user.service';
import api from './api'

export default class Cocktail {
    getAll = async() =>
        await api.get(Constants.URL_API + 'cocktails/get-all');
    getById = async (id:string) =>
        await api.get(Constants.URL_API + `cocktails/get-cocktail-by-id?Id=${id}`);
    rateCocktail = async (cocktailId:string, grade:number) => 
        await api.post(Constants.URL_API + `rating/rate-cocktail`, {
            cocktailId: cocktailId,
            userId: userService.getUserId(),
            grade: grade
        });
}