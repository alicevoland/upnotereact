import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from "./page/Home";
import Locality from "./page/Locality";
import RegionalIntensiveCareAdmission from "./page/RegionalIntensiveCareAdmission";
import Login from "./page/Login";
import Logout from "./page/Logout";

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

                        {/* Locality: Departments and Regions */}
                        <Route exact path='/locality' render={(props) =>
                            <Locality {...props} />
                        }/>

                        {/* Locality: Departments and Regions */}
                        <Route exact path='/regionalIntensiveCareAdmissions' render={(props) =>
                            <RegionalIntensiveCareAdmission {...props} />
                        }/>


                    </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
