import React from "react";
import Note from "../components/Note";
import { useNotepadNotesContext } from "./NotepadNotesProvider";

const NotepadNotes = () => {
    const [notes, add ,del, save] = useNotepadNotesContext();

    const handleDelete = (id) => {
        del(id);
    };

    const handleSave = (item) => {
        save(item);
    };

    return (
        <div className="w878 pt32 pl32">
            <h2 className="h2 mb31">Мои записи</h2>
            <ul>
                {notes.map((item) => (
                    <Note 
                        key={item.id} 
                        item={item} 
                        handleDelete={handleDelete} 
                        handleSave={handleSave}
                    />
                ))}
            </ul>
        </div>
    );
};

export default NotepadNotes;