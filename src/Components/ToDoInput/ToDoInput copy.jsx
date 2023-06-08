import { useState } from 'react';
import '../../styles/ToDoInput.css';

export const ToDoInput = ({ addToDo }) => {
    const [toDoContent, setToDoContent] = useState('');

    const handleToDoInput = (e) => {
        const value = e.target.value;
        setToDoContent(value);
    };

    const handleToDoEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addToDo(toDoContent);
            setToDoContent('');
        }
    };

    return (
        <form className="form" id="formInput">
            <
                <label htmlFor="toDo" className="form__control">
                    <button
                        className="form__btn"
                        type="submit"
                        id="form-btn" />
                    <input
                        type="text"
                        id="toDo"
                        placeholder="Create a new todo..."
                        className="form__text"
                        value={toDoContent}
                        onChange={handleToDoInput}
                        onKeyDown={handleToDoEnter}
                    />
                </label>
        </form>
    );
};
