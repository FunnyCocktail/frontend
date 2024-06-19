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
        });
    forgotPassword = async(email:string) =>
        await api.post(Constants.URL_API + `authentication-sending/forgot-password?data=${email}`);
    updatePassword = async(email:string, newData: {code:string, password:string}) =>
        await api.post(Constants.URL_API + 'authentication-confirm/update-password', {
            email: email,
            code: newData.code,
            newData: newData.password
        });
    async getUserClaims(){
        const token = JWTService.getTokenByType("refresh");
        if (token){
            const response = await 
                api.post(Constants.URL_API + `authentication/get-user/${token}/refresh`);
            return response.data;
        }
    }

    logout = () => JWTService.removeUser();
}

export default Authentication;