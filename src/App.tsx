/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Container,
  Wrapper,
  Input,
  List,
  ButtonEdit,
  ButtonDelete,
  ButtonAdd,
  ButtonContainer,
  InputContainer,
  ButtonEditCancel,
  FilterContainer,
  FilterButton,
  FilterButtonContainer,
  MessageError,
} from "./styles";

import useChecklist from "./hooks/useChecklist";
import { BiEdit, BiTrash, BiX } from "react-icons/bi";
import Dropdown from "./components/Dropdown";
import {getLastFiveYearsAGo, getMonthOptions} from './utils/getYearFilter'
import { formatDate } from "./utils/formatDate";
import { ChecklistResponseDTO } from "./service/DTO/response/ChecklistResponse";
import { ColumnProps, Table } from "./components/Table";
function App() {
  const { 
        isEditing,
        inputValue,
        control,
        pagination,
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
        setParams,
        setInputValue } = useChecklist();

 const columns: ColumnProps<ChecklistResponseDTO>[] = [
    {
      key: "message",
      title: "Mensagem",
      render: (item) => item.message
    },
    {
      key: "createdAt",
      title: "Criado em",
      render: (item) => <>{formatDate(item.atCreate)}</>
    },
    {
      key: "updatedAt",
      title: "Atualizado em",
      render: (item) => <>{formatDate(item.atUpdate)}</>
    },
    {
      key: "actions",
      title: "Ações",
      render: (item) => (
        <ButtonContainer>
          <ButtonEdit onClick={() => handleEdit(item)}><BiEdit size={20}/></ButtonEdit>
          <ButtonDelete onClick={() => handleDelete(item)}><BiTrash size={20}/></ButtonDelete>
        </ButtonContainer>
      )
    }
  ];

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
              {
                Object.keys(errors).length > 0 && (
                  Object.values(errors).map((error) => (
                    <MessageError key={error.message}>
                      {error.message}
                    </MessageError>
                  ))
                )
              }
              <FilterButtonContainer>
                <FilterButton onClick={handleAction} >Filtrar</FilterButton>
              </FilterButtonContainer>
          </FilterContainer>
        <List>
              <Table
                data={pagination.content}
                columns={columns}
                currentPage={pagination.pageable.pageNumber + 1 }
                totalPages={pagination.totalPages}	
                onPageChange={(newPage) => setParams((prev) =>
                   ({ ...prev,
                    page: newPage - 1 ,
                    size: prev.size }))}
              /> 
        </List>
      </Wrapper>
    </Container>
  );
}

export default App;
