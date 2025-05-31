import styled from "styled-components";

interface IDropdownContainer {
  disabled?: boolean;
}

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  width: 320px;
`;

export const StyledLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
`;

export const StyledSelect = styled.select<IDropdownContainer>`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
  background-color: #fff;
  transition: border-color 0.2s ease;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};


  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
