import React, { Component } from 'react';
import SideBar from '../../layouts/sidebar';
import Header from '../../layouts/header';
import TitleHeader from '../../layouts/titleHeader';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import './style.css';

class EventCalendar extends Component {
    render() {
        return(
            <div className="d-flex" id="wrapper">
                <SideBar />
                <div id="page-content-wrapper">
                    <Header/>
                    <TitleHeader componentTitle="schedules"/>
                    <div className="container-fluid">
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
                            events={[
                                {title:'teste', date:'2020-03-30'},
                                {title:'teste 2', date:'2020-03-30'}
                            ]}
                            eventClick={ (info) => {
                                alert('Event: ' + info.event.title);
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default EventCalendar;