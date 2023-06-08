import { ClearButton, FilterButton, FilterButtonContainer, FooterContainer, ItemsLeft } from "./ToDoFilters.components";
import '../../styles/ToDoFilters.css';

const ToDoFilters = () => {
    return (
        <>

            <FooterContainer>
                <ItemsLeft />

                <FilterButtonContainer>
                    <FilterButton action={() => { }} active='All' filter='All' />
                    {/* action se refiere a que funcion relizara. 
                    Falta definirlas aun */}

                    <FilterButton action={() => { }} active='All' filter='Active' />
                    <FilterButton action={() => { }} active='All' filter='Completed' />
                </FilterButtonContainer>

                <ClearButton />
            </FooterContainer>
        </>
    );
}
export default ToDoFilters;