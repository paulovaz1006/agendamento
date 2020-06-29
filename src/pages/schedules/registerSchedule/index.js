import React, {useState, useEffect} from 'react';
import api from '../../../services/api';
import SideBar from '../../layouts/sidebar';
import Header from '../../layouts/header';
import TitleHeader from '../../layouts/titleHeader';
import localItems from '../../../services/local-item';
import { toast, ToastContainer } from 'react-toastify';
import InputMask from "react-input-mask";
import Main from '../../../assets/js/main';
import localItem from '../../../services/local-item';
import Select from 'react-select';
import CurrencyInput from 'react-currency-masked-input';
import moment from 'moment';

const RegisterSchedule = () => {
    const [ clientName, setClientName] = useState('');
    const [ date, setDate] = useState('');
    const [ title, setTitle] = useState('');
    const [ description, setDescription] = useState('');
    const [ service, setService] = useState('');
    const [ optionsService, setOptionsService ] = useState([]);
    const [ optionsClient, setOptionsClient ] = useState([]);
    const [ fullName, setFullName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ number, setNumber ] = useState('');
    const [ city, setCity ] = useState('');
    const [ serviceName, setServiceName ] = useState('');
    const [ serviceValue, setServiceValue ] = useState('');
    const [ serviceDescription, setServiceDescription ] = useState('');
    const [ hour, setHour ] = useState('');    
    const idCompany = localItem.company;
    const main = new Main();
      
    const registerSchedule = () => {
        const idCompany = parseInt(localItems.company);   
        const formatData = moment(date).format('YYYY-MM-DD');     
        const formatHour = hour;
        const infoDate = `${formatData} ${formatHour}`;

        const data = {
            title: title, 
            description: description, 
            date: infoDate, 
            id_user: clientName,
            id_company: idCompany,
            id_service: service,
            id_type_schedule: 2,
        }
        console.log(data)

        api.post('schedule', data)
            .then((response) => {
                toast.success(response.data.message)
            })
            .catch((response) => {
                toast.error('Erro no agendamento')
            }); 
    }
    
    const registerUser = (e) => {
        const validInput = main.validInput(e, '#form-register-client');
       
        if (validInput) {

            let user = {
                full_name: fullName, 
                phone: phone.replace(/[^\d]+/g,''), 
                email: email, 
                cpf: cpf.replace(/[^\d]+/g,''), 
                address: address, 
                number: number, 
                city: city, 
                password: 'padrao123',  
                type_user: 1,               
                id_company: localItems.company 
            }    
            api.post('client', user)
                .then(() => {
                    toast.success('Cliente cadastrado com sucesso');
                })
                .then(() => {
                    setFullName('');
                    setPhone('');
                    setEmail('');
                    setCpf('');
                    setAddress('');
                    setNumber('');
                    setCity('');
                    closeModalRegisterClient();
                    getClient();
                })
                .catch((error) => {
                    toast.error(error.response.data.message);
                })
        }
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
                getService();
                closeModalRegisterService();
                setServiceName('');
                setServiceDescription('');
                setServiceValue('');
            })
            .catch(() => {
                toast.error('Erro ao deletar cliente');
            });
    }


    const openModalRegisterClient = () => {
        let modal = document.querySelector('#modalRegisterClient');
        modal.style.display = 'block';
    }

    const closeModalRegisterClient = () => {
        let modal = document.querySelector('#modalRegisterClient');
        modal.style.display = 'none';
    }

    const openModalRegisterService = () => {
        let modal = document.querySelector('#modalRegisterService');
        modal.style.display = 'block';
    }

    const closeModalRegisterService = () => {
        let modal = document.querySelector('#modalRegisterService');
        modal.style.display = 'none';
    }

    const getService = () => {
        api.get(`service/${localItems.company}`)
            .then((response) => {
                let services = [];
                let serviceItem;

                response.data.map((element) => {                    
                    serviceItem = {
                        value: element.id_service,
                        label: element.service
                    }

                    return services.push(serviceItem)
                });

                setOptionsService(services)
        })
    }

    const getClient = () => {
        api.get(`client/${localItems.company}`)
            .then((response) => {
                let clients = [];
                let clientItem;

                response.data.map((element, index) => {
                    clientItem = {
                        value: element.id_user,
                        label: element.full_name
                    }

                    return clients.push(clientItem)
                });

                setOptionsClient(clients)
        })
    }

    useEffect(() => {
        getService();
        getClient();
    }, [])

    return(
        <div className="d-flex" id="wrapper">
            <ToastContainer />
            <SideBar />
            <div id="page-content-wrapper">
                <Header/>
                <TitleHeader componentTitle="registerNewClient"/>
                <div className="container-fluid">
                    <div className="bg-white p-4 rounded shadow-sm">    
                        <form autoComplete="off">
                            <div className="row">
                                <div className="col">
                                    <input onChange={e => setTitle(e.target.value)} placeholder="Titulo"/>
                                </div>    
                            </div>             
                        </form>
                        <div className="row mt-3">
                            <div className="col">
                                <label>Selecione seu Cliente:</label>
                                <Select options={optionsClient} className="client" onChange={e => setClientName(e.value)}/>
                            </div>    
                            <div className="col">   
                                <label>Data de Atendimento:</label>                   
                                <input
                                    type="date" 
                                    className="form-control"
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                />
                            </div>
                            <div className="col">   
                                <label>Data de Atendimento:</label>                   
                                <input
                                    type="time" 
                                    className="form-control"
                                    value={hour}
                                    onChange={e => setHour(e.target.value)}
                                />
                            </div>
                            <div className="col">
                                <label>Selecione seu Serviço:</label>
                                <Select options={optionsService} className="service" onChange={e => setService(e.value)}/>
                            </div> 
                        </div>       
                        <form autoComplete="off">  
                            <div className="row mt-3">
                                <div className="col">
                                    <label>Descrição</label>
                                    <textarea onChange={e => setDescription(e.target.value)} value={description} />
                                </div>    
                            </div>                          
                        </form>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <div className="d-flex justify-content-between">
                            <button className="float-right btn-secundary-schedule border-0 mr-4" onClick={openModalRegisterClient}>Cadastrar Cliente</button>     
                            <button className="float-right btn-secundary-schedule border-0" onClick={openModalRegisterService}>Cadastrar Serviço</button>     
                        </div>
                        <button className="float-right btn-primary-schedule border-0" type="submit" onClick={registerSchedule}>Agendar</button>  
                    </div>
                </div>
            </div>
            <div className="modal bd-example-modal-lg" id="modalRegisterClient">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Cadastrar Cliente</h5>
                            <button type="button" className="close" onClick={closeModalRegisterClient}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form autoComplete="off" id="form-register-client">
                            <div className="row">
                                <div className="col">
                                    <input type="text" 
                                        className="form-control input-required" 
                                        placeholder="Nome Completo*"
                                        data-required="Nome Completo"
                                        value={fullName}
                                        onChange={e => setFullName(e.target.value)}/>
                                </div>    
                                <div className="col">                        
                                    <InputMask
                                        type="text" 
                                        className="form-control input-required"
                                        placeholder="CPF*"
                                        data-required="CPF"
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                        mask="999.999.999-99"  
                                    />
                                </div>
                                <div className="col">
                                    <InputMask
                                        type="text" 
                                        className="form-control input-required" 
                                        placeholder="Celular*"
                                        data-required="Celular"
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}    
                                        mask="(99) 99999-9999"     
                                    />
                                </div>      
                                <div className="col">
                                    <input type="email" 
                                        className="form-control input-required" 
                                        placeholder="E-mail*"
                                        data-required="E-mail"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">                                    
                                    <input type="text" 
                                        className="form-control input-required" 
                                        placeholder="Endereço*"
                                        data-required="Endereço"
                                        value={address}
                                        onChange={e => setAddress(e.target.value)}/>
                                </div>
                                <div className="col">
                                    <input type="text" 
                                        className="form-control input-required"
                                        placeholder="Número"
                                        data-required="Número"
                                        value={number}
                                        onChange={e => setNumber(e.target.value)}/>
                                </div>  
                                <div className="col">
                                    <input type="text" 
                                        className="form-control input-required" 
                                        placeholder="Cidade*"
                                        data-required="Cidade"
                                        value={city}
                                        onChange={e => setCity(e.target.value)}/>
                                </div>
                            </div>                            
                        </form>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn-secundary-schedule border-0" onClick={closeModalRegisterClient}>Cancelar</button>
                            <button type="button" className="btn-primary-schedule border-0" onClick={registerUser}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal bd-example-modal-lg" id="modalRegisterService">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Cadastrar Cliente</h5>
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
        </div>
    )
}

export default RegisterSchedule;