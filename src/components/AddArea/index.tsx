import * as C from './styles';

// Hooks
import { useState, KeyboardEvent } from 'react';

type Props = {
    addItem: (descriptionItem: string) => void;
}

export const AddArea = ({ addItem }: Props) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleKeyUp = () => {
        if (inputValue != '') {
            addItem(inputValue);
            setInputValue('');
        }
    };

    return (
        <C.Container>
            <input 
                type="text"
                placeholder="Adicione uma tarefa"
                spellCheck="false"
                autoComplete="false"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyUp={(e: KeyboardEvent) => e.code === 'Enter' && handleKeyUp()}
            />
            <div className="icon-add" onClick={handleKeyUp}><i className="fa-solid fa-plus"></i></div>
            
        </C.Container>
    )
}