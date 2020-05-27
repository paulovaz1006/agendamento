import React, { useState } from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import TitleHeader from '../layouts/titleHeader';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import ModalClient from './modal/contactClient';
import ModalDeleteClient from './modal/deleteClient';
import ModalUpdateClient from './modal/updateClient';
import './style.css';

const MyClients = () => {
    const [ name, setName ] = useState('');
    const [ id, setId ] = useState('');
    const clients = [
        {
            id: 1,
            name:'Paulo',
            address: 'rua fidelandia',
            phone: '11954472836',
            whatsapp: '11954472836',
            email: 'pvaz1006@gmail.com',
            company: 'crystale'
        },
        {
            id: 2,
            name:'Paulo',
            address: 'rua fidelandia',
            phone: '11954472836',
            whatsapp: '11954472836',
            email: 'pvaz1006@gmail.com',
            company: 'crystale'
        },
        {
            id: 3,
            name:'Paulo',
            address: 'rua fidelandia',
            phone: '11954472836',
            whatsapp: '11954472836',
            email: 'pvaz1006@gmail.com',
            company: 'crystale'
        },
    ];

    const sendMessageWhatsapp = ( name, whatsapp, company) => {
        let message = `Meu nome é ${name} da empresa ${company}`;
        let url = `https://api.whatsapp.com/send?phone=55${whatsapp}&text=%20${message}`;

        return window.open(url, '_blank');
    }

    const openModalContactClient = (id, name) => {
        let modal = document.querySelector('#modalClient');
        modal.style.display = 'block';
        setId(id);
        setName(name);
    }

    const openModalDeleteClient = (id, name) => {
        let modal = document.querySelector('#modalDeleteClient');
        modal.style.display = 'block';
        setId(id);
        setName(name);
    }

    const openModalUpdateClient = (id, name) => {
        let modal = document.querySelector('#modalUpdateClient');
        modal.style.display = 'block';
        setId(id);
        setName(name);
    }

    return(
        <div className="d-flex" id="wrapper">
            <SideBar />
            <div id="page-content-wrapper">
                <Header/>
                <TitleHeader componentTitle="myClients"/>
                <div className="container-fluid">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th className="border-0">Nome</th>
                                    <th className="border-0">Endereço</th>
                                    <th className="border-0">Telefone</th>
                                    <th className="border-0">Whatsapp</th>
                                    <th className="border-0">E-mail</th>
                                    <th className="border-0">Entrar em Contato:</th>
                                    <th className="border-0">Ações:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.map((data) => {
                                        return(
                                            <tr key={data.id}>
                                                <td>{data.name}</td>
                                                <td>{data.address}</td>
                                                <td>{data.phone}</td>
                                                <td>{data.whatsapp}</td>
                                                <td>{data.email}</td>
                                                <td className="actions-clients">
                                                    <ul>
                                                        <li>
                                                            <button onClick={() => sendMessageWhatsapp(data.name, data.whatsapp, data.company)}>
                                                                <FaWhatsapp fontSize={18}/>
                                                                <span>Whatsapp</span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button onClick={() => openModalContactClient(data.id, data.name)}>
                                                                <FaEnvelope fontSize={18}/>
                                                                <span>E-mail</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td className="actions-clients">
                                                    <ul>
                                                        <li>
                                                            <button onClick={() => openModalUpdateClient(data.id, data.name)}>
                                                                <span>Alterar</span>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button onClick={() => openModalDeleteClient(data.id, data.name)}>
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
            <ModalClient id={id} name={name}/>
            <ModalDeleteClient id={id} name={name}/>
            <ModalUpdateClient id={id} name={name}/>
        </div>
    )
}

export default MyClients;