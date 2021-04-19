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

function deleteNote(id) {
    return api.delete(
        'notes/' +id + '/'
    );
}

export {
    getUserNotes,
    createNote,
    deleteNote,
}