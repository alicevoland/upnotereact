import Jumbo from "../component/common/Jumbo";
import Content from "../component/common/Content";
import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import React from "react";
import {getCurrentUser} from "../service/users";


function Home() {

    getCurrentUser()
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })

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

            </Content>
            <Footer/>
        </>
    );
}

export default Home;