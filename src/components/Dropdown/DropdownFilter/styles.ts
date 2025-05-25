import styled from "styled-components";

interface IDropdownContainer {
  disabled?: boolean;
}

export const DropdownContainer = styled.div<IDropdownContainer>`
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  gap: 0.5rem;
  margin-bottom: 1rem;
  width: 320px;
`;

export const StyledLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
`;

export const StyledSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
  background-color: #fff;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
