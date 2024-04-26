import { useState } from 'react'
import './LoginForm.css'

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const emailRegex = /^\S+@\S+\.\S+$/;

    const onValidate = (event) =>{
        if(!event.target[0].value || !event.target[1].value ||event.target[1].value.length < 5 || !emailRegex.test(event.target[0].value)){
            return false
        }
        return true       
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (onValidate(event)) {
            const newEmail = event.target[0].value;
            const newPassword = event.target[1].value;
            setEmail(newEmail);
            setPassword(newPassword);
            setMessage("Sucesso!")
        } else {
            setMessage("Por favor, preencha todos os campos corretamente.");
        }
    };

    return (
        <form className='container' onSubmit={onSubmitHandler}>
            <div className='input-container'>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' placeholder='email'/>
            </div>
            <div className='input-container'>
                <label htmlFor="password">Senha</label>
                <input type="password" id='password' placeholder='senha'/>
            </div>
            <h5>{message}</h5>
            <button type='submit' >Login</button>
        </form>
    )
}