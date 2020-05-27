import React, { useState } from 'react';
import SideBar from '../../layouts/sidebar';
import Header from '../../layouts/header';
import TitleHeader from '../../layouts/titleHeader';
import ModalRegisterService from './modal/registerService';
import ModalDeleteService from './modal/deleteService';
import ModalUpdateService from './modal/updateService';
import { Link } from 'react-router-dom';

const ServiceList = () => {
    const [ name, setName ] = useState('');
    const [ id, setId ] = useState('');
    const clients = [
        {
            id: 1,
            name:'Nome do Serviço',
            description: 'rua fidelandia'
        },
        {
            id: 2,
            name:'Nome do Serviço',
            description: 'rua fidelandia'
        },
        {
            id: 3,
            name:'Nome do Serviço',
            description: 'rua fidelandia'
        },
    ];

    const openModalRegisterService = (id, name) => {
        let modal = document.querySelector('#modalRegisterService');
        modal.style.display = 'block';
    }

    const openModalDeleteService = (id, name) => {
        let modal = document.querySelector('#modalDeleteService');
        modal.style.display = 'block';
        setId(id);
        setName(name);
    }

    const openModalUpdateService = (id, name) => {
        let modal = document.querySelector('#modalUpdateService');
        modal.style.display = 'block';
        setId(id);
        setName(name);
    }

    return(
        <div className="d-flex" id="wrapper">
            <SideBar />
            <div id="page-content-wrapper">
                <Header/>
                <TitleHeader componentTitle="serviceList"/>
                <div className="container-fluid">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <div className="col-md-12">
                            <Link to="#" onClick={openModalRegisterService} className="btn-primary-schedule float-right">Cadastrar Serviço</Link>
                        </div>
                        <div className="col-md-12">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th className="border-0">Serviço</th>
                                        <th className="border-0">Valor</th>
                                        <th className="border-0">Descrição</th>
                                        <th className="border-0">Ação:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clients.map((data) => {
                                            return(
                                                <tr key={data.id}>
                                                    <td>{data.name}</td>
                                                    <td>{data.address}</td>
                                                    <td>{data.description}</td>
                                                    <td className="actions-clients">
                                                        <ul>
                                                            <li>
                                                                <button onClick={() => openModalUpdateService(data.id, data.name)}>
                                                                    <span>Alterar</span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button onClick={() => openModalDeleteService(data.id, data.name)}>
                                                                    <span>Excluir</span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <ModalRegisterService />
            <ModalDeleteService id={id} name={name}/>
            <ModalUpdateService id={id} name={name}/>
        </div>
    )
}

export default ServiceList;