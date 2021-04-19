import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from "./page/Home";
import Login from "./page/Login";
import Logout from "./page/Logout";
import Dashboard from "./page/Dashboard";

function App() {
    return (
        <>
            <BrowserRouter>
                {/*/!* HEADER *!/*/}
                {/*<Route path='/' render={(props) =>*/}
                {/*    <Navbar {...props}/>*/}
                {/*}/>*/}


                {/* CONTENT */}
                <Switch>

                    {/* Home */}
                    <Route exact path='/' render={(props) =>
                        <Home {...props} />
                    }/>

                    {/* Login */}
                    <Route exact path='/login' render={(props) =>
                        <Login {...props} />
                    }/>

                    {/* Logout */}
                    <Route exact path='/logout' render={(props) =>
                        <Logout {...props} />
                    }/>

                    {/* Dashbord */}
                    <Route exact path='/dashboard' render={(props) =>
                        <Dashboard {...props} />
                    }/>

                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
