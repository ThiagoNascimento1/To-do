// Styles
import * as C from './styles';

// Components
import { ListItem } from '../../components/ListItem';

// Hooks 
import { useState } from 'react';

// Types
import { Item } from '../../types/Item';

export const App = () => {

  const [ list, setList ] = useState<Item[]>([
    {id: 1, description: 'estudar', done: true},
    {id: 2, description: 'trabalhar', done: false},
    {id: 3, description: 'fazer a merenda', done: false}
  ]);

  return (
    <div className="container">
      <C.Container>
        <C.AreaApp>
          <C.Header>Lista de Tarefas</C.Header>

            {list.map((item, key) => (
              <ListItem item={item} key={key} />
            ))}

        </C.AreaApp>
      </C.Container>
    </div>
  )
}