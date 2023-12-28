import React, { useEffect, useState } from "react";
import getColor from "../getColor";
import NotepadForm from "../NotepadForm";
import { useNotepadNotesContext } from "../NotepadNotesProvider";
import getSelectedColor from "./getSelectedColor";
import toTypeOption from "./toTypeOption";

const NotepadFormAdapter = () => {
    const [, addNote] = useNotepadNotesContext();
    const [colors, setColors] = useState([]);

    useEffect(() => {
        setColors(getColor);
    }, [colors]);

    const handleAdd = ( fields ) => {
        const { title, description, date, color , url} = fields;

        addNote({
            title,
            description,
            date,
            color: getSelectedColor(colors, color),
            url,
        });
    };

    return (
        <NotepadForm
            notepadColors={colors.map(toTypeOption)}
            onAdd={handleAdd}
        />
    );
};

export default NotepadFormAdapter;