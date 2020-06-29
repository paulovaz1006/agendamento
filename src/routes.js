import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';
import Dashboard from './pages/dashboard';
import NewCases from './pages/newCases';
import NewCasesDetails from './pages/newCases/newCasesDetails';
import CasesDetails from './pages/dashboard/casesDetails';
import ConfirmAppointments from './pages/schedules/confirmAppointments';
import Schedules from './pages/schedules/schedules';
import MyClients from './pages/myClients';
import RegisterNewClient from './pages/myClients/registerClients';
import ServiceList from './pages/myServices/serviceList';
import RegisterSchedule from './pages/schedules/registerSchedule/';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/esqueceu-a-senha" component={ForgotPassword} />
                <Route path="/dashboard" activeClassName="activeLink" component={Dashboard} />
                <Route path="/meus-clientes" activeClassName="activeLink" component={MyClients} />
                <Route path="/cadastrar-cliente" activeClassName="activeLink" component={RegisterNewClient} />
                <Route path="/novos-casos" activeClassName="activeLink" component={NewCases} />
                <Route path="/detalhes-caso" activeClassName="activeLink" component={NewCasesDetails} />
                <Route path="/meu-caso/:id" activeClassName="activeLink" component={CasesDetails} />
                <Route path="/confirmar-agendamentos" activeClassName="activeLink" component={ConfirmAppointments} />
                <Route path="/ver-agendamentos" activeClassName="activeLink" component={Schedules} />
                <Route path="/lista-de-servicos" activeClassName="activeLink" component={ServiceList} />
                <Route path="/agendar-cliente" activeClassName="activeLink" component={RegisterSchedule} />                
            </Switch>
        </BrowserRouter>
    )
}