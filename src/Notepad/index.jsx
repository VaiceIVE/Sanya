import React from "react";
import NotepadFormAdapter from "./NotepadAdapter";
import NotepadForm from "./NotepadForm";
import NotepadNotes from "./NotepadNotes.jsx";
import NotepadNotesProvider from "./NotepadNotesProvider";

const Notepad = () => {

    return (
        <NotepadNotesProvider>

            <NotepadFormAdapter>
                <NotepadForm/>
            </NotepadFormAdapter>

            <NotepadNotes/>
        </NotepadNotesProvider>
    );
};

export default Notepad;