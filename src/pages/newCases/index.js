import React from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import './style.css';
import { Link } from 'react-router-dom';
import photo from '../../assets/images/logo.png'
const newCases = () => {
    const newCase = [
        {
            id: 1,
            name: 'Teste',
            description: 'testestestestestsetes',
            photo: '../../assets/images/logo.png'
        }
    ]
    return(
        <div className="d-flex" id="wrapper">
            <SideBar />
            <div id="page-content-wrapper">
            <Header title="Novos Casos"/>
            <div className="container-fluid">
                <h5 className="title-system px-4 mb-0 mt-4">Novos Casos</h5>
                <div className="grid-new-case px-4">
                    {newCase.map((data) => {
                        return(
                        <div className="box-new-case px-2 py-3">
                            <div className="img-profile">
                                <img src={photo} alt="Heroes" className="w-100"/>
                            </div>
                            <div className="d-flex flex-column">
                                <h2>Nome: {data.name}</h2>
                                <p>Descrição: {data.description}</p>
                                <div className="row justify-content-between px-3">
                                    <Link to={{pathname: '/detalhes-caso/' + data.id}}>Ver Detalhes</Link>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
            </div>
        </div>
    )
}

export default newCases;