'use client'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import { UserCard } from "@/components/profile";
import '../global.scss'

const Page = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        id: ''
    });

    useEffect(() => {
        const getUserData = async () => {
            const userData = localStorage.getItem('_user')
            if(userData){
                const userId = JSON.parse(userData);
                setUser({...user, id: userId.id})
            }
            else{
                router.push('sign-in')
            }
        }; getUserData();
    }, [])

    return(
        <main className="place container">
            <UserCard id={user.id}/>
        </main>
    )
}

export default Page