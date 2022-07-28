import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;

    .icon-add {
        margin-right: 5px;
    }

    input {
        flex: 1;
        font-size: 20px;
        background-color: transparent;
        color: #fff;
    }
`;