import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const [ email, setEmail ]= useState('');    

    return(
        <div className="logon-container">
             <Link to="/">
                <img src={logoImg} alt="Heroes" className="herosImg"/>
             </Link>
             <div className="container-form">
                <section className="form">
                    <h1>Esqueceu a Senha</h1>
                    <form>
                        <input placeholder="Seu E-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />                       
                        <button className="button" type="submit">Enviar</button>
                        <Link className="back-link justify-content-center" to="/">
                            <FiLogIn size={16} color="#e02041"/>
                            Logar
                        </Link>      
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Login;