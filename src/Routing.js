import React from 'react';
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Home from './pages/Home'
import Manager from './pages/Manager'
import Card from './UI/Card';
export const HomeRoute = "/";
export const ManagersRoute = "/manager/";
class Routing extends React.Component {
    render() {
        return (
            <Card>
                <Route path={HomeRoute} exact component={Home} />
                <Route path={ManagersRoute} component={Manager} />
            </Card >
        );
    }
}
export default withRouter(Routing);