import React, { useState, useEffect } from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import TitleHeader from '../layouts/titleHeader';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import ModalClient from './modal/contactClient';
import './style.css';
import api from '../../services/api';
import localItems from '../../services/local-item';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

const MyClients = () => {
    const [ name, setName ] = useState('');
    const [ id, setId ] = useState('');
    const [ clients, setClients ] = useState([]);

    const getClients = () => {      
        api.get(`client/${localItems.company}`)
            .then((response) => {
                setClients(response.data)
            });
    }
 
    const closeModalContactClient = () => {
        let modal = document.querySelector('#modalDeleteClient');
        modal.style.display = 'none';
    }

    const sendMessageWhatsapp = ( name, whatsapp, company) => {
        let message = `Meu nome é ${name} da empresa ${company}`;
        let url = `https://api.whatsapp.com/send?phone=+55${whatsapp}&text=%20${message}`;

        return window.open(url, '_blank');
    }

    // const openModalContactClient = (id, name) => {
    //     let modal = document.querySelector('#modalClient');
    //     modal.style.display = 'block';
    //     setId(id);
    //     setName(name);
    // }

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

    const deleteClient = (id) => {
        api.delete(`user/${id}`)
            .then((response) => {
                toast.success('Cliente deletado com sucesso');
                getClients();
                closeModalContactClient();
            })
            .catch(() => {
                toast.error('Erro ao deletar cliente');
            });
    }
   
    useEffect(() => {
        getClients();
    }, [])

    return(
        <div className="d-flex" id="wrapper">
            <ToastContainer />
            <SideBar />
            <div id="page-content-wrapper">
                <Header/>
                <TitleHeader componentTitle="myClients"/>
                <div className="container-fluid">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <div className="d-flex justify-content-end">
                            <Link to="#" className="btn-primary-schedule float-right mb-3">Cadastrar Cliente</Link>
                        </div>
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th className="border-0">Nome</th>
                                    <th className="border-0">Endereço</th>
                                    <th className="border-0">Cidade</th>
                                    <th className="border-0">Telefone</th>
                                    <th className="border-0">E-mail</th>
                                    <th className="border-0">Entrar em Contato:</th>
                                    <th className="border-0">Ações:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.map((data) => {                                    

                                    const formatPhone = data.phone.replace(/^(\d{2})(\d{5})/g,"($1) $2-");
                                    
                                    const liWhatsapp = () => {
                                        if (data.phone.length === 11) {
                                            return (
                                                <li>
                                                    <button onClick={() => sendMessageWhatsapp(data.full_name, data.phone, data.company)}>
                                                        <FaWhatsapp fontSize={18}/>
                                                        <span>Whatsapp</span>
                                                    </button>
                                                </li>
                                            )
                                        }
                                    }

                                    const liEmail = () => {
                                        if (data.email !== undefined) {
                                            return (
                                                <li>
                                                    <button onClick={() => toast.warn('Funcionalidade em desenvolvimento')}>
                                                        <FaEnvelope fontSize={18}/>
                                                        <span>E-mail</span>
                                                    </button>
                                                </li>
                                            )
                                        }
                                    }

                                    return(
                                        <tr key={data.id_user}>
                                            <td>{data.full_name}</td>
                                            <td>{data.address}, {data.number}</td>
                                            <td>{data.city}</td>
                                            <td>{formatPhone}</td>
                                            <td>{data.email}</td>
                                            <td className="actions-clients">
                                                <ul>
                                                    {liWhatsapp()}
                                                    {liEmail()}
                                                </ul>
                                            </td>
                                            <td className="actions-clients">
                                                <ul>
                                                    <li className="d-none">
                                                        <button onClick={() => openModalUpdateClient(data.id_user, data.full_name)}>
                                                            <span>Alterar</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button onClick={() => openModalDeleteClient(data.id_user, data.full_name)}>
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

            <div className="modal bd-example-modal-lg" id="modalDeleteClient">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Excluir cliente {name} </h5>
                            <button type="button" className="close" onClick={closeModalContactClient}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn-secundary-schedule border-0" onClick={closeModalContactClient}>Cancelar</button>
                            <button type="button" className="btn-primary-schedule border-0" onClick={() => deleteClient(id)}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyClients;