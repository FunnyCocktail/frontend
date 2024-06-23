'use client'
import { useEffect } from "react"
import { JWTService } from "@/services/jwt.service"
import { useRouter } from "next/navigation"
import styles from './page.module.scss'

const Page = () => {
    let router = useRouter();
    useEffect(() => {
        if(!JWTService.checkUserToken()) router.push('/i/sign-in')
    }, [])

    return(
        <main>

        </main>
    )
}

export default Page