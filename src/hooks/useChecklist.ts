import { useContext, useState } from "react";
import { ChecklistRequestDTO } from "../service/DTO/request/ChecklistRequestDTO";
import { ChecklistResponseDTO } from "../service/DTO/response/ChecklistResponse";
import { checklistContext } from "../context/ChecklistContext";
import { useFilterChecklist } from "./useFilterChecklist";
import { generatePeriod } from "../utils/getYearFilter";

interface IPeriod {
  dataInicial: string | Date;
  dataFinal: string | Date;
}
 const useChecklist = () => {
 const [inputValue, setInputValue] = useState("");
 const [checklistBeingEdited, setChecklistBeingEdited] = useState<ChecklistResponseDTO | null>(null);
  const {
        allChecklist,
        createNewChecklist,
        deleteChecklistNow,
        editChecklist,
         setAllChecklist
        } = useContext(checklistContext)


        
const {
      control,
      errors,
      handleSubmit ,
      isMesFinalDisabled,
      isMesInicialDisabled,
      anoFinal,
      anoInicial,
     } = useFilterChecklist()


const isEditing = checklistBeingEdited !== null;
const [periodo, setPeriodo] = useState<IPeriod>()


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = (data: any) => {
  const dataInicial = `${data.mesInicial}/${data.anoInicial}`;
  const dataFinal = `${data.mesFinal}/${data.anoFinal}`;

  setPeriodo(generatePeriod(dataInicial, dataFinal));
  console.log("Form data:", data);
}
const handleAction = handleSubmit(onSubmit);

const handleSubmitForm = async () => {
    if (inputValue.trim() === "") return;
  
    const newItem: ChecklistRequestDTO = {
      message: inputValue,
    };
  
    if (isEditing && checklistBeingEdited?.Id) {
      await editChecklist(checklistBeingEdited.Id, newItem); 
    } else {
      await createNewChecklist(newItem);
    }
  
    handleCancelEdit()
  };
  

  const handleCancelEdit = () => {
    setInputValue("");
    setChecklistBeingEdited(null);
  }

  const handleEdit = (item: ChecklistResponseDTO) => {
    setChecklistBeingEdited(item);
    setInputValue(item.message);   
  };

  const handleDelete = async (item: ChecklistResponseDTO) => {
    console.log("Item para deletar:", item);
    await deleteChecklistNow(item.Id);
  };

  return {
    inputValue,
    allChecklist,
    isEditing,
    checklistBeingEdited,
    control,
    periodo,
    errors,
    setInputValue,
    createNewChecklist,
    deleteChecklistNow,
    editChecklist,
    setAllChecklist,
    handleSubmitForm,
    handleAction,
    handleEdit,
    handleDelete,
    handleCancelEdit,
    isMesFinalDisabled,
    isMesInicialDisabled,
    anoFinal,
    anoInicial,
  }
}

export default useChecklist