import React from 'react';
import SideBar from '../../layouts/sidebar';
import Header from '../../layouts/header';
import './style.css';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/images/logo.png';

const newCasesDetails = () => {
    return(
        <div className="d-flex" id="wrapper">
            <SideBar />
            <div id="page-content-wrapper">
                <Header/>
                <div className="container-fluid p-4">
                    <h5 className="title-system mb-3 mt-4 px-4">Detalhes Casos</h5>
                    <div className="px-4">
                        <div className="row detail-case rounded p-2 m-0 py-4">
                            <div className="col-md-4">
                                <img src={logoImg} alt="" className="w-100"/>
                            </div>
                            <div className="col-md-8 d-flex justify-content-between">
                                <div>
                                    <p><span className="label-title">Projetos Publicados</span>: 4 </p>
                                </div>
                                <div>
                                    <p><span className="label-title">Último acesso:</span> há 3 horas</p>
                                    <p><span className="label-title">Registrado desde:</span> Novembro 2019</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <span className="label-title">Status:</span>
                            </div>
                        </div>
                        <div className="row detail-case rounded p-2 mt-4 m-0 py-4">
                            <div className="col-md-12">
                                <h4>Descrição</h4>
                                <p></p>
                            </div>
                            <div className="col-md-12">
                                <form>
                                    <label>Sua proposta:</label>
                                    <textarea></textarea>
                                    <label>De quanto tempo você precisa para finalizar o trabalho?</label>
                                    <input type="text"/>
                                    <div className="row mt-3">
                                        <button className="ml-3 btn-primary-schedule">Enviar Proposta</button>
                                        <Link to="/novos-casos" className="ml-3 btn-secundary-schedule">Cancelar</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default newCasesDetails;