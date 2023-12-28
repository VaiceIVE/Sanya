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
    const handleUrlChange = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;

        onFieldChange({ field: "url", value });
    };
    handleUrlChange
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
                    <p className="mb8 black">Заголовок</p>
                    <input
                        id="title"
                        aria-label="title"
                        role="textbox"
                        placeholder="текст"
                        className="input"
                        required
                        onChange={(e) => handleTitleChange(e)}
                    />
                </div>

                <div className="column mb16">
                    <div className="row mb8">
                        <p className="black">Дата</p>
                        <div>
                            {isLoading ? (<>123</>) : (<>
                                <select
                                    aria-label="color"
                                    className="select"
                                    id="color"
                                    value={selectedColor}
                                    onChange={(e) => handleColorChange(e)}
                                >
                                    <option>Белый</option>
                                    {color.options.map(({value, label}) => (
                                        <option
                                            aria-label={label}
                                            style={{color: value}} value={value} key={label}
                                        >
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
                        data-testid="date"
                        placeholder="дату"
                        className="input"
                        required
                        onChange={(e) => handleDateChange(e)}
                    />
                </div>
                <input
                        id="url"
                        aria-label="url"
                        role="textbox"
                        placeholder="текст"
                        className="input"
                        required
                        onChange={(e) => handleUrlChange(e)}
                    />
                <textarea 
                    className="textarea mb16 mr20"
                    aria-label="description"
                    role="textbox"
                    id="description"
                    placeholder="Текс баннера"
                    onChange={(e) => handleDescriptionChange(e)}
                >

                </textarea>

                <button role="button" aria-label="add" disabled={!isValid} className="button">Добавить запись</button>
            </form>
        </div>
    );
};

export default NotepadFormView;