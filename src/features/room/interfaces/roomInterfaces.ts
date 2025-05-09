export interface RoomAvailableRequest {
    initDate: string,
    finishDate: string,
    maxCapacity: number
}

export interface CategoryRoom {
    categoryRoomId: number;
    nameCategory: string;
    description: string;
}

export interface Room {
    roomId: number;
    name: string;
    maxCapacity: number;
    maxCamas: string;
    description: string;
    price: number;
    categoryRoom: CategoryRoom;
}

export interface RoomWithImage extends Room {
    image: any[]; // Si puede tener múltiples imágenes
  }