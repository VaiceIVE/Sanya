import React, { useEffect, useReducer } from "react";
import initialModel from './NotepadFormModal';
import action from './NotepadFormModal/NotepadFormActions'
import View from './NotepadFormView';
import reducer from './NotepadFormModal/NotepadFormReducer';

const NotepadForm = ({ notepadColors, onAdd }) => {
    const [model, dispatch] = useReducer(reducer, initialModel);

    useEffect(() => {
        dispatch(action.setNotepadColor(notepadColors));
    }, [notepadColors]);

    const handleFieldChange = (change) => {
        dispatch(action.changeField(change));
    };

    const handleAdd = () => {
        const {
            fields: { title, description, date, color },
        } = model;

        onAdd({ title: title.value, description: description.value, date: date.value, color: color.value});
    };

    return (
        <View
            model={model}
            onFieldChange={handleFieldChange}
            onAdd={handleAdd}
        />
    );
};

export default NotepadForm;