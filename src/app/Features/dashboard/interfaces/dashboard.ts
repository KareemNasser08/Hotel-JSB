export interface Dashboard {
}


export interface Ichart {
    success: boolean;
    message: string;
    data: {
        ads: number;
        bookings: {
            completed: number;
            pending: number;
        };
        facilities: number;
        rooms: number;
        users: {
            admin: number;
            user: number;
        };
    };
}
