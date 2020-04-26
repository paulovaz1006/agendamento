import React from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import { Link } from 'react-router-dom';

const registerNewsCase = () => {
    return(
        <div className="d-flex" id="wrapper">
            <SideBar />
            <div id="page-content-wrapper">
                <Header title="Detalhes Casos"/>
                <div className="px-3">
                    <div className="container-fluid px-4">
                        <h5 className="title-system mb-2 mt-4">Cadastrar Novo Casos</h5>
                        <div className="row detail-case rounded px-4 m-0 py-4">
                            <form className="w-100">
                                <label>Titulo do Caso</label>
                                <input type="text"/>
                                <label className="mt-4">Descrição:</label>
                                <textarea></textarea>
                                <div className="row mt-3">
                                    <button className="ml-3 btn-primary-angeluz">Concluir</button>
                                    <Link to="/novos-casos" className="ml-3 btn-secundary-angeluz">Cancelar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default registerNewsCase;