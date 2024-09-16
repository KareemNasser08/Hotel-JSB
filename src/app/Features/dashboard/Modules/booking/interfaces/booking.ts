export interface Root {
    success: boolean
    message: string
    data: Data
}

export interface Data {
    booking: Booking[]
    totalCount: number
}

export interface Booking {
    _id: string
    startDate: string
    endDate: string
    totalPrice: number
    user: User
    room: Room
    status: string
    createdAt: string
    updatedAt: string
    stripeChargeId?: string
}

export interface User {
    _id: string
    userName: string
}

export interface Room {
    _id: string
    roomNumber: string
}
