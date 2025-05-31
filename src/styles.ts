import styled from "styled-components";

export const Container = styled.div`
    width: 99vw;
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

export const List = styled.div`
    list-style: none;
    padding-top: 10rem;
    width: 100%;
`;

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

export const FilterContainer = styled.div`
    width: 100%;    
    display: flex;
    flex: 1 1 25%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    gap: 12px;

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 10px;
    }

`;

export const FilterButtonContainer = styled.div`
    width: 40%;
    
    display: flex;
    align-items: start;
    justify-content: start;
    margin-top: 10px;
    gap: 10px;
    flex-direction: row;

`

export const FilterButton = styled.button`
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 1rem;
    width: 100%;
    cursor: pointer;
    color: white;
    font-size: 1.25rem;
    background-color: #007BFF;

`;

export const MessageError = styled.h4`
    width: 100%;
    text-align: start;
    color: red;
    font-size: 0.8rem;
    margin-top: 10px;
    margin-bottom: 0;
`