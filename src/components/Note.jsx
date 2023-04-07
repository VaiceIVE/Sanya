import React from "react";
import remove from '../image/remove.svg';

const Note = ({item, handleDelete}) => {

    return(
        <li
            style={(item.color) ? {
                color: item.color.code,
                } : {}} 
            className="li mb16" 
            key={item.id}
        >
            <div className="row mb8">
                <h3 className="h3">{item.title}</h3>
                <img 
                    onClick={() => handleDelete(item.title)} 
                    className="image" 
                    src={remove} 
                    alt='renove'
                />
            </div>
            <p className="p mb16">{item.date}</p>
            <p className="grey">{item.description}</p>
        </li>
    );
};

export default Note;