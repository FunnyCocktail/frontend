import { JWTService } from "@/services/jwt.service";
import axios from "axios";

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(
    cfg => {
        const token = JWTService.getTokenByType("access");
        if (token) cfg.headers['Authorization'] = `Bearer ${token.toString()}`

        return cfg;
    },
    error => Promise.reject(error)
)

export default instance