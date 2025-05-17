import { useContext, useState } from "react";
import { ChecklistRequestDTO } from "../service/DTO/request/ChecklistRequestDTO";
import { ChecklistResponseDTO } from "../service/DTO/response/ChecklistResponse";
import { checklistContext } from "../context/ChecklistContext";

 const useChecklist = () => {
 const [inputValue, setInputValue] = useState("");
 const [checklistBeingEdited, setChecklistBeingEdited] = useState<ChecklistResponseDTO | null>(null);
  const {
        allChecklist,
        checklist,
        setChecklist, 
        createNewChecklist,
        deleteChecklistNow,
        editChecklist,
         setAllChecklist
        } = useContext(checklistContext)

 const isEditing = checklistBeingEdited !== null;

const handleSubmit = async () => {
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
    checklist,
    isEditing,
    checklistBeingEdited,
    setInputValue,
    setChecklist, 
    createNewChecklist,
    deleteChecklistNow,
    editChecklist,
    setAllChecklist,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleCancelEdit
  }
}

export default useChecklist