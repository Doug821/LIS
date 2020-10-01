import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Editais from './pages/Editais';
import Error404 from './pages/404';
import CreateAccount from './pages/Account';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/editais" component={Editais} />
                <Route path="/signup" component={CreateAccount} />
                <Route component={Error404} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;