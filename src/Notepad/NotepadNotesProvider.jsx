import React, { createContext, useContext, useState } from "react";

export const Context = createContext();

const addId = (notes, note) => ({
    id: notes.length + 1,
    ...note,
});

const isAlreadyAdded = (notes, newNote) =>
    notes.reduce((exist, t) => {
        if (
            t.title === newNote.title &&
            t.description === newNote.description &&
            t.date === newNote.date  &&
            t.color.code === newNote.color.code
        ) {
            return true;
        }
        return exist;
    }, false);

const NotepadNotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        if(isAlreadyAdded(notes, newNote)) {
            return;
        };

        setNotes([...notes, addId(notes, newNote)]);
    };

    return (
        <Context.Provider value={[notes, addNote]}>
            {children}
        </Context.Provider>
    );
};

export const useNotepadNotesContext = () => useContext(Context);

export default NotepadNotesProvider;