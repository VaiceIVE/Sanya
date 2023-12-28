import React, { useEffect, useState } from "react";
import remove from '../image/remove.svg';
import save from '../image/download.svg';
import dayjs from 'dayjs';
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom" 

const Note = ({item, handleDelete, handleSave}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [click, setClick] = useState(item.click_count)
    const handleButtonClick = () => {
        setClick(perv => perv+1)
        axios.put(`http://localhost:8080/api/note/${item.id}`,{click_count:click+1})
            .then(() => window.location.replace(item.url, '_blank'))
        
    }


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
                <div className="column">
                    <h3 className="h3 mb8">{item.title}</h3>
                    <h3 className="h3 mb8">URL: {item.url}</h3>
                </div>
                <div className="row">
                    {
                        handleDelete && handleSave ? ( <>
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
                        /></>): <></>
                    }
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <p className="p mb16">{dayjs(item.date).format('DD.MM.YY')}</p>
                    <p className="grey mb16">{item.description}</p>
                    {location.pathname === "/admin"?
                    (<>
                        <p className="grey mb8">Количество просмотров: {item.count || 0}</p>
                        <p className="grey mb8">Количество кликов на баннер: {click || 0}</p>
                    </>):
                    <button onClick={handleButtonClick}>Click me</button>}
                </div>
            </div>
        </li>
    );
};

export default Note;