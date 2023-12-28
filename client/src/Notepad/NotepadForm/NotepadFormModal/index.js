const NotepadFormModal = {
    isValid: false,
    isLoading: true,
    fields: {
        title: {
            value: '',
        },
        description: {
            value: '',
        },
        date: {
            value: '',
        },
        color: {
            value: '',
            options: '',
        },
        url:{
            value: ''
        }
    },
};

export default NotepadFormModal;