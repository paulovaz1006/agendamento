import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import './style.css';

const SideBar = () => {
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
                  <Link to="/meus-clientes" className="list-group-item list-group-item-action border-0">Meus clientes</Link>
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
                  <Link to="/dashboard" className="list-group-item list-group-item-action border-0">Lista de Serviços</Link>
                </li>                
              </ul>
            </div>
            <div className="box-sidebar">
              <span>Agendamentos</span>
              <ul>
                <li>
                  <Link to="/dashboard" className="list-group-item list-group-item-action border-0">Ver Agendamentos</Link>
                </li>
                <li>
                  <Link to="/dashboard" className="list-group-item list-group-item-action border-0">Confirmar Agendamentos</Link>
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
          </div>
        </div>
    )
}

export default SideBar;