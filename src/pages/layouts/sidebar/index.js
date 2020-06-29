import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import './style.css';
import { 
  FaTachometerAlt, 
  FaUsers, 
  FaCalendarCheck, 
  FaBook, 
  FaDollarSign, 
  FaSignOutAlt 
} from 'react-icons/fa';

const SideBar = () => {
    return(
        <div id="sidebar-wrapper">
          <div className="sidebar-heading bg-header-sidebar mb-3">
            <div className="img-photo">
              <img src={Logo} alt="Angeluz" className="w-100"/>
            </div>
          </div>
          <div className="list-group list-group-flush">
            <div className="box-sidebar">
              <span><FaTachometerAlt /> Dashboard</span>
              <ul>
                <li>
                  <Link to="/dashboard" className="list-group-item list-group-item-action border-0">Painel de Controle</Link>
                </li>
              </ul>
            </div>
            <div className="box-sidebar">
              <span><FaUsers /> Clientes</span>
              <ul>
                <li>
                  <Link to="/meus-clientes" className="list-group-item list-group-item-action border-0">Meus Clientes</Link>
                  <Link to="/cadastrar-cliente" className="list-group-item list-group-item-action border-0">Cadastrar Cliente</Link>
                </li>
              </ul>
            </div>
            <div className="box-sidebar">
              <span><FaBook /> Serviços</span>
              <ul>
                <li>
                  <Link to="/lista-de-servicos" className="list-group-item list-group-item-action border-0">Lista de Serviços</Link>
                </li>
              </ul>
            </div>
            <div className="box-sidebar">
              <span><FaCalendarCheck /> Agendamentos</span>
              <ul>
                <li>
                  <Link to="/agendar-cliente" className="list-group-item list-group-item-action border-0">Agendar Cliente</Link>
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
              <span><FaDollarSign /> Financeiro</span>
              <ul>
                <li>
                  <Link to="/dashboard" className="list-group-item list-group-item-action border-0">Pagamentos</Link>
                </li>
              </ul>
            </div>
            <div className="box-sidebar">
              <span><FaSignOutAlt /> Logout</span>
              <ul>
                <li>
                  <Link to="/" className="list-group-item list-group-item-action border-0">Sair</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
}

export default SideBar;