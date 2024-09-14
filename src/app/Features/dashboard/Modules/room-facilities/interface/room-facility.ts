
export interface Column {
    field: string;
    header: string;
}


export interface Product {
    _id: string
    name: string
    createdBy: CreatedBy
    createdAt: string
    updatedAt: string
}

export interface CreatedBy {
    _id: string
    userName: string
}


export interface Room {
    _id: string
    name: string
    createdBy: string
    createdAt: string
    updatedAt: string
}


