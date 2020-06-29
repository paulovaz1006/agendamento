import React, {useState} from 'react';
import InputMask from "react-input-mask";
import Main from '../../../assets/js/main';
import api from '../../../services/api';
import SideBar from '../../layouts/sidebar';
import Header from '../../layouts/header';
import TitleHeader from '../../layouts/titleHeader';
import localItems from '../../../services/local-item';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

const RegisterClients = () => {
    const [ fullName, setFullName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ number, setNumber ] = useState('');
    const [ city, setCity ] = useState('');
    const main = new Main();

    const registerUser = (e) => {
        const validInput = main.validInput(e, '#form-register');
       
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
                })
                .catch((error) => {
                    toast.error(error.response.data.message);
                })
        }
    }

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
                    <div className="d-flex justify-content-between mt-3">
                        <Link to="/meus-clientes" className="float-right btn-secundary-schedule border-0">Meus Clientes</Link>  
                    
                        <button className="float-right btn-primary-schedule border-0" type="submit"  onClick={registerUser}>Cadastrar Cliente</button>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterClients;