/* eslint-disable @typescript-eslint/no-explicit-any */
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
  FilterContainer,
  FilterButton,
} from "./styles";

import useChecklist from "./hooks/useChecklist";
import { BiEdit, BiTrash, BiX } from "react-icons/bi";
import Dropdown from "./components/Dropdown";
import {getLastFiveYearsAGo, getMonthOptions} from './utils/getYearFilter'
import { useEffect } from "react";
function App() {
  const { 
        allChecklist,
        isEditing,
        inputValue,
        control,
        periodo,
        errors,
        isMesFinalDisabled,
        isMesInicialDisabled,
        anoFinal,
        anoInicial,
        handleAction,
        handleSubmitForm,
        handleEdit,
        handleDelete,
        handleCancelEdit,
        setInputValue } = useChecklist();

useEffect(() => {
    console.log("periodo:", periodo);
    console.log("Errors:", errors); 
}, [errors, periodo]);

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
         <ButtonAdd onClick={handleSubmitForm}>
            {isEditing ? "✓" : "+"}
          </ButtonAdd>
          {isEditing && (
            <ButtonEditCancel onClick={handleCancelEdit}>
              <BiX size={20} />
            </ButtonEditCancel>
          )}
         </ButtonContainer>
        </InputContainer>
          <FilterContainer>
              <div className="row">
                  <Dropdown.DropdownFilter 
                  control={control as unknown as any}
                  name="anoInicial"
                  options={getLastFiveYearsAGo()} 
                  label="Ano Inicial"  />
                  
                  <Dropdown.DropdownFilter 
                  control={control as unknown as any}
                  name="mesInicial"
                  options={getMonthOptions(anoInicial)} 
                  disabled = {isMesInicialDisabled}
                  label="mes Inicial"  />
              </div>
              
              <div className="row">
                  <Dropdown.DropdownFilter 
                  control={control as unknown as any}
                  name="anoFinal"
                  options={getLastFiveYearsAGo()} 
                  label="ano final"  />

                  <Dropdown.DropdownFilter 
                  control={control as unknown as any}
                  name="mesFinal"
                  disabled = {isMesFinalDisabled}
                  options={getMonthOptions(anoFinal)} 
                  label="mes final"  />
                  
              </div>
              <FilterButton onClick={() => handleAction()} >Filtrar</FilterButton>
          </FilterContainer>
        <List>
          {allChecklist && allChecklist.length > 0 ? (
            allChecklist.map((item) => (
              <ListItem key={item.Id}>
                <span>{item.message}</span>
                <ButtonContainer>
                  <ButtonEdit onClick={() => handleEdit(item)}><BiEdit size={20}/></ButtonEdit>
                  <ButtonDelete onClick={() => handleDelete(item)}><BiTrash size={20}/></ButtonDelete>
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
