import Navbar from "../component/common/Navbar";
import Jumbo from "../component/common/Jumbo";
import Content from "../component/common/Content";
import React, {useState} from "react";
import Footer from "../component/common/Footer";
import {login, register} from "../service/authentication"

function ErrorMessage({error}) {
    if (!error) {
        return (
            <></>
        );
    } else {
        var messages = []
        for (var topic in error.data) {
            for (var index in error.data[topic]) {
                messages.push(`${topic}: ${error.data[topic][index]}`)
            }
        }
        return (
            <div className="alert alert-danger mt-2" style={{display: 'block'}} role="alert">
                <h4>{error.title}</h4>
                <ul>
                    {messages.map((message, i) =>
                        <li key={i}>{message}</li>
                    )}
                </ul>
            </div>
        );
    }
}

// <div className="alert alert-danger mt-2" style={{display: state.error ? 'block' : 'none'}}
//      role="alert">
//     <h4>{error.title}</h4>
//     <div/>
//     )
//     }
//
//     }
//     }

function LoginForm(props) {

    const [state, setState] = useState({
        username: "",
        password: "",
        successMessage: null,
        error: null,
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = (event) => {
        event.preventDefault();
        const {username, password} = state;
        login(username, password)
            .then(function (response) {
                setState(prevState => ({
                    ...prevState,
                    successMessage: 'Connexion réussie',
                    error: null
                }))
            })
            .catch(function (error) {
                console.log(error);
                setState(prevState => ({
                    ...prevState,
                    successMessage: null,
                    error: {
                        title: 'Erreur de connexion',
                        data: error.response.data
                    }
                }))
            });
    }

    return (
        <>
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Nom d'utilisateur</label>
                    <input type="username"
                           className="form-control"
                           id="username"
                           aria-describedby="usernameHelp"
                           placeholder="Entrez votre nom d'utilisateur"
                           value={state.username}
                           onChange={handleChange}
                    />
                    <small id="usernameHelp" className="form-text text-muted">Nom d'utilisateur (pas le mail)</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Mot de passe</label>
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Entrez votre mot de passe"
                           value={state.password}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-check">
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={handleSubmitClick}
                >Se connecter
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none'}}
                 role="alert">
                {state.successMessage}
            </div>
            <ErrorMessage error={state.error}/>
        </>
    )
}

function RegisterForm(props) {

    const [state, setState] = useState({
        username: "",
        password: "",
        passwordConfirm: "",
        successMessage: null,
        error: null,
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = (event) => {
        event.preventDefault();
        const {username, password, passwordConfirm} = state;
        if (passwordConfirm !== password) {
            setState(prevState => ({
                ...prevState,
                successMessage: null,
                error: {
                    title: 'Erreur inscription',
                    data: {password: ['Les mots de passe ne correcpondent pas']}
                }
            }))
            return;
        }
        register(username, password)
            .then(function (response) {
                setState(prevState => ({
                    ...prevState,
                    successMessage: 'Inscription réussie, vous pouvez vous connecter',
                    error: null
                }))
            })
            .catch(function (error) {
                console.log(error);
                setState(prevState => ({
                    ...prevState,
                    successMessage: null,
                    error: {
                        title: "Erreur d'inscription",
                        data: error.response.data
                    }
                }))
            });
    }

    return (
        <>
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Nom d'utilisateur</label>
                    <input type="username"
                           className="form-control"
                           id="username"
                           aria-describedby="usernameHelp"
                           placeholder="Entrez votre nom d'utilisateur"
                           value={state.username}
                           onChange={handleChange}
                    />
                    <small id="usernameHelp" className="form-text text-muted">Nom d'utilisateur (pas le mail)</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Mot de passe</label>
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Entrez votre mot de passe"
                           value={state.password}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword2">Confirmation du mot de passe</label>
                    <input type="password"
                           className="form-control"
                           id="passwordConfirm"
                           placeholder="Entrez votre mot de passe à nouveau"
                           value={state.passwordConfirm}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-check">
                </div>
                <button
                    type="submit"
                    className="btn btn-success btn-block"
                    onClick={handleSubmitClick}
                >S'inscrire
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none'}}
                 role="alert">
                {state.successMessage}
            </div>
            <ErrorMessage error={state.error}/>
        </>
    )
}


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