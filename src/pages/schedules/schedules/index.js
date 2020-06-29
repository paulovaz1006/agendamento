import React, { useEffect, useState } from 'react';
import SideBar from '../../layouts/sidebar';
import Header from '../../layouts/header';
import TitleHeader from '../../layouts/titleHeader';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import './style.css';
import api from '../../../services/api';
import localItems from '../../../services/local-item';
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';

const EventCalendar = () => {    
    const [ schedule, setSchedules ] = useState([]);
    const [ scheduleToday, setSchedulesToday ] = useState([]);    
    const [ schedulesTodayError, setSchedulesTodayError ] = useState('');

    const getSchedules = () => {
        api.get(`all-schedule/${localItems.company}`)
        .then((response) => {        
            let scheduleItem;
            let schedules = [];

            response.data.map((element) => {                
                scheduleItem = {
                    title: `${moment(element.date).format('LT')} - ${element.full_name}`,
                    date: moment(element.date).format('YYYY-MM-DD')
                }
    
                return schedules.push(scheduleItem);
            });
            setSchedules(schedules)            
        });
    }

    const getSchedulesToday = () => {
        api.get(`schedule-today/${localItems.company}`)
        .then((response) => {
            if (response.data.message) {
                setSchedulesTodayError(response.data.message)
            } else {
                setSchedulesToday(response.data) 
            }
                   
        })
        .catch((error) => {
            console.log(error)
        });
    }
    
    const infoSchedule = (info) => {
        alert('Event: ' + info.event.title);
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
                getSchedulesToday()  
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
                <div className="container-fluid d-flex">
                    <div className="col-md-2">
                        <h4>Agendamentos do dia</h4>
                        <ul className="list-group">
                            {scheduleToday.map((schedule) => {  
                                if (schedule.id_type_schedule === 2) {
                                    return(
                                        <li className="list-group-item p-0 border-0 itemToday" key={schedule.id_schedule} data-id={schedule.id_schedule}>
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
                                        </li>  
                                    )
                                } else {
                                    return(
                                        <li className="list-group-item p-0 border-0 itemToday" key={schedule.id_schedule} data-id={schedule.id_schedule}>
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
                                        </li> 
                                    )
                                }
                            })}
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <FullCalendar 
                            defaultView="dayGridMonth"
                            plugins={[ dayGridPlugin, bootstrapPlugin]}
                            themeSystem={'bootstrap'}
                            timeZone={'America/Sao_Paulo'}
                            locale={'pt-br'}
                            header={
                                {
                                    left:   'today prev,next',
                                    right:  'title'
                                }
                            }
                            buttonText={{
                                today:    'Dia Atual',
                            }}
                            events={schedule}
                            eventClick={(info) => infoSchedule(info) }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCalendar;