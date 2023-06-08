import ToDoFilters from "../ToDoFilters/ToDoFilters";
import ToDo from "../ToDo/ToDo";
import "../../styles/ToDoList.css";


export const ToDoList = ({ tasks, theme }) => {
    return (
        <>
            <div className={`list__container ${theme}`}>
                {tasks.map(todos => {
                    // Devuelve cada una de las tareas y las muestra en pantalla
                    return (
                        <ToDo
                            key={todos.id}
                            text={todos.content}
                            theme={theme}
                        />
                    )
                })}
                <ToDoFilters theme={theme} />
            </div>
        </>

    );
};