// Styles
import * as C from './styles';

// Hooks
import { useState } from 'react';

// Types
import { Item } from '../../types/Item';

type Props = {
    item: Item;
}

export const ListItem = ({item}: Props) => {

    const [ isChecked, setIsChecked ] = useState(item.done);

    return (
        <C.Container done={isChecked}>   
            <input type="checkbox" onChange={e => setIsChecked(e.target.checked)} checked={isChecked}/>
            <label>{item.description}</label>
        </C.Container>
    )
}