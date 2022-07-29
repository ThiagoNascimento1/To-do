// Styles
import * as C from './styles';

// Hooks
import { useState } from 'react';

// Types
import { Item } from '../../types/Item';

type Props = {
    item: Item;
    handleChecked: (item: Item, isChecked: boolean) => Item;
    handleRemoveItem: (item: Item) => void;
}

export const ListItem = ({item, handleChecked, handleRemoveItem}: Props) => {

    const [ isChecked, setIsChecked ] = useState(item.done);
    const newItem = handleChecked(item, isChecked);

    return (
        <C.Container done={isChecked}>   
            <input
                type="checkbox"
                onChange={e => setIsChecked(e.target.checked)}
                checked={isChecked}
            />
            <label>{newItem.description}</label>
            <div className="icon-delete" onClick={ () => handleRemoveItem(item)}>
                <i className="fa-solid fa-trash"></i>
            </div>
        </C.Container>
    )
}