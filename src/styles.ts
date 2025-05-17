import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    h1 {

    }
`

export const Wrapper = styled.div`
    width: 1280px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 1280px) {
        width: 85%;
        max-width: 1280px;
    }
`;
export const InputContainer = styled.div`
    display: flex;
    margin: 20px 0;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
export const Input = styled.input`
    width: 300px;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-right: 10px;

    &:focus {
        outline: none;
        border-color: #007BFF;
    }
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;

`

export const ButtonAdd = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: green;
    font-size: 20px;
    color: white;
    border: none;
    border-radius: 5px;
    width: 50px;
    height: 40px;
    cursor: pointer;
`

export const ButtonEditCancel = styled(ButtonAdd)`
    background-color: red;
    margin-left: 10px;
`;


export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonEdit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #0056b3;
    color: white;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
`

export const ButtonDelete = styled(ButtonEdit)`
    background-color: red;
    margin-left: 15px;

`
