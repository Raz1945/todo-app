import { useState } from 'react';
import { AddToDoContainer, AddToDoLabel } from './ToDoInput.components';
import '../../styles/ToDoInput.css';

export const ToDoInput = ({ addToDo, theme }) => {
    const [toDoContent, setToDoContent] = useState('');

    const handleToDoInput = (e) => {
        const value = e.target.value;
        setToDoContent(value);
    };

    const handleToDoEnter = (e) => {
        if (e.key === 'Enter') {
            addToDo(toDoContent);
            setToDoContent('');
        }
    };

    return (
        <div className={`addToDo`}>
            <AddToDoContainer theme={theme}>
                <AddToDoLabel
                    value={toDoContent}
                    onChange={handleToDoInput}
                    onKeyDown={handleToDoEnter}
                />
            </AddToDoContainer>
        </div>
    );
};
