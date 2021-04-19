import Navbar from "../component/common/Navbar";
import Jumbo from "../component/common/Jumbo";
import Content from "../component/common/Content";
import React from "react";
import Footer from "../component/common/Footer";
import LoginForm from "../component/login/LoginForm";
import RegisterForm from "../component/login/RegisterForm";


function Login(props) {

    return (
        <>
            <Navbar/>
            <Jumbo
                title={"Connexion ou inscription"}
                lead={"Formulaires"}
            />
            <Content>
                <div className={"row"}>
                    <div className="card col-12 col-lg-5 login-card mt-2 mx-auto hv-center p-4">
                        <h3>Connexion</h3>
                        <LoginForm/>
                    </div>
                    <div className="card col-12 col-lg-5 login-card mt-2 mx-auto hv-center p-4">
                        <h3>Inscription</h3>
                        <RegisterForm/>
                    </div>
                </div>
            </Content>
            <Footer/>
        </>
    )
}

export default Login