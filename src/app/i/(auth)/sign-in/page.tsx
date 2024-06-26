'use client'
import { Form } from '@/components/common/form'
import { DataInput } from '@/components/common/inputs'
import { AcceptButton } from '@/components/common/buttons'
import { ChangeEvent, useState } from 'react'
import { Authentication as AuthenticationApi } from '@/api'
import Link from 'next/link'
import toast from 'react-hot-toast'
import '../global.scss'

const Page = () => {
    const authenticationApi = new AuthenticationApi();
    const [ user, setUser ] = useState({
        username: '',
        password: ''
    });

    const inputChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value})
    }

    const handleSubmit = async () => {
        try{
            const response = await authenticationApi.signIn(user.username, user.password);
            localStorage.setItem('_tokens', JSON.stringify(response.data));
            toast.success('Успешный вход!')
        }
        catch{
            toast.error('Проверьте правильность введённых данных!')
        }
    }

    return(
        <main className="container place">
            <Form elements={
                <>
                    <h1 className={'place__form__title'}>Авторизация</h1>
                    <DataInput type='text' value={user.username} name='username' placeholder='Логин' onChange={inputChange}/>
                    <DataInput type='password' value={user.password} name='password' placeholder='Пароль' onChange={inputChange}/>
                    <div style={{gap: '10px'}} className='ds-fl ds-fl-row alit-cen'>
                        <div className='ds-fl ds-fl-c'>
                            <Link className='place__link' href='sign-in'>Ещё нет аккаунта?</Link>
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