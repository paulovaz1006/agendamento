import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';
import Register from './pages/registers';
import Dashboard from './pages/dashboard';
import NewCases from './pages/newCases';
import NewCasesDetails from './pages/newCases/newCasesDetails';
import CasesDetails from './pages/dashboard/casesDetails';
import ConfirmAppointments from './pages/schedules/confirmAppointments';
import Schedules from './pages/schedules/schedules';
import MyClients from './pages/myClients';
import ServiceList from './pages/myServices/serviceList';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro-de-clientes" component={Register} />
                <Route path="/esqueceu-a-senha" component={ForgotPassword} />
                <Route path="/dashboard" activeClassName="activeLink" component={Dashboard} />
                <Route path="/meus-clientes" activeClassName="activeLink" component={MyClients} />
                <Route path="/novos-casos" activeClassName="activeLink" component={NewCases} />
                <Route path="/detalhes-caso" activeClassName="activeLink" component={NewCasesDetails} />
                <Route path="/meu-caso/:id" activeClassName="activeLink" component={CasesDetails} />
                <Route path="/confirmar-agendamentos" activeClassName="activeLink" component={ConfirmAppointments} />
                <Route path="/ver-agendamentos" activeClassName="activeLink" component={Schedules} />
                <Route path="/lista-de-servicos" activeClassName="activeLink" component={ServiceList} />
            </Switch>
        </BrowserRouter>
    )
}