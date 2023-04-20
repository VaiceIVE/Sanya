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
            t.date === newNote.date
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

    const handleDelete = (id) => {
        const updatedNotes = notes.filter(note => note.title !== id);
        setNotes(updatedNotes);
    };

    const handleSave = (item) => {
        console.log(item);
        const jsonToTxt = require("json-to-txt");
        const dataInString = jsonToTxt({data: item});
    };

    return (
        <Context.Provider value={[notes, addNote, handleDelete, handleSave]}>
            {children}
        </Context.Provider>
    );
};

export const useNotepadNotesContext = () => useContext(Context);

export default NotepadNotesProvider;