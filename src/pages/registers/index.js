import React, { useState } from 'react';
import './style.css';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const RegisterType = () => {
    const [ fullName, setFullName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ rg, setRg ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ city, setCity ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ company, setCompany ] = useState('');

    return(
        <div className="container text-center">
             <Link to="/">
                <img src={logoImg} alt="Heroes" className="herosImg"/>
             </Link>
             <div className="container-form">
                <section>
                    <h1>Cadastro de Clientes</h1>                   
                    <form autoComplete="false">
                        <div className="row">
                            <div className="col col-md-6">
                                <input className="form-control" placeholder="Nome Completo"
                                value={fullName}
                                onChange={e => setFullName(e.target.value)}/>
                            </div>    
                            <div className="col col-md-6">
                                <input className="form-control" placeholder="Telefone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}/>
                            </div>    
                            <div className="col col-md-6">
                                <input type="email" className="form-control" placeholder="E-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}/>
                            </div>    
                            <div className="col col-md-6">
                                <input type="number" placeholder="RG"
                                    value={rg}
                                    onChange={e => setRg(e.target.value)}/>
                            </div>                   
                            <div className="col col-md-6">
                                <input placeholder="RG"
                                    value={cpf}
                                    onChange={e => setCpf(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Endereço"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Cidade"
                                    value={city}
                                    onChange={e => setCity(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Número"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Bairro"
                                    value={company}
                                    onChange={e => setCompany(e.target.value)}/>
                            </div>
                        </div>
                        <div className="row justify-content-center flex-column align-items-center">
                            <div className="col-md-4">
                                <button className="button" type="submit">Cadastrar</button>
                            </div>
                            <Link className="back-link" to="/">
                                <FiLogIn size={16} color="#e02041"/>
                                Logar
                            </Link>                            
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default RegisterType;