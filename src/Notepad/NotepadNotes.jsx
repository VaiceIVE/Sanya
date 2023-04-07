import React from "react";
import { useNotepadNotesContext } from "./NotepadNotesProvider";

const NotepadNotes = () => {
    const [notes] = useNotepadNotesContext();

    return (
        <div className="w878 pt32 pl32">
            <h2 className="h2 mb31">Мои записи</h2>
            <ul>
                {notes.map((item) => (
                    <li className="li mb16" key={item.id}>
                        <h3 className="h3 mb8">{item.title}</h3>
                        <p className="p mb16">{item.date}</p>
                        <p className="grey">{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotepadNotes;