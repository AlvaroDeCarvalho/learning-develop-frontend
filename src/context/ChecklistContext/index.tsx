/* eslint-disable react-refresh/only-export-components */
 
import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useEffect } from "react";
import { ChecklistResponseDTO } from "../../service/DTO/response/ChecklistResponse";
interface registerContextProps {
  allChecklist: ChecklistResponseDTO[] 
  setAllChecklist: Dispatch<SetStateAction<ChecklistResponseDTO[] >>
  createNewChecklist: (data: ChecklistRequestDTO) => Promise<void>;
  editChecklist: (id: string, data: ChecklistRequestDTO) => Promise<void>;
  deleteChecklistNow: (id: string) => Promise<void>;
}

export const checklistContext = createContext({} as registerContextProps)

import { useState } from "react";
import { createChecklist, deleteChecklist, getAllChecklist, updateChecklist } from "../../service/api/checklistService";
import { ChecklistRequestDTO } from "../../service/DTO/request/ChecklistRequestDTO";

export const ChecklistProvider = ({ children }: { children: ReactNode }) => {
  const [allChecklist, setAllChecklist] = useState<ChecklistResponseDTO[]>([]);
    const reloadChecklist = useCallback(async () => {
        try {
          const response = await getAllChecklist();
            const responseOrdered = response.sort(
              (a: ChecklistResponseDTO, b: ChecklistResponseDTO) => a.atCreate > b.atCreate ? 1 : -1
            );
          setAllChecklist(responseOrdered); 
        } catch (error) {
          console.error("Erro ao carregar checklist:", error);
        }
      }, []);


      const createNewChecklist = useCallback(async (data: ChecklistRequestDTO) => {
        try {
          const response = await createChecklist(data);
          setAllChecklist((prev) => [...prev, response]);
          reloadChecklist();
        } catch (error) {
          console.error("Erro ao criar checklist:", error);
        }
      }, [reloadChecklist]);


      const editChecklist = useCallback(async (id: string, data: ChecklistRequestDTO) => {
        try {
          const response = await updateChecklist(id, data);
          setAllChecklist((prev) => [...prev.filter((item) => item.Id !== id), response]);
          reloadChecklist();
        } catch (error) {
          console.error("Erro ao atualizar checklist:", error);
        }
      }, [reloadChecklist]);

      const deleteChecklistNow = useCallback(async (id: string) => {
        try {
          await deleteChecklist(id);
          reloadChecklist(); 
        } catch (error) {
          console.error("Erro ao deletar checklist:", error);
        }
      }, [reloadChecklist]);
      

    useEffect(() => {
        reloadChecklist()
    }, [reloadChecklist, createNewChecklist])

    return (
        <checklistContext.Provider value={{ 
          allChecklist,
          setAllChecklist,
          createNewChecklist,
          editChecklist,
          deleteChecklistNow
          }}>
            {children}
        </checklistContext.Provider>
    );
};