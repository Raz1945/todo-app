export const FooterContainer = ({ children, theme }) => {
    return (
        <>
            <div className={`footer__container ${theme}`}>
                {children}
            </div>
        </>
    );
};

// Tengo que vincular con el useState -> toDos.length para obtener el valor a mostar, cantidad de tareas 
export const ItemsLeft = ({ counter = 0 }) => {
    return (
        <>
            <div className="item_left__container">
                <p className="filters__item_left">
                    {counter} items left
                </p>
            </div>
        </>
    );
};

export const FilterButtonContainer = ({ children }) => {
    return (
        <>
            <div className="filters__container">
                {children}
            </div>
        </>
    );
};

export const FilterButton = ({ action, active, filter }) => {
    return (
        <>
            <button
                // className={`btn-filter` + (active.includes(filter) ? 'text-active' : 'text')}
                className="filter__button text"
            >
                {filter}
            </button>
        </>
    );
};

export const ClearButton = () => {
    return (
        <>
            <div className="clear__container">

                <button
                    className="clear__button"
                >
                    Clear Completed
                </button>
            </div>
        </>
    );
};
