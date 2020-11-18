import React, { useEffect, useState } from 'react';
import SideBar from '../../layouts/sidebar';
import Header from '../../layouts/header';
import TitleHeader from '../../layouts/titleHeader';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import './style.css';
import api from '../../../services/api';
import LocalItems from '../../../services/localItem';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const EventCalendar = () => {
    const [ schedule, setSchedules ] = useState([]);
    const [ scheduleToday, setSchedulesToday ] = useState([]);
    const [ clientName, setClientName ] = useState('');
    const [ date, setDate ] = useState('');
    const [ hour, setHour ] = useState('');
    const [ idSchedule, setIdSchedule ] = useState('');
    const [ infoName, setInfoName ] = useState('');
    const [ infoService, setInfoService ] = useState('');
    const [ infoDate, setInfoDate ] = useState('');
    const [ infoHour, setInfoHour ] = useState('');
    const [ infoTitle, setInfoTitle ] = useState('');
    const [ infoDescription, setInfoDescription ] = useState('');

    const getSchedules = () => {
        api.get(`all-schedule/${LocalItems.company}`)
        .then((response) => {
            let scheduleItem;
            let schedules = [];

            response.data.map((element) => {
                scheduleItem = {
                    id: element.id_schedule,
                    title: `${moment(element.date).format('LT')} - ${element.full_name}`,
                    date: moment(element.date).format('YYYY-MM-DD')
                }

                return schedules.push(scheduleItem);
            });
            setSchedules(schedules)
        });
    }

    const getSchedulesToday = () => {
        api.get(`schedule-today/${LocalItems.company}`)
            .then((response) => {
                if (response.data.message) {
                    toast.error(response.data.message)
                } else {
                    setSchedulesToday(response.data)
                }
            })
            .catch((error) => {
                toast.error(error)
            });
    }

    const infoSchedule = (id) => {
        setIdSchedule(id)
        getInfoSchedule(id);
        openModalInfoSchedule();
    }

    const updateScheduleStatus = (e, id, status) => {
        if (e.target.checked === true) {
            e.target.closest('div').classList.add('item-finish');
        } else {
            e.target.closest('div').classList.remove('item-finish');
        }

        let statusSchedule = (status === 2) ? 3 : 2;

        const data = {
            id_type_schedule: statusSchedule
        }

        api.patch(`schedule/${id}`, data)
            .then(() => {
                getSchedulesToday();
            })
    }

    const openModalUpdateSchedule = (client, id) => {
        setClientName(client)
        setIdSchedule(id)
        setDate('');
        setHour('');
        let modal = document.querySelector('#modalUpdateSchedule');
        modal.style.display = 'block';
    }

    const closeModalUpdateSchedule = () => {
        let modal = document.querySelector('#modalUpdateSchedule');
        modal.style.display = 'none';
    }

    const updateSchedule = () => {
        const data = {
            date: `${moment(date).format('YYYY-MM-DD')} ${hour}`
        }

        api.patch(`schedule/${idSchedule}`, data)
        .then(() => {
            toast.success('Reagendado com sucesso')
        })
        .then(() => {
            closeModalUpdateSchedule();
            closeModalInfoSchedule();
            getSchedulesToday();
            getSchedules();
        })
    }

    const openModalInfoSchedule = (id) => {
        setIdSchedule(id)
        setDate('');
        setHour('');
        let modal = document.querySelector('#modalInfoSchedule');
        modal.style.display = 'block';
    }

    const closeModalInfoSchedule = () => {
        let modal = document.querySelector('#modalInfoSchedule');
        modal.style.display = 'none';
    }

    const getInfoSchedule = (id) => {
        api.get(`schedule/${id}`)
        .then((response) => {
            const date = response.data[0].date.split('T');
            const formatDate = moment(date[0]).format('DD/MM/YYY');
            const formatHour = date[1].split(':');
            const hour = `${formatHour[0]}:${formatHour[1]}`;

            setIdSchedule(response.data[0].id_schedule)
            setInfoName(response.data[0].full_name);
            setInfoService(response.data[0].service);
            setInfoDate(formatDate);
            setInfoHour(hour);
            setInfoTitle(response.data[0].title);
            setInfoDescription(response.data[0].description);
        })
    }

    useEffect(() => {
        getSchedules();
        getSchedulesToday();
    }, [])

    return(
        <div className="d-flex" id="wrapper">
            <ToastContainer />
            <SideBar />
            <div id="page-content-wrapper">
                <Header/>
                <TitleHeader componentTitle="schedules"/>
                <div className="d-flex justify-content-end px-4 mb-4">
                    <Link to="/agendar-cliente" className="btn-primary-schedule">Agendar Cliente</Link>
                </div>
                <div className="container-fluid d-flex">
                    <div className="col-md-3">
                        <h4>Agendamentos do dia</h4>
                        <ul className="list-group">
                            {scheduleToday.map((schedule) => {
                                if (schedule.id_type_schedule === 2) {
                                    return(
                                        <li className="list-group-item p-0 border-0 itemToday d-flex align-items-baseline justify-content-between" key={schedule.id_schedule} data-id={schedule.id_schedule}>
                                            <div className="d-flex align-items-baseline">
                                                <input type="checkbox" className="mr-2"
                                                    id={schedule.id_schedule}
                                                    onChange={(e) => updateScheduleStatus(e, e.target.id, schedule.id_type_schedule)}/>
                                                <div>
                                                    <div className="d-flex">
                                                        <span>{moment(schedule.date).format('LT')} - </span> <p className="mb-0 ml-1"> {schedule.full_name}</p>
                                                    </div>
                                                    <p><strong>Serviço:</strong> {schedule.service}</p>
                                                </div>
                                            </div>
                                            <button className="btn-secundary-schedule ml-2 p-1" onClick={() => openModalUpdateSchedule(schedule.full_name, schedule.id_schedule)}>Reagendar</button>
                                        </li>
                                    )
                                } else {
                                    return(
                                        <li className="list-group-item p-0 border-0 itemToday d-flex align-items-baseline justify-content-between" key={schedule.id_schedule} data-id={schedule.id_schedule}>
                                            <div className="d-flex align-items-baseline item-finish">
                                                <input type="checkbox" className="mr-2" defaultChecked="checked"
                                                    id={schedule.id_schedule}
                                                    onChange={(e) => updateScheduleStatus(e, e.target.id, schedule.id_type_schedule)}/>
                                                <div>
                                                    <div className="d-flex">
                                                        <span>{moment(schedule.date).format('LT')} - </span> <p className="mb-0 ml-1"> {schedule.full_name}</p>
                                                    </div>
                                                    <p><strong>Serviço:</strong> {schedule.service}</p>
                                                </div>
                                            </div>
                                            <p className="ml-2">Atendido</p>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <FullCalendar
                            defaultView="dayGridMonth"
                            plugins={[ dayGridPlugin, bootstrapPlugin]}
                            themeSystem={'bootstrap'}
                            timeZone={'America/Sao_Paulo'}
                            locale={'pt-br'}
                            eventColor={'#623b8a'}
                            header={
                                {
                                    left: 'today prev,next',
                                    right: 'title'
                                }
                            }
                            buttonText={{
                                today: 'Dia Atual',
                            }}
                            events={schedule}
                            eventClick={(info) => infoSchedule(info.event.id) }
                        />
                    </div>
                </div>
            </div>
            <div className="modal bd-example-modal-lg" id="modalUpdateSchedule">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Reagendar Cliente {clientName}</h5>
                            <button type="button" className="close" onClick={closeModalUpdateSchedule}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label>Data:</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={date}
                                            onChange={e => setDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="col">
                                        <label>Hora:</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            value={hour}
                                            onChange={e => setHour(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn-secundary-schedule border-0" onClick={closeModalUpdateSchedule}>Cancelar</button>
                            <button type="button" className="btn-primary-schedule border-0" onClick={updateSchedule}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal bd-example-modal-lg" id="modalInfoSchedule">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Informação do Agendamento</h5>
                            <button type="button" className="close" onClick={closeModalInfoSchedule}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-12 p-0">
                                <div className="row">
                                    <div className="col">
                                        <label>Nome do Cliente: <span className="font-weight-normal"> {infoName}</span></label>
                                    </div>
                                    <div className="col">
                                        <label>Serviço: <span className="font-weight-normal"> {infoService}</span></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label>Data: <span className="font-weight-normal"> {infoDate}</span></label>
                                    </div>
                                    <div className="col">
                                        <label>Hora: <span className="font-weight-normal"> {infoHour}</span></label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label>Titulo: <span className="font-weight-normal"> {infoTitle}</span></label>
                                    </div>
                                    <div className="col">
                                        <label>Descrição: <span className="font-weight-normal"> {infoDescription}</span></label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-0">Reagendar</h6>
                                <form>
                                    <div className="row">
                                        <div className="col">
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={date}
                                                onChange={e => setDate(e.target.value)}
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="time"
                                                className="form-control"
                                                value={hour}
                                                onChange={e => setHour(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn-secundary-schedule border-0" onClick={closeModalInfoSchedule}>Cancelar</button>
                            <button type="button" className="btn-primary-schedule border-0" onClick={updateSchedule}>Reagendar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCalendar;