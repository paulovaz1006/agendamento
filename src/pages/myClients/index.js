import React, { useState } from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import TitleHeader from '../layouts/titleHeader';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import ModalClient from './modal/contactClient';
import './style.css';

const MyClients = () => {
    const [ id, setId ] = useState('');
    const clients = [
        {
            id: 1,
            name:'Paulo',
            address: 'rua fidelandia',
            phone: '11954472836',
            whatsapp: '5511954472836',
            email: 'pvaz1006@gmail.com',
            company: 'crystale'
        },
        {
            id: 2,
            name:'Paulo',
            address: 'rua fidelandia',
            phone: '11954472836',
            whatsapp: '5511954472836',
            email: 'pvaz1006@gmail.com',
            company: 'crystale'
        },
        {
            id: 3,
            name:'Paulo',
            address: 'rua fidelandia',
            phone: '11954472836',
            whatsapp: '5511954472836',
            email: 'pvaz1006@gmail.com',
            company: 'crystale'
        },
    ];

    const sendMessageWhatsapp = ( name, whatsapp, company) => {
        let message = `Meu nome é ${name} da empresa ${company}`;
        let url = `https://api.whatsapp.com/send?phone=${whatsapp}&text=%20${message}`;

        return window.open(url, '_blank');
    }

    const openModalContactClient = (id) => {
        let modal = document.querySelector('#modalClient');
        modal.style.display = 'block';
        setId(id);
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
                                                            <button onClick={() => openModalContactClient(data.id)}>
                                                                <FaEnvelope fontSize={18}/>
                                                                <span>E-mail</span>
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
            <ModalClient id={id}/>
        </div>
    )
}

export default MyClients;