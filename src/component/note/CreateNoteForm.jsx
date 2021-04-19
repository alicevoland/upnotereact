import React, {useState} from "react";
import ErrorMessage from "../common/ErrorMessage";
import {createNote} from "../../service/notes";

function CreateNoteForm({onCreated}) {

    const [state, setState] = useState({
        title: "",
        content: "",
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
        const {title, content} = state;
        createNote(title, content)
            .then(function (response) {
                setState(prevState => ({
                    ...prevState,
                    successMessage: 'Note créée',
                    title: '',
                    content: '',
                    error: null
                }));
                onCreated(response.data);
            })
            .catch(function (error) {
                console.log(error);
                setState(prevState => ({
                    ...prevState,
                    successMessage: null,
                    error: {
                        title: 'Erreur',
                        data: error.response.data
                    }
                }))
            });
    }

    return (
        <>
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Titre</label>
                    <input type="text"
                           className="form-control"
                           id="title"
                           placeholder="Entrez le titre"
                           value={state.title}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Contenu</label>
                    <textarea
                        className="form-control"
                        id="content"
                        placeholder="Entrez le contenu"
                        value={state.content}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-check">
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={handleSubmitClick}
                >Créer
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

export default CreateNoteForm
