import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';

const LazySettings = React.lazy(() => import('./components/Settings'));

// /about/yariv
function App() {
    return (
        <div className="App">


            <BrowserRouter>

                <Link to="/settings">
                    Settings
                </Link>

                <Suspense fallback={<div>Loading...</div>}>

                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about/:hello" component={About} />
                        <Route path="/about" component={About} />
                        <Route path="/settings" component={LazySettings} />
                        <Route path="**" component={Error404} />
                    </Switch>

                </Suspense>




            </BrowserRouter>
        </div>
    );
}

export default App;
