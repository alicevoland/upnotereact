import Jumbo from "../component/common/Jumbo";
import Content from "../component/common/Content";
import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import Loading from "../component/common/Loading";
import React, {useEffect, useState} from "react";
import {getCurrentUser} from "../service/users";
import {Link} from "react-router-dom";

function UserStatus({user}) {
    if (!user) {
        return (
            <>
                <p> Vous n'êtes pas connecté :
                    <Link key="login" className="nav-item nav-link"
                          to="/login"> Connexion ou inscription </Link>,
                </p>
                <p>
                    Vous pouvez utiliser le login/mot de passe de démo : "username"/"password".
                </p>
            </>
        )
    } else {
        return (
            <>
                <p>Connecté !</p>
                <ul>
                    <li> id: {user.id} </li>
                    <li> email: {user.email} </li>
                    <li> username: {user.username} </li>
                </ul>
            </>
        )
    }
}

function Home() {

    const [user, setUser] = useState({
        isLoading: 'true',
        user: null
    })

    useEffect(() => {
            getCurrentUser()
                .then(response => {
                    console.log(response);
                    setUser(prevState => ({
                        ...prevState,
                        isLoading: false,
                        user: response.data
                    }))

                })
                .catch(error => {
                    setUser(prevState => ({
                        ...prevState,
                        isLoading: false,
                        user: null
                    }))
                })
        },
        [])


    return (
        <>
            <Navbar/>
            <Jumbo
                title={"upNote: Note taking app"}
                lead={"Bienvenue sur le front de démo"}
            />
            <Content>
                <h1>Motivation</h1>

                <p>
                    Toy project to learn
                </p>
                <Loading isLoading={user.isLoading} message={"Veuillez patienter"}>
                    <UserStatus user={user.user}/>
                </Loading>

            </Content>
            <Footer/>
        </>
    );
}

export default Home;