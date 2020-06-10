import React from 'react';
import { FaUser } from 'react-icons/fa';
import './style.css';

const titleHeader = (props) => {
    let title, subTitle;

    const componentTitle = () => {
        switch(props.componentTitle) {
            case'myClients':
                title = 'Meus Clientes';
                subTitle = 'Veja todos os seus clientes e suas informações';
                break;
            case'confirmAppointments':
                title = 'Confirmar Agendamentos';
                subTitle = 'Veja todos os seus pré agendamentos';
                break;
            case'schedules':
                title = 'Ver Agendamentos';
                subTitle = 'Veja todos os agendamentos do dia e do mês';
                break;
            case'serviceList':
                title = 'Lista de Serviços';
                subTitle = 'Veja todos os seus serviços';
                break;
            default:
                title = '';
                subTitle = '';
                break;
        }
    }

    componentTitle();

    return(
        <div className="app-page-title ml-3 px-3 py-4 mb-4">
            <div className="page-title-wrapper">
                <div className="page-title-heading">
                    <div className="page-title-icon">
                        <FaUser className="bg-happy-itmeo" />
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
