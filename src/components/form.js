import React from 'react'

import "../css/form.css";

const Form = () => {
    return (
        <form className='form-container'>
            <div className='form-inputs-container'>
                <span>Login</span>
                <input type='email' placeholder='email' required></input>

                <span>Senha</span>
                <input type='password' placeholder='senha' required></input>
            </div>

            <div className='form-button-container'>
                <p className='link'>Esqueceu a senha? Clique aqui</p>
                <button className='in' type='submit'>Entrar</button>
            </div>


        </form>
    )
}

export default Form