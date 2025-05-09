// src/data/roomsData.ts

import { RoomWithImage } from "../features/room/interfaces/roomInterfaces"; // Ajusta la ruta según tu estructura
import example from "../assets/example2.jpg";
import example3 from "../assets/example3.jpeg";
import example4 from "../assets/example4.jpg";



export const rooms: RoomWithImage[] = [
  {
    roomId: 1,
    name: "Habitación Familiar",
    maxCapacity: 4,
    maxCamas: "2 camas Queen Sizes",
    description: "Habitación familiar con sala y terraza",
    price: 120.50,
    categoryRoom: {
      categoryRoomId: 1,
      nameCategory: "Familiar",
      description: "Esta habitación cuenta con sala y terraza con vista."
    },
    image: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/281512923.jpg?k=9cc7425ca036c35acbda2d8c9bd010dc50e61bc11a39bf3571ecd6131ee5ae1a&o=&hp=1"
    ]
  },
  {
    roomId: 2,
    name: "Habitación Triple",
    maxCapacity: 3,
    maxCamas: "2 camas Queen Sizes",
    description: "Habitación triple con 2 camas Queen Sizes",
    price: 150.75,
    categoryRoom: {
      categoryRoomId: 2,
      nameCategory: "Triple",
      description: "Habitación para 3 personas."
    },
    image: [example]
  },
  {
    roomId: 3,
    name: "Habitación Matrimonial",
    maxCapacity: 2,
    maxCamas: "2 camas Queen Sizes",
    description: "Habitación para parejas o viajeros que buscan tranquilidad",
    price: 300.00,
    categoryRoom: {
      categoryRoomId: 3,
      nameCategory: "Matrimonial",
      description: "Habitación de lujo."
    },
    image: [example3]
  },
  {
    roomId: 4,
    name: "Habitación Individual",
    maxCapacity: 1,
    maxCamas: "1 cama Twin",
    description: "Habitación para viajeros solitarios o negocios",
    price: 150.00,
    categoryRoom: {
      categoryRoomId: 4,
      nameCategory: "Individual",
      description: "Habitación para personas solitarias y viajeros"
    },
    image: [example4]
  }
];
