/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, useEffect } from "react";
import { getAllChecklist, createChecklist, updateChecklist, deleteChecklist, getFilterChecklist } from "../service/api/checklistService";
import { ChecklistRequestDTO } from "../service/DTO/request/ChecklistRequestDTO";
import { ChecklistResponseDTO } from "../service/DTO/response/ChecklistResponse";
import { generatePeriod } from "../utils/getYearFilter";
import { useFilterChecklist } from "./useFilterChecklist";
import { PageResponseDTO } from "../service/DTO/response/PageResponseDTO";
import { FilterChecklist } from "../service/DTO/request/FilterChecklist";

 const useChecklist = () => {
  const [inputValue, setInputValue] = useState("");
  const [checklistBeingEdited, setChecklistBeingEdited] = useState<ChecklistResponseDTO | null>(null);
  const [allChecklist, setAllChecklist] = useState<ChecklistResponseDTO[]>([]);

  const [pagination, setPagination] = useState<PageResponseDTO<ChecklistResponseDTO>>({
    content: [],
    pageable: {
      pageNumber: 0,
      pageSize: 0,
    },
    totalElements: 0,
    totalPages: 0,
    first: false,
    last: true,
  });

  const [params, setParams] = useState<{ page: number; size: number }>({
    page: 0,
    size: 5,
  });

  const {
    isMesFinalDisabled,
    isMesInicialDisabled,
    control,
    errors,
    anoFinal,
    anoInicial,
    handleSubmit,
  } = useFilterChecklist();

  const isEditing = checklistBeingEdited !== null;

  const reloadChecklist = useCallback(async () => {
      try {
        const response = await getAllChecklist({...params });
        setPagination(response);
      } catch (error) {
        console.error("Erro ao carregar checklist:", error);
      }
}, [params]); 
  
  useEffect(() => {
  reloadChecklist();
  }, [reloadChecklist]);

  const getFilterCecklist = useCallback( async (data: FilterChecklist) => {
    try {
      const response = await getFilterChecklist({
        page: 0,
        size: 5,
        sort: "at_create,desc",
        ...data,
      });
      setPagination(response);
    } catch (error) {
      console.error("Erro ao filtrar checklist:", error);
    }
  }, [])

  const createNewChecklist = useCallback(async (data: ChecklistRequestDTO) => {
    try {
      const response = await createChecklist(data);
      setAllChecklist((prev) => [...prev, response]);
    } catch (error) {
      console.error("Erro ao criar checklist:", error);
    }
  }, []);

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

  const onSubmit = (data: any) => {
    const dataInicial = `${data.mesInicial}/${data.anoInicial}`;
    const dataFinal = `${data.mesFinal}/${data.anoFinal}`;

    const period = generatePeriod(dataInicial, dataFinal);

    getFilterCecklist(period)
  };

  const handleAction = handleSubmit(onSubmit);

  const handleCancelEdit = () => {
    setInputValue("");
    setChecklistBeingEdited(null);
  };

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

    handleCancelEdit();
  };

  const handleEdit = (item: ChecklistResponseDTO) => {
    setChecklistBeingEdited(item);
    setInputValue(item.message);
  };

  const handleDelete = async (item: ChecklistResponseDTO) => {
    await deleteChecklistNow(item.Id);
  };

  useEffect(() => {
    reloadChecklist();
  }, [reloadChecklist]);

  return {
    inputValue,
    pagination,
    allChecklist,
    checklistBeingEdited,
    isEditing,
    params,
    control,
    errors,
    isMesFinalDisabled,
    isMesInicialDisabled,
    anoFinal,
    anoInicial,
    setInputValue,
    setParams,
    handleSubmitForm,
    handleEdit,
    handleDelete,
    handleCancelEdit,
    handleAction,
    getFilterCecklist
  };
};


export default useChecklist