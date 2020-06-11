import React from 'react';
import {
    FaUsers,
    FaTachometerAlt,
    FaBook,
    FaCalendarCheck,
    FaDollarSign,
    FaSignOutAlt
} from 'react-icons/fa';
import './style.css';

const titleHeader = (props) => {
    let title, subTitle, icon;

    const componentTitle = () => {
        switch(props.componentTitle) {
            case'myClients':
                title = 'Meus Clientes';
                subTitle = 'Veja todos os seus clientes e suas informações';
                icon = '<FaUsers className="bg-happy-itmeo" />';
                break;
            case'confirmAppointments':
                title = 'Confirmar Agendamentos';
                subTitle = 'Veja todos os seus pré agendamentos';
                icon = '<FaCalendarCheck className="bg-happy-itmeo" />';
                break;
            case'schedules':
                title = 'Ver Agendamentos';
                subTitle = 'Veja todos os agendamentos do dia e do mês';
                icon = '<FaCalendarCheck className="bg-happy-itmeo" />';
                break;
            case'serviceList':
                title = 'Lista de Serviços';
                subTitle = 'Veja todos os seus serviços';
                icon = '<FaBook className="bg-happy-itmeo" />';
                break;
            default:
                title = '';
                subTitle = '';
                icon = `<FaUsers className="bg-happy-itmeo" />`;
                break;
        }

        return (
            <div className="page-title-heading">
                <div className="page-title-icon">
                    {icon}
                </div>
                <div>{title}
                    <div className="page-title-subheading">{subTitle}</div>
                </div>
            </div>
        )
    }

    return(
        <div className="app-page-title ml-3 px-3 py-4 mb-4">
            <div className="page-title-wrapper">
                {componentTitle()}
            </div>
        </div>
    )
}

export default titleHeader;
