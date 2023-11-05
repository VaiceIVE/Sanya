import actionTypes from './NotepadFormActionTypes';

const setNotepadColor = (notepadColor) => ({
    type: actionTypes.SET_NOTEPAD_COLOR,
    payload: { notepadColor },
});

const changeField = (change) => ({
    type: actionTypes.CHANGE_FIELD,
    payload: change,
});

const NotepadFormActions = {
    setNotepadColor,
    changeField,
};

export default NotepadFormActions;