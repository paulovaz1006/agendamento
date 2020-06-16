import React, { useState } from 'react';
import './style.css';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import logoImg from '../../assets/images/logo.png';
import { Link, useHistory } from 'react-router-dom';
// import api from '../../../services/api';

const Login = () => {
    const [ email, setEmail ]= useState('');
    const [ password, setPassword ]= useState('');

      const history = useHistory();

      const loga = (e) => {
        e.preventDefault();
            history.push('/dashboard');
      }
    // const history = useHistory('');

    // async function handleLogin(e) {
    //     e.preventDefault();

    //     try {
    //         const response = await api.post('sessions', { id });
    //         console.log(response.data.nome)
    //         localStorage.setItem('ongId', id);
    //         localStorage.setItem('ongName', response.data.nome);
    //         history.push('/profile');
    //     } catch {
    //         alert('Falha no login, tente novamente')
    //     }
    // }

    const showForm = (e) => {
        const formLogin = document.querySelector('#form-login');
        const formRegister = document.querySelector('#form-register');
        const login = document.querySelector('.login');
        const register = document.querySelector('.register');

        if (e.target.className === 'login') {
            formLogin.classList.remove('d-none');
            formRegister.classList.add('d-none');
            login.closest('li').classList.add('active');
            register.closest('li').classList.remove('active');
        }

        if (e.target.className === 'register') {
            formLogin.classList.add('d-none');
            formRegister.classList.remove('d-none');
            login.closest('li').classList.remove('active');
            register.closest('li').classList.add('active');
        }
    }

    return(
        <div className="logon-container">
            <div className="col-md-4 div-social">
                <h5 className="text-white mt-4">Redes Sociais</h5>
                <ul className="list-social">
                    <li>
                        <Link to="#"><FiFacebook /> Facebook</Link>
                    </li>
                    <li>
                        <Link to="#"><FiInstagram /> Instagram</Link>
                    </li>
                    <li>
                        <Link to="#"><FiLinkedin /> Linkedin</Link>
                    </li>
                </ul>
                <div className="buttons-login">
                    <ul>
                        <li className="active">
                            <button onClick={showForm} className="login">Login</button>
                        </li>
                        <li>
                            <button onClick={showForm} className="register">Cadastre-se</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-8 container-form mt-4">
                <Link to="/" className="mt-4">
                    <img src={logoImg} alt="Heroes" className="herosImg"/>
                </Link>
                <form id="form-login" className="max-width-login">
                    <input placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    <button className="button" type="submit" onClick={loga}>Entrar</button>
                </form>
                <form id="form-register" className="d-none max-width-login">
                    <input placeholder="Nome"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    <input placeholder="Empresa"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="E-mail"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    <input type="password" placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                    <input type="password" placeholder="Repita a Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <button className="button" type="submit" onClick={loga}>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Login;