import styled from 'styled-components';

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(({ done }: ContainerProps) => (`
    display: flex;
    align-items: center;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        text-decoration: ${done ? 'line-through' : 'inicial'};
        color: #ccc;
    }
`
));