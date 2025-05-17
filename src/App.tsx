import {
  Container,
  Wrapper,
  Input,
  List,
  ListItem,
  ButtonEdit,
  ButtonDelete,
  ButtonAdd,
  ButtonContainer,
  InputContainer,
  ButtonEditCancel,
} from "./styles";

import useChecklist from "./hooks/useChecklist";
import { BiEdit, BiTrash, BiX } from "react-icons/bi";

function App() {
  const { allChecklist,isEditing , inputValue ,handleSubmit , handleEdit , handleDelete ,handleCancelEdit, setInputValue } = useChecklist();

  return (
    <Container>
      <Wrapper>
        <h1>Bem-vindo ao meu App!</h1>

        <InputContainer>
          <Input
            type="text"
            placeholder="Adicione um item..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
         <ButtonContainer>
         <ButtonAdd onClick={handleSubmit}>
            {isEditing ? "✓" : "+"}
          </ButtonAdd>
          {isEditing && (
            <ButtonEditCancel onClick={handleCancelEdit}>
              <BiX size={20} />
            </ButtonEditCancel>
          )}
         </ButtonContainer>
        </InputContainer>

        <List>
          {allChecklist && allChecklist.length > 0 ? (
            allChecklist.map((item) => (
              <ListItem key={item.Id}>
                <span>{item.message}</span>
                <ButtonContainer>
                  <ButtonEdit onClick={() => handleEdit(item)}><BiEdit size={20} /></ButtonEdit>
                  <ButtonDelete onClick={() => handleDelete(item)}><BiTrash size={20}/> </ButtonDelete>
                </ButtonContainer>
              </ListItem>
            ))
          ) : (
            <ListItem>
              <span>Nenhum item adicionado</span>
            </ListItem>
          )}
        </List>
      </Wrapper>
    </Container>
  );
}

export default App;
