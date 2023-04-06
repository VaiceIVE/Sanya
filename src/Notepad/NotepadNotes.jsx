import React from "react";
import { useNotepadNotesContext } from "./NotepadNotesProvider";

const NotepadNotes = () => {
    const [notes] = useNotepadNotesContext();

    return (
        <div>
            {notes.map((item) => (
                <div key={item.id}>{item.title} {item.description}</div>
            ))}
        </div>
    );
};

export default NotepadNotes;