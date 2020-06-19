import React, { useState } from 'react';
import './style.css';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import logoImg from '../../assets/images/logo.png';
import Main from '../../assets/js/main';
import { Link, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import InputMask from "react-input-mask";
import 'react-toastify/dist/ReactToastify.min.css'; 
import api from '../../services/api';

const Login = () => {
    const main = new Main();
    const [ emailLogin, setEmailLogin ]= useState('');
    const [ passwordLogin, setPasswordLogin ]= useState('');

    const [ fullName, setFullName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ number, setNumber ] = useState('');
    const [ city, setCity ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordConfirm, setPasswordConfirm ] = useState('');
    const [ company, setCompany ] = useState(''); 

    const history = useHistory();

    const loga = async (e, emailUser, passwordUser) => {
        e.preventDefault();

        const userLogin = {
            email: emailUser,
            password: passwordUser
        } 

        try{
            const response = await api.post('login', userLogin)

            if (response.statusText === "OK"){
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('id', response.data.user.id_user);
                localStorage.setItem('type', response.data.user.type_user);
                localStorage.setItem('company', response.data.user.id_company);
                
                toast.success('Login realizado com sucesso', {
                    autoClose: 3000,                    
                });

                setTimeout(() => {
                    history.push('/dashboard');
                }, 3000);                
            }           
        } catch(error) {
            toast.error('E-mail ou senha errado', {
                autoClose: 8000,                    
            });
        } 
    }

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

    const registerUser = (e) => {
        const validInput = main.validInput(e, '#form-register');
        const validPassword = main.validPassword(e, '#form-register');
       
        if (validInput && validPassword) {

            let user = {
                full_name: fullName, 
                phone: phone.replace(/[^\d]+/g,''), 
                email: email, 
                cpf: cpf.replace(/[^\d]+/g,''), 
                address: address, 
                number: number, 
                city: city, 
                password: password,  
                type_user: 2,               
                company: company 
            }    

            try{
                api.post('user', user)
                toast.success('Cadastro realizado com sucesso, você será logado automaticamente', {
                    autoClose: 5000,                    
                });

                setTimeout(() => {
                      loga(e, email, password)
                }, 5000);
            } catch(error) {
                toast.error(error.response.data.message);
            } 
        }
    }

    return(
        <div className="logon-container">
            <ToastContainer />
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
                <form id="form-login" className="max-width-login" autoComplete="off">
                    <div className="col-md-12 p-0">
                        <input placeholder="E-mail"
                            value={emailLogin}
                            onChange={e => setEmailLogin(e.target.value)} />
                    </div>
                    <div className="col-md-12 p-0">
                        <input type="password" placeholder="Senha"
                            value={passwordLogin}
                            onChange={e => setPasswordLogin(e.target.value)} />
                    </div>
                    <button className="button" type="submit" onClick={(e) => loga(e, emailLogin, passwordLogin)}>Entrar</button>
                </form>
                <form id="form-register" className="d-none max-width-login" autoComplete="off">
                    <div className="col-md-12 p-0">
                        <input type="text" 
                            className="form-control input-required" 
                            placeholder="Nome Completo*"
                            data-required="Nome Completo"
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}/>
                    </div>    
                    <div className="col-md-12 p-0">                        
                        <InputMask
                            type="text" 
                            className="form-control input-required"
                            placeholder="CPF*"
                            data-required="CPF"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                            mask="999.999.999-99"  
                        />
                    </div>
                    <div className="col-md-12 p-0">
                        <InputMask
                            type="text" 
                            className="form-control input-required" 
                            placeholder="Celular*"
                            data-required="Celular"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}    
                            mask="(99) 99999-9999"     
                        />
                    </div>                                       
                    <div className="col-md-12 p-0">
                        <input type="text" 
                            className="form-control input-required" 
                            placeholder="Cidade*"
                            data-required="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}/>
                    </div>
                    <div className="col-md-12 p-0">
                        <input type="text" 
                            className="form-control input-required" 
                            placeholder="Endereço*"
                            data-required="Endereço"
                            value={address}
                            onChange={e => setAddress(e.target.value)}/>
                    </div>
                    <div className="col-md-12 p-0">
                        <input type="text" 
                            className="form-control input-required"
                            placeholder="Número"
                            data-required="Número"
                            value={number}
                            onChange={e => setNumber(e.target.value)}/>
                    </div>  
                    <div className="col-md-12 p-0">
                        <input type="text" 
                            className="form-control input-required"
                            placeholder="Empresa*"
                            data-required="Empresa"
                            value={company}
                            onChange={e => setCompany(e.target.value)}/>
                    </div>
                    <div className="col-md-12 p-0">
                        <input type="email" 
                            className="form-control input-required" 
                            placeholder="E-mail*"
                            data-required="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}/>
                    </div>    
                    <div className="col-md-12 p-0">
                        <input type="password" 
                            className="form-control input-required input-password"
                            placeholder="Senha*"
                            data-required="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="col-md-12 p-0">
                        <input type="password" 
                            className="form-control input-required input-confirm-password"
                            placeholder="Repita a Senha*"
                            data-required="Repita a Senha"
                            value={passwordConfirm}
                            onChange={e => setPasswordConfirm(e.target.value)}/>
                    </div>
                    <div className="row justify-content-center flex-column align-items-center">
                        <button className="button" type="submit" onClick={registerUser}>Cadastrar</button>                       
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;