import { Cocktail as CocktailApi } from "@/api"

export function useCocktail() {
    const cocktailApi:CocktailApi = new CocktailApi();

    const getAll = async () => (await (cocktailApi.getAll())).data;
    const getById = async (id:string) => (await (cocktailApi.getById(id))).data;
    const rateCocktail = async (cocktailId:string, grade:number) => 
        (await cocktailApi.rateCocktail(cocktailId, grade))

    return{
        getAll,
        getById,
        rateCocktail
    }
}