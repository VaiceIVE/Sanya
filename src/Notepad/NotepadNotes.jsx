import React from "react";
import Note from "../components/Note";
import { useNotepadNotesContext } from "./NotepadNotesProvider";

const NotepadNotes = () => {
    const [notes, add ,del] = useNotepadNotesContext();

    const handleDelete = (id) => {
        del(id);
    };

    return (
        <div className="w878 pt32 pl32">
            <h2 className="h2 mb31">Мои записи</h2>
            <ul>
                {notes.map((item) => (
                    <Note key={item.title} item={item} handleDelete={handleDelete}/>
                ))}
            </ul>
        </div>
    );
};

export default NotepadNotes;