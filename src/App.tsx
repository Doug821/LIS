import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Editais from './components/pages/Editais';
import Error404 from './components/pages/404';

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