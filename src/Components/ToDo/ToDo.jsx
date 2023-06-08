import React, { useState } from "react";
import { RxCross1 } from 'react-icons/Rx'

const ToDo = ({ text, theme }) => {
    const [showIcon, setShowIcon] = useState(false);

    const handleMouseEnter = () => {
        setShowIcon(true);
    };

    const handleMouseLeave = () => {
        setShowIcon(false);
    };

    return (
        <div
            className="list__ToDo_container"
            id={theme}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* estilos: active, completed */}

            <div className="list__ToDo_content">
                <input type="checkbox" name="checkbox" />
                {/* <span className="checkmark"></span> */}

                <p className="list__ToDo_text">{text}</p>
            </div>

            {(showIcon) && (
                <button className="button-mark">
                    <RxCross1 />
                </button>
            )}
        </div>
    );
};

export default ToDo;
