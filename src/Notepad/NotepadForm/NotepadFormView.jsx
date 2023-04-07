import React, { useState } from "react";

const NotepadFormView = (props) => {

    const {
        model: {
            isValid,
            isLoading,
            fields: { color },
        },
        onFieldChange,
        onAdd,
    } = props;

    const [selectedColor, setSelectedColor] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        onAdd();
    };

    const handleTitleChange = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;

        onFieldChange({ field: "title", value });
    };

    const handleDescriptionChange = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;

        onFieldChange({ field: "description", value });
    };

    const handleDateChange = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;

        onFieldChange({ field: "date", value });
    };

    const handleColorChange = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;

        setSelectedColor(value);

        onFieldChange({ field: "color", value });
    };

    return (
        <div>
            <form onSubmit={handleAdd} noValidate autoComplete="off">
                
                <div className="column mb16">
                    <p className="mb8 black">Заголовок записи</p>
                    <input
                        id="title"
                        placeholder="Введите текст"
                        className="input"
                        required
                        onChange={(e) => handleTitleChange(e)}
                    />
                </div>

                <div className="column mb16">
                    <div className="row mb8">
                        <p className="black">Дата записи</p>
                        <div>
                            {isLoading ? (<>123</>) : (<>
                                <select
                                    className="select"
                                    id="color"
                                    value={selectedColor}
                                    onChange={(e) => handleColorChange(e)}
                                >
                                    <option>Белый</option>
                                    {color.options.map(({ value, label}) => (
                                        <option style={{ color: value}} key={value} value={value}>
                                            {label}
                                        </option>
                                    ))}
                                </select>
                            </>)}
                        </div>
                    </div>
                    <input
                        id="date"
                        type="date"
                        placeholder="Введите дату"
                        className="input"
                        required
                        onChange={(e) => handleDateChange(e)}
                    />
                </div>

                <textarea 
                    className="textarea mb16 mr20"
                    id="description"
                    placeholder="Введите свою запись тут..."
                    onChange={(e) => handleDescriptionChange(e)}
                >

                </textarea>

                <button disabled={!isValid} className="button">Добавить запись</button>
            </form>
        </div>
    );
};

export default NotepadFormView;