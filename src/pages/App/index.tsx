// Styles
import * as C from './styles';

// Components
import { ListItem } from '../../components/ListItem';
import { AddArea } from '../../components/AddArea';

// Hooks 
import { useState } from 'react';

// Types
import { Item } from '../../types/Item';

export const App = () => {

  const [ list, setList ] = useState<Item[]>([]);

  // alterando valor done
  const handleChecked = (item: Item, isChecked: boolean) => {
    item.done = isChecked;
    return item;
  };

  // adicionado novos item a lista
  const handleAddItem = (descriptionItem: string) => {
    const newItem = {
      id: list.length + 1,
      description: descriptionItem,
      done: false
    }

    setList(prevState => [...prevState, newItem]);
  };

  return (
    <div className="container">
      <C.Container>
        <C.AreaApp>
          <C.Header>Lista de Tarefas</C.Header>

            <AddArea addItem={handleAddItem}/>

            {list.map((item, key) => (
              <ListItem item={item} handleChecked={handleChecked} key={key} />
            ))}

        </C.AreaApp>
      </C.Container>
    </div>
  )
}