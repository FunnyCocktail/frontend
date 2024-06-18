'use client'
import { DataInput } from '@/components/common/inputs'
import { ChangeEvent, useState } from 'react'
import { AcceptButton } from '@/components/common/buttons'
import { Form } from '@/components/common/form'
import { Authentication as AuthenticationApi } from '@/api'
import Link from 'next/link'
import '../global.scss'
import toast from 'react-hot-toast'

const Page = () => {
    const authenticationApi = new AuthenticationApi();
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value})
    }

    const handleSubmit = async () => {
        try{
            await authenticationApi.signUp(user);
            toast.success('Письмо было отправлено на электронную почту!')
        }
        catch{
             toast.error('Проверьте правильность введённых данных!')
        }
    }

    return(
        <main className="container place">
            <Form elements={
                <>
                    <h1 className={'place__form__title'}>Регистрация</h1>
                    <DataInput type='text' value={user.username} name='username' placeholder='Логин' onChange={inputChange}/>
                    <DataInput type='text' value={user.email} name='email' placeholder='Электронная почта' onChange={inputChange}/>
                    <DataInput type='password' value={user.password} name='password' placeholder='Пароль' onChange={inputChange}/>
                    <div style={{gap: '10px'}} className='ds-fl ds-fl-row alit-cen'>
                        <div className='ds-fl ds-fl-c'>
                            <Link className='place__link' href='sign-in'>Уже есть аккаунт?</Link>
                            <Link className='place__link' href='forgot-password'>Забыли пароль?</Link>
                        </div>
                        <AcceptButton onClick={handleSubmit} placeholder='Подтвердить'/>
                    </div>
                </>
            }/>
        </main>
    )
}

export default Page