import React from "react";
import remove from '../image/remove.svg';
import save from '../image/download.svg';
import dayjs from 'dayjs';

const Note = ({item, handleDelete, handleSave}) => {

    return(
        <li
            style={(item.color) ? {
                color: item.color.code,
                border: `1px solid ${item.color.code}`,
                } : {}} 
            className="li mb16" 
            key={item.id}
        >
            <div className="row mb8">
                <h3 className="h3">{item.title}</h3>
                <div className="row">
                <img
                        onClick={() => handleSave(item)}
                        className="image mr10"
                        src={save}
                        alt="save"
                />    
                <img 
                        onClick={() => handleDelete(item.id)} 
                        className="image" 
                        src={remove} 
                        alt='remove'
                    />
                </div>
            </div>
            <p className="p mb16">{dayjs(item.date).format('DD.MM.YY')}</p>
            <p className="grey">{item.description}</p>
        </li>
    );
};

export default Note;