import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;

    input {
        flex: 1;
        font-size: 20px;
        background-color: transparent;
        color: #fff;
    }

    .icon-add {
        margin-right: 5px;
        padding: 2px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }
`;