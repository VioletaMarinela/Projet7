import React, { useState } from 'react';

import flechehaut from "@/assets/Img/CollapseFlecheHaut.png";
import flechebas from "@/assets/Img/CollapseFlecheBas.png";

import "@/assets/Css/Components/dropwdown.css";

const Dropdown = ({ title, description }) => {

    const [open, setopen] = useState(false);

    const handlerDropdown = () => {
        setopen(!open);
    }

    return (
        <li className="Collapse-Container">
            <div className='Collapse-header' onClick={handlerDropdown}>
                <h2>{title}</h2>
                <span>
                    <img
                        src={open ? flechehaut : flechebas}
                        alt="flechesClick"
                        className={open ? 'rotate' : ''}
                    />
                </span>
            </div>
            {
                open && (
                    <div className='Collapse-description'>
                        {description}
                    </div>
                )
            }
        </li>
    );
};

export default Dropdown;