import React from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import { FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import './style.css';

const Dashboard = () => {
    const cases = [
        {
            id: 1,
            title:'teste',
            description: 'teste de caso',
            user: 'eu',
            status: 'Em Andamento'
        },
        {
            id: 2,
            title:'teste',
            description: 'teste de caso',
            user: 'eu',
            status: 'Em Andamento'
        },
        {
            id: 3,
            title:'teste',
            description: 'teste de caso',
            user: 'eu',
            status: 'Em Andamento'
        }
    ];

    return(
        <div className="d-flex" id="wrapper">
            <SideBar />
            <div id="page-content-wrapper">
            <Header title="Casos"/>
            <div className="container-fluid">
                <h5 className="title-system px-4 mb-0 mt-4">Meus Casos</h5>
                <div className="grid-case px-4">
                    {
                        cases.map((data) => {
                            return(
                                <div key={data.id} className="box-case px-4 py-3">
                                    <FiTrash className="icon-trash"/>
                                    <h2>Caso: {data.title}</h2>
                                    <p>Descrição: {data.description}</p>
                                    <p>Usuario: {data.user}</p>
                                    <div className="row justify-content-between px-3">
                                        <p>Status: {data.status}</p>
                                        <Link to={{pathname: '/meu-caso/' + data.id}} >Ver Detalhes</Link>
                                    </div>
                                </div>
                            )

                        })
                    }
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dashboard;