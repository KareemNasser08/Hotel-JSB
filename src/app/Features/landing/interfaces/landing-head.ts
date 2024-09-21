export interface Root {
    success: boolean
    message: string
    data: Data
}

export interface Data {
    rooms: IRoom[]
    totalCount: number
}

export interface IRoom {
    _id: string
    roomNumber: string
    price: number
    capacity: number
    discount: number
    facilities: any[]
    createdBy: CreatedBy
    images: string[]
    createdAt: string
    updatedAt: string
}

export interface CreatedBy {
    _id: string
    userName: string
}
