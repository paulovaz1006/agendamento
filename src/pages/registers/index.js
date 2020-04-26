import React, { useState } from 'react';
import './style.css';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const RegisterType = () => {
    const [nome, setNome] = useState('');
    return(
        <div className="container text-center">
             <Link to="/">
                <img src={logoImg} alt="Heroes" className="herosImg"/>
             </Link>
             <div className="container-form">
                <section>
                    <h1>Cadastro de Clientes</h1>                   
                    <form>
                        <div className="row">
                            <div className="col col-md-6">
                                <input className="form-control" placeholder="Nome Completo"
                                value={nome}
                                onChange={e => setNome(e.target.value)}/>
                            </div>    
                            <div className="col col-md-6">
                                <input className="form-control" placeholder="E-mail"
                                value={nome}
                                onChange={e => setNome(e.target.value)}/>
                            </div>    
                            <div className="col col-md-6">
                                <input className="form-control" placeholder="Telefone"
                                value={nome}
                                onChange={e => setNome(e.target.value)}/>
                            </div>    
                            <div className="col col-md-6">
                                <input placeholder="CEP"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}/>
                            </div>                   
                            <div className="col col-md-6">
                                <input placeholder="RG"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="CPF"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Endereço"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Número"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Bairro"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}/>
                            </div>
                            
                            <div className="col col-md-6">
                                <input placeholder="Cidade"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}/>
                            </div>
                            <div className="col col-md-6">
                                <input placeholder="Estado"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}/>
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