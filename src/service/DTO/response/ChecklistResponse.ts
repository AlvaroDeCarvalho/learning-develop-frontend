export class ChecklistResponseDTO {
    Id: string
    message: string
    atCreate: Date
    atUpdate: Date
    atDelete: Date
    constructor(id: string, message: string,  atCreate: Date, atUpdate: Date, atDelete: Date) {
        this.message = message	
        this.Id = id
        this.atCreate = atCreate
        this.atUpdate = atUpdate
        this.atDelete = atDelete
    }
}