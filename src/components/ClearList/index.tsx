import * as C from './styles';

type Props = {
    handleClearList: () => void;
}

export const ClearList = ({ handleClearList }: Props) => {

    return (
        <C.Container>
            <button onClick={handleClearList}>Limpar Lista</button>
        </C.Container>
    )
};