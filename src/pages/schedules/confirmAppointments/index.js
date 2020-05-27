import React, { useState } from 'react';
import SideBar from '../../layouts/sidebar';
import Header from '../../layouts/header';
import TitleHeader from '../../layouts/titleHeader';
import { FiTrash } from 'react-icons/fi';
import ModalDeleteSchedule from './modal/deleteSchedule';
import ModalReconfirmSchedule from './modal/reconfirmSchedule';
import ModalConfirmSchedule from './modal/confirmSchedule';

const ConfirmAppointments = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');

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

    const opneModalDeleteSchedule = (id, name) => {
        let modal = document.querySelector('#modalDeleteSchedule');
        modal.style.display = 'block';
        setId(id);
        setName(name);
    }

    const opneModalReconfirm = (id, name) => {
        let modal = document.querySelector('#modalReconfirmSchedule');
        modal.style.display = 'block';
        setId(id);
        setName(name);
    }

    const opneModalConfirm = (id, name) => {
        let modal = document.querySelector('#modalConfirmSchedule');
        modal.style.display = 'block';
        setId(id);
        setName(name);
    }

    return(
        <div className="d-flex" id="wrapper">
            <SideBar />
            <div id="page-content-wrapper">
                <Header/>
                <TitleHeader componentTitle="confirmAppointments"/>
                <div className="container-fluid">
                    <div className="grid-case">
                        {
                            cases.map((data) => {
                                return(
                                    <div key={data.id} className="box-case px-4 py-3">
                                        <FiTrash className="icon-trash" onClick={() => opneModalDeleteSchedule(data.id, data.title)}/>
                                        <h2>Cliente: {data.title}</h2>
                                        <p>Data: {data.description}</p>
                                        <p>Serviço: {data.user}</p>
                                        <p>Status: {data.status}</p>
                                        <div className="row justify-content-between px-3">
                                            <button className="btn-primary-schedule" onClick={() => opneModalReconfirm(data.id, data.title)}>Reagendar</button>
                                            <button className="btn-secundary-schedule" onClick={() => opneModalConfirm(data.id, data.title)}>Confirmar</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <ModalDeleteSchedule id={id} name={name}/>
            <ModalReconfirmSchedule id={id} name={name}/>
            <ModalConfirmSchedule id={id} name={name}/>
        </div>
    )
}

export default ConfirmAppointments;