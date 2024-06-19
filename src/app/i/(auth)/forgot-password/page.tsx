'use client'
import { DataInput } from '@/components/common/inputs'
import { ChangeEvent, useState } from 'react'
import { AcceptButton } from '@/components/common/buttons'
import { Authentication as AuthenticationApi } from '@/api'
import styles from './page.module.scss'
import toast from 'react-hot-toast'


const Page = () => {

    const authenticationApi = new AuthenticationApi();
    const [email, setEmail] = useState('');
    const [newData, setNewData] = useState({
        password: '',
        code: ''
    })
    const [validEmail, setValidEmail] = useState(false);

    const handleSubmitEmail = async () => {
        if(email.length > 0){
            try{        
                await authenticationApi.forgotPassword(email);
                setValidEmail(!validEmail);
            }
            catch{
                toast.error('Проверьте правильность введённых данных!')
            }
        }
        else{
            toast.error('Заполните поле')
        }
    }

    const handleUpdatePassword = async () => {
        if(newData.code.length > 0 && newData.password.length > 0){
            try{
                await authenticationApi.updatePassword(email, newData);
                toast.success('Пароль был изменён!')
            }
            catch{
                toast.error('Проверьте правильность введённых данных!')
            }
        }    
        else{
            toast.error('Заполните все поля')
        }
    }

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewData({...newData, [name]: value})
    }
    
    return(
        <main className={`${styles.place} container`}>
            <p className={`${styles.place__header}`}>Для восстановления пароля укажите свой адрес электронной почты, который был привязан к аккаунту. <br/>
                После заполнения данных, мы отправим код на вашу почту, с помощью него вы сможете восстановить доступ к аккаунту.
            </p>
            {validEmail == false &&
            <>
                <DataInput 
                    placeholder='Почта' 
                    name='email' 
                    value={email} 
                    onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    type='email'/>
                <AcceptButton placeholder='Отправить письмо' onClick={handleSubmitEmail}/>
            </>
            }
            {validEmail && <>
                <DataInput
                    placeholder='Новый пароль'
                    name='password'
                    value={newData.password}
                    type='text'
                    onChange={handleInputChange}
                    />
                <DataInput
                    placeholder='Код'
                     name='code'
                     value={newData.code}
                     type='text'
                     onChange={handleInputChange}/>
                <AcceptButton placeholder='Сменить пароль' onClick={handleUpdatePassword}/>
            </>}
        </main>
    )
}

export default Page