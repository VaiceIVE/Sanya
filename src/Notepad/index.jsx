import React from "react";
import NotepadFormAdapter from "./NotepadAdapter";
import NotepadForm from "./NotepadForm";
import NotepadNotes from "./NotepadNotes.jsx";
import NotepadNotesProvider from "./NotepadNotesProvider";

const Notepad = () => {

    return (
        <NotepadNotesProvider>
            <h1 className="h1 mb48">Записная книжка</h1>
            <div className="row aifs">
                <NotepadFormAdapter>
                    <NotepadForm/>
                </NotepadFormAdapter>
                <NotepadNotes/>
            </div>
        </NotepadNotesProvider>
    );
};

export default Notepad;