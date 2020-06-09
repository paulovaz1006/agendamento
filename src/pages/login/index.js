import React, { useState } from 'react';
import './style.css';
import { FiLogIn, FiFacebook, FiInstagram } from 'react-icons/fi'
import logoImg from '../../assets/images/logo.png';
import { Link, useHistory } from 'react-router-dom';
// import api from '../../../services/api';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Login = () => {
    const [ email, setEmail ]= useState('');
    const [ password, setPassword ]= useState('');
    const [state, setState] = React.useState({
        checkedA: true,
      });
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const history = useHistory();

      const loga = (e) => {
        e.preventDefault();
        if (email === 'teste' && password === '123') {
            history.push('/dashboard');
        } else {
            alert('Email ou senha errado')
        }
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

    return(
        <div className="logon-container">
            <div className="col-md-4 div-social">
                <h5 className="text-white mt-2">Redes Sociais</h5>
                <ul className="list-social">
                    <li>
                        <Link to=""><FiFacebook /></Link>
                    </li>
                    <li>
                        <Link to=""><FiInstagram /></Link>
                    </li>
                    <li>
                        <Link to=""><FiFacebook /></Link>
                    </li>
                </ul>
                <div className="buttons-login">
                    <ul>
                        <li>
                            <button>Login</button>
                        </li>
                        <li>
                            <button>Cadastre-se</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-8 container-form">
                <Link to="/">
                    <img src={logoImg} alt="Heroes" className="herosImg"/>
                </Link>
                <form>
                    <input placeholder="Seu Usuário"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Sua Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    <button className="button" type="submit" onClick={loga}>Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default Login;