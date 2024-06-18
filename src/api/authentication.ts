import { JWTService } from '@/services/jwt.service'
import { Constants } from '@/constants'
import api from './api'

class Authentication {
    signUp = async(user: {username:string, email:string, password:string}) =>
        await api.post(Constants.URL_API + 'authentication/sign-up', {
            email: user.email,
            username: user.username,
            password: user.password
        });
    signIn = async(username:string, password:string) =>
        await api.post(Constants.URL_API + 'authentication/sign-in', {
            username: username,
            email: username,
            password: password
        })
    async getUserClaims(){
        const token = JWTService.getTokenByType("refresh");
        if (token){
            const response = await 
                api.get(Constants.URL_API + `authentication/get-user/${token}/refresh`);
            return response.data;
        }
    }

    logout = () => JWTService.removeUser();
}

export default Authentication;