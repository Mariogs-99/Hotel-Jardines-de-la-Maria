export interface CategoryRoom {
  categoryRoomId: number;
  nameCategoryEs: string;
  descriptionEs: string;
  bedInfo?: string;
  roomSize?: string;
  hasTv?: boolean;
  hasAc?: boolean;
  hasPrivateBathroom?: boolean;
}

export interface Room {
  roomId: number;
  name: string;
  maxCapacity: number;
  description: string;
  price: number;
  sizeBed: string;
  quantity: number;
  imageUrl: string;
  categoryRoom: CategoryRoom;
}

export interface RoomAvailableRequest {
  initDate: string;
  finishDate: string;
  maxCapacity: number;
}