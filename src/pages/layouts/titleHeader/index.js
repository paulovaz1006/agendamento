import React from 'react';
import {
    FaUsers,
    FaBook,
    FaCalendarCheck,
} from 'react-icons/fa';
import './style.css';

const titleHeader = (props) => {
    let title, subTitle = '';

    const infoTitleHeader = () => {        
        if (props.componentTitle === 'schedules') {
            title = 'Ver Agendamentos';
            subTitle = 'Veja todos os agendamentos do dia e do mês';
            return (<FaBook className="icon-sub-title" />)
        } else if (props.componentTitle === 'myClients') {
            title = 'Meus Clientes';
            subTitle = 'Veja todos os seus clientes e suas informações';
            return (<FaUsers className="icon-sub-title" />)
        } else if (props.componentTitle === 'confirmAppointments') {
            title = 'Confirmar Agendamentos';
            subTitle = 'Veja todos os seus pré agendamentos';
            return (<FaCalendarCheck className="icon-sub-title" />)
        } else if (props.componentTitle === 'serviceList') {
            title = 'Lista de Serviços';
            subTitle = 'Veja todos os seus serviços';
            return (<FaCalendarCheck className="icon-sub-title" />)
        }       
    }

    return(
        <div className="app-page-title ml-3 px-3 py-4 mb-4">
            <div className="page-title-wrapper">
                <div className="page-title-heading">
                    <div className="page-title-icon">
                        {infoTitleHeader()}
                    </div>
                    <div>{title}
                        <div className="page-title-subheading">{subTitle}</div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default titleHeader;
