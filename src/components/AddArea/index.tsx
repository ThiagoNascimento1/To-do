import * as C from './styles';

export const AddArea = () => {
    return (
        <C.Container>
            <div className="icon-add"><i className="fa-solid fa-plus"></i></div>
            <input 
                type="text"
                placeholder="Adicione uma tarefa"
            />
        </C.Container>
    )
}