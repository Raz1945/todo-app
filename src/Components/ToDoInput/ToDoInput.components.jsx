export const AddToDoContainer = ({ children, theme }) => {
    return (
        <div className={`addToDo__container ${theme}`} >
            {children}
        </div>
    );
};

export const AddToDoLabel = ({ value, onChange, onKeyDown }) => {
    return (
        //  Proporciona una etiqueta y un campo de entrada para que los usuarios agreguen nuevas tarea 
        <label htmlFor="addToDo" className="addToDo__control">
            <input type="checkbox" disabled />
            <input
                type="text"
                id="addToDo"
                placeholder="Create a new todo..."
                className="addToDo__text"
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </label >
    );
};