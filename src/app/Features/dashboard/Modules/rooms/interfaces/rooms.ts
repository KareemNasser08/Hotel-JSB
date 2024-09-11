export interface Root {
    success: boolean
    message: string
    data: IData
}

export interface IData {
    room: IRoom
}

export interface IRoom {
    _id: string
    roomNumber: string
    price: number
    capacity: number
    discount: number
    facilities: Facility[]
    createdBy: CreatedBy
    images: any[]
    createdAt: string
    updatedAt: string
}

export interface Facility {
    _id: string
    name: string
}

export interface CreatedBy {
    _id: string
    userName: string
}