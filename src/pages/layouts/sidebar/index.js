import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import RegisterSchedule from '../../schedules/registerSchedule/modal/';
import RegisterClients from '../../myClients/registerClients/';
import './style.css';

const SideBar = () => {

    const openModalRegisterSchedule = (e) => {
      let modal = document.querySelector('#modalRegisterSchedule');
      e.preventDefault();
      modal.style.display = 'block';
    }

    const openModalRegisterClient = (e) => {
      let modal = document.querySelector('#modalRegisterClient');
      e.preventDefault();
      modal.style.display = 'block';
    }

    return(
        <div id="sidebar-wrapper">
          <div className="sidebar-heading"><img src={Logo} alt="Angeluz" className="w-100"/></div>
          <div className="list-group list-group-flush">
            <div className="box-sidebar">
              <span>Dashboard</span>
              <ul>
                <li>
                  <Link to="/dashboard" className="list-group-item list-group-item-action border-0">Painel de Controle</Link>
                </li>
              </ul>
            </div>
            <div className="box-sidebar">
              <span>Clientes</span>
              <ul>
                <li>
                  <Link to="/meus-clientes" className="list-group-item list-group-item-action border-0">Meus Clientes</Link>
                  <Link to="#" className="list-group-item list-group-item-action border-0" onClick={openModalRegisterClient}>Cadastrar Cliente</Link>
                </li>
              </ul>
            </div>
            <div className="box-sidebar">
              <span>Serviços</span>
              <ul>
                <li>
                  <Link to="/dashboard" className="list-group-item list-group-item-action border-0">Ver Serviços</Link>
                </li>
                <li>
                  <Link to="/lista-de-servicos" className="list-group-item list-group-item-action border-0">Lista de Serviços</Link>
                </li>
              </ul>
            </div>
            <div className="box-sidebar">
              <span>Agendamentos</span>
              <ul>
                <li>
                  <Link to="#" className="list-group-item list-group-item-action border-0" onClick={openModalRegisterSchedule}>Agendar Cliente</Link>
                </li>
                <li>
                  <Link to="/confirmar-agendamentos" className="list-group-item list-group-item-action border-0">Confirmar Agendamentos</Link>
                </li>
                <li>
                  <Link to="/ver-agendamentos" className="list-group-item list-group-item-action border-0">Ver Agendamentos</Link>
                </li>
              </ul>
            </div>
            <div className="box-sidebar">
              <span>Financeiro</span>
              <ul>
                <li>
                  <Link to="/dashboard" className="list-group-item list-group-item-action border-0">Pagamentos</Link>
                </li>
              </ul>
            </div>
            <div className="box-sidebar">
              <span>Logout</span>
              <ul>
                <li>
                  <Link to="/" className="list-group-item list-group-item-action border-0">Sair</Link>
                </li>
              </ul>
            </div>
          </div>
          <RegisterSchedule />
          <RegisterClients />
        </div>
    )
}

export default SideBar;