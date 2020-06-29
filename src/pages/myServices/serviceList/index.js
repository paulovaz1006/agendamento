import React, { useState, useEffect } from 'react';
import SideBar from '../../layouts/sidebar';
import Header from '../../layouts/header';
import TitleHeader from '../../layouts/titleHeader';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import localItem from '../../../services/local-item';
import { toast, ToastContainer } from 'react-toastify';
import CurrencyInput from 'react-currency-masked-input'

const ServiceList = () => {
    const [ name, setName ] = useState('');
    const [ id, setId ] = useState('');
    const [ serviceName, setServiceName ] = useState('');
    const [ serviceValue, setServiceValue ] = useState('');
    const [ serviceDescription, setServiceDescription ] = useState('');
    const [ updateName, setUpdateName ] = useState('');
    const [ updateValue, setUpdateValue ] = useState('');
    const [ updateDescription, setUpdateDescription ] = useState('');
    const [ service, setService ] = useState([]);
    const idCompany = localItem.company;

    const openModalRegisterService = () => {
        let modal = document.querySelector('#modalRegisterService');
        modal.style.display = 'block';
    }

    const openModalDeleteService = (id, name) => {
        let modal = document.querySelector('#modalDeleteService');
        modal.style.display = 'block';
        setId(id);
        setName(name);
    }

    // const openModalUpdateService = (id, name, value, description) => {
    //     let modal = document.querySelector('#modalUpdateService');
    //     modal.style.display = 'block';
    //     setId(id);
    //     setName(name);
    //     setUpdateName(name);        
    //     setUpdateValue(value);
    //     setUpdateDescription(description);
    // }

    const closeModalDeleteService = () => {
        let modal = document.querySelector('#modalDeleteService');
        modal.style.display = 'none';
    }

    const closeModalUpdateService = () => {
        let modal = document.querySelector('#modalUpdateService');
        modal.style.display = 'none';
    }

    const closeModalRegisterService = () => {
        let modal = document.querySelector('#modalRegisterService');
        modal.style.display = 'none';
    }

    const getService = (id) => {
        api.get(`service/${id}`)
            .then((response) => {
                setService(response.data)
            })
    }

    const deleteService = (id) => {
        api.delete(`service/${id}`)
            .then(() => {
                getService(idCompany);
                closeModalDeleteService();
            })
    }

    const updateService = (id) => {
        const formatValue = parseFloat(updateValue.replace(',', '.'));

        const data = {
            service:updateName,
            description: updateDescription,
            value: formatValue
        }

        api.patch(`service/${id}`, data)
        .then(() => {
            getService(idCompany);
            closeModalUpdateService();
        })
    }

    const registerService = () => {        
        const formatValue = parseFloat(serviceValue.replace(',', '.'));

        const data = {
            service: serviceName,
            description: serviceDescription,
            value: formatValue,
            id_company: idCompany
        }

        api.post('service/', data)
            .then(() => {
                toast.success('Serviço cadastrado com sucesso');
                getService(idCompany);
                closeModalRegisterService();
                setServiceName('');
                setServiceDescription('');
                setServiceValue('');
            })
            .catch(() => {
                toast.error('Erro ao deletar cliente');
            });
    }

    useEffect(() => {
        getService(idCompany);
    }, [idCompany])

    return(
        <div className="d-flex" id="wrapper">
            <ToastContainer />
            <SideBar />
            <div id="page-content-wrapper">
                <Header/>
                <TitleHeader componentTitle="serviceList"/>
                <div className="container-fluid">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <div className="d-flex justify-content-end">
                            <Link to="#" onClick={openModalRegisterService} className="btn-primary-schedule">Cadastrar Serviço</Link>
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
                                    {service.map((data) => {
                                        const value = data.value.toFixed(2);
                                        const idService = data.id_service;
                                        const service = data.service;
                                        const description = data.description;

                                        return(                                            
                                            <tr key={idService}>
                                                <td>{service}</td>
                                                <td>{value}</td>
                                                <td>{description}</td>
                                                <td className="actions-clients">
                                                    <ul>
                                                        {/* <li>
                                                            <button onClick={() => openModalUpdateService(idService, service, value, description)}>
                                                                <span>Alterar</span>
                                                            </button>
                                                        </li> */}
                                                        <li>
                                                            <button onClick={() => openModalDeleteService(idService, service)}>
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
            <div className="modal bd-example-modal-lg" id="modalRegisterService">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Cadastrar Novo Serviço</h5>
                            <button type="button" className="close" onClick={closeModalRegisterService}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col col-md-6">
                                        <input className="form-control" placeholder="Nome do Serviço"
                                        value={serviceName}
                                        onChange={e => setServiceName(e.target.value)}/>
                                    </div>
                                    <div className="col col-md-6">
                                        <CurrencyInput className="form-control" placeholder="Valor"
                                        onChange={e => setServiceValue(e.target.value)}/>
                                    </div>
                                    <div className="col col-md-12">
                                        <input className="form-control" placeholder="Descrição"
                                        value={serviceDescription}
                                        onChange={e => setServiceDescription(e.target.value)}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn-secundary-schedule border-0" onClick={closeModalRegisterService}>Cancelar</button>
                            <button type="button" className="btn-primary-schedule border-0" onClick={registerService}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal bd-example-modal-lg" id="modalUpdateService">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Alterar Serviço {name}</h5>
                            <button type="button" className="close" onClick={closeModalUpdateService}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col col-md-6">
                                        <input className="form-control" placeholder="Nome do Serviço"
                                        value={updateName}
                                        onChange={e => setUpdateName(e.target.value)}/>
                                    </div>
                                    <div className="col col-md-6">
                                        <CurrencyInput className="form-control" placeholder="Valor"
                                        value={updateValue}
                                        onChange={e => setUpdateValue(e.target.value)}/>
                                    </div>
                                    <div className="col col-md-12">
                                        <input className="form-control" placeholder="Descrição"
                                        value={updateDescription}
                                        onChange={e => setUpdateDescription(e.target.value)}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn-secundary-schedule border-0" onClick={closeModalUpdateService}>Cancelar</button>
                            <button type="button" className="btn-primary-schedule border-0" onClick={() => updateService(id)}>Alterar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal bd-example-modal-lg" id="modalDeleteService">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Excluir Serviço {name} </h5>
                            <button type="button" className="close" onClick={closeModalDeleteService}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn-secundary-schedule border-0" onClick={closeModalDeleteService}>Cancelar</button>
                            <button type="button" className="btn-primary-schedule border-0" onClick={() => deleteService(id)}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceList;