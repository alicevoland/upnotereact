import Navbar from "../component/common/Navbar";
import Jumbo from "../component/common/Jumbo";
import Content from "../component/common/Content";
import Footer from "../component/common/Footer";
import React, {useEffect, useState} from "react";
import {getUserNotes} from "../service/notes";
import CreateNoteForm from "../component/note/CreateNoteForm";
import NoteDisplay from "../component/note/NoteDisplay";

function Dashboard(props) {

    const [state, setState] = useState({
        notes: []
    });

    useEffect(() => {
            getUserNotes()
                .then(response => {
                    console.log(response.data)
                    setState((prevState) => ({
                        notes: response.data
                    }));
                })
        },
        []
    )

    const onCreated = function (note) {
        console.log(`Created ${note.created_at}`);
    }

    return (
        <>
            <Navbar/>
            <Jumbo
                title={"upNote: dashboard"}
                lead={"Liste des notes"}
            />
            <Content>
                <div className={"row"}>
                    <div className="card col-12 col-lg-10 login-card mt-2 mx-auto hv-center p-4">
                        <h3>Nouvelle note</h3>
                        <CreateNoteForm onCreated={onCreated}/>
                    </div>
                </div>
                <div className={"row"}>
                    {state.notes.map(note => {
                        return (
                            <div key={note.id} className="card col-12 col-lg-5 login-card m-2 mx-auto hv-center p-4">
                                <NoteDisplay note={note}/>
                            </div>
                        );
                    })}
                </div>
            </Content>
            <Footer/>
        </>
    );
}

export default Dashboard
