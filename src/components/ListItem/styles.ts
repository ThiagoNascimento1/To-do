import styled from 'styled-components';

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(({ done }: ContainerProps) => (`
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    position: relative;

    input {
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }

    label {
        text-decoration: ${done ? 'line-through' : 'inicial'};
        font-size: 20px;
        color: #ccc;
    }

    .icon-delete {
        font-size: 16px;
        color: #fff;
        position: absolute;
        padding: 5px;
        cursor: pointer;
        right: 10px;
    }
`
));