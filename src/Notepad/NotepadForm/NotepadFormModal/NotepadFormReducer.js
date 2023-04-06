import actionTypes from './NotepadFormActionTypes';

const isNotepadFormModelValid = (model) => {
    const {
        fields: { title, description, date, color },
    } = model;

    return !!(title.value && color.value);
};

const withValidation = (state, field, value) => {
    const changedState = {
        ...state,
        fields: {
            ...state.fields,
            [field]: {
                ...state.fields[field],
                value,
            },
        }
    };

    return {
        ...changedState,
        isValid: isNotepadFormModelValid(changedState),
    };
};

const NotepadFormReducer = (state, action) => {
    const { type, payload } = action;
    
    switch (type) {
        case actionTypes.SET_NOTEPAD_COLOR:
            return {
                ...state,
                isLoading: payload.notepadColor.length === 0, 
                fields: {
                    ...state.fields,
                    color: {
                        ...state.fields.color,
                        options: payload.notepadColor,
                    },
                },
            };

        case actionTypes.CHANGE_FIELD:
            return withValidation(state, payload.field, payload.value);

        default:
            return state;
    };
};

export default NotepadFormReducer;
