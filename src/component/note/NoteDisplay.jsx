import React from "react";
import {deleteNote} from "../../service/notes";

function NoteDisplay({note, onDeleted}) {

    const handleDelete = function (event) {
        event.preventDefault();
        deleteNote(note.id)
            .then(response => {
                    onDeleted(note);
                }
            )
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <p>date: {note.created_at}</p>
            <button
                className="btn btn-outline-secondary"
                onClick={handleDelete}
            >
                Supprimer
            </button>

        </>
    )
}

export default NoteDisplay
