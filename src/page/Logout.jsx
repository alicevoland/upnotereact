import Navbar from "../component/common/Navbar";
import Jumbo from "../component/common/Jumbo";
import Content from "../component/common/Content";
import React, {useEffect, useState} from "react";
import Footer from "../component/common/Footer";
import {login, register} from "../service/authentication"
import {getToken, removeToken, setToken} from "../service/token";


function Logout(props) {

    const [state, setState] = useState({
        token: getToken()
    })

    useEffect(() => {
            removeToken();
            setState({
                token: getToken()
            });
        },
        []
    )

    const message = state.token ? "Attente déconnexion" : "Vous êtes bien déconnecté"

    return (
        <>
            <Navbar/>
            <Jumbo
                title={"Déconnexion"}
                lead={"A bientôt :)"}
            />
            <Content>

                <p>{message}</p>

            </Content>
            <Footer/>
        </>
    )
}

export default Logout