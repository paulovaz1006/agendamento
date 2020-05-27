import React, { useState } from 'react';
import './style.css';
import { FiLogIn } from 'react-icons/fi'
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
             <Link to="/">
                <img src={logoImg} alt="Heroes" className="herosImg"/>
             </Link>
             <div className="container-form">
                <section className="form">
                    <h1>Login</h1>
                    <form>
                        <input placeholder="Seu Usuário"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder="Sua Senha"
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                        <div className="btn-logins">
                            <FormControlLabel
                                control={<Checkbox checked={state.checkedA} 
                                onChange={handleChange} 
                                name="checkedA" />}
                                label="Lembrar Senha"
                                className="checkItem mt-2"
                            />
                            <Link className="back-link" to="/esqueceu-a-senha">Esqueceu a Senha?</Link>
                        </div>
                        <button className="button" type="submit" onClick={loga}>Login</button>
                        <Link className="back-link" to="/cadastro-de-clientes">
                            <FiLogIn size={16} color="#ba151c"/>
                           Cadastre-se
                        </Link>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Login;