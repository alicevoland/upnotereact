import api from "./api";

function getUserNotes() {
    return api.get(
        "notes"
    );
}

function createNote(title, content) {
    return api.post(
        'notes/',
        {
            title: title,
            content: content
        }
    );
}

export {
    getUserNotes,
    createNote,
}