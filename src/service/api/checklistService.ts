import { API } from "."
import { ChecklistRequestDTO } from "../DTO/request/ChecklistRequestDTO"
import { ChecklistResponseDTO } from "../DTO/response/ChecklistResponse";

export const getAllChecklist = async () => {
    try {
        const response = await API.get("/checklists")
        
        return response.data;
    } catch (error) {
        console.error("Error fetching checklist:", error)
        throw error
    }
}

export const getChecklistById = async (id: string) => {
    try {
        const response = await API.get(`/checklists/${id}`)
        
        if(response.status !== 200) {
            throw new Error("Failed to fetch /checklists")
        }
        return response.data
    } catch (error) {
        console.error("Error fetching /checklists:", error)
        throw error
    }
}

export const createChecklist = async (data: ChecklistRequestDTO) => {
    try {
        const response = await API.post<ChecklistResponseDTO>("/checklists", data)
        return response.data
    } catch (error) {
        console.error("Error creating checklist:", error)
        throw error
    }
}

export const updateChecklist = async (id: string, data: ChecklistRequestDTO) => {
    try {
        const response = await API.put<ChecklistResponseDTO>(`/checklists/${id}`, data)
        return response.data
    } catch (error) {
        console.error("Error updating checklist:", error)
        throw error
    }
}

export const deleteChecklist = async (id: string) => {
    try {
        const response = await API.delete(`/checklists/${id}`)
        return response.data
    } catch (error) {
        console.error("Error deleting checklist:", error)
        throw error
    }
}

