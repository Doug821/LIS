import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Editais from './pages/Editais';
import Error404 from './pages/404';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/editais" component={Editais} />
                <Route component={Error404} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;