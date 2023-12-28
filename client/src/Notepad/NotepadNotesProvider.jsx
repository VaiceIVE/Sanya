import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { saveAs } from 'file-saver';
import getColor from "./getColor";
import dayjs from "dayjs";

export const Context = createContext();

const generateId = () => {
    const min = Math.ceil(3000);
    const max = Math.floor(5000);
    return Math.floor(Math.random() * (max - min) + min)
}

const isAlreadyAdded = (notes, newNote) => 
    notes.reduce((exist, t) => {
        if (
            t.title === newNote.title &&
            t.description === newNote.description &&
            dayjs(t.date).format('MM.DD.YYYY') === newNote.date
        ) {
            return true;
        }
        return exist;
    }, false);


const NotepadNotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/notes') // для юзера 
        .then(response =>
            setNotes(response.data));
    }, []);

    const addNote = (newNote) => {
        if(isAlreadyAdded(notes, newNote)) {
          console.log('true')
            return;
        };
        axios.post('http://localhost:8080/api/note', 
            {
                id: generateId(), 
                title: newNote.title,
                description: newNote.description,
                date: newNote.date,
                color_id: newNote.color?.color_id,
                url: newNote.url,
            }
        ).then(response => {
          const note = {
            ...response.data,
            color: getColor.filter(item => item.color_id === response.data.color_id)[0],
          };
          delete note.color_id;
          setNotes(pervState => [...pervState, note])
        });
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/api/note/${id}`);
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
    };

    const handleSave = (item) => {
        const fileName = `Note number ${item.id}.txt`;
        const file = new Blob([JSON.stringify(item)], {type: 'text/plain;charset=utf-8'});
        saveAs(file, fileName);
    };

    return (
        <Context.Provider value={[notes, addNote, handleDelete, handleSave]}>
            {children}
        </Context.Provider>
    );
};

export const useNotepadNotesContext = () => useContext(Context);

export default NotepadNotesProvider;