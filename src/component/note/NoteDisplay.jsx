function NoteDisplay({note}) {
    return (
    <>
    <h3>{note.title}</h3>
        <p>{note.content}</p>
        <p>date: {note.created_at}</p>
    </>
    )
}

export default NoteDisplay
