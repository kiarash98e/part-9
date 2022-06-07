 interface IContacts {
    name:string,
    phone:string
}

 interface IData extends IContacts {
    id:number,
}

type ModalViwe = "add" | "edit" | "delete" | "viwe"


export type {IContacts,IData,ModalViwe}