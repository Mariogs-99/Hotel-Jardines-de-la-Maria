import { useEffect, useState } from "react";
// import { getAvailableRooms, getRoomImages } from "../../../room/services/roomServices";
// import { Room, RoomWithImage } from "../../../room/interfaces/roomInterfaces";
import { RoomWithImage } from "../../../room/interfaces/roomInterfaces";
import RoomCard from "../../components/roomCard";
import HeaderRoom from "../../components/headerRooms";
import { useReservation } from "../../../../context/reservationContext";
import example from "../../../../assets/example2.jpg"
import example3 from "../../../../assets/example3.jpeg"
import example4 from "../../../../assets/example4.jpg"
//!-----Habitaciones en el Room List

const rooms: RoomWithImage[] = [
    {
        "roomId": 1,
        "name": "Habitación Familiar",
        "maxCapacity": 4,
        "maxCamas": "2 camas Queen Sizes",
        "description": "Habitación familiar con una sala y una terraza",
        "price": 120.50, //!----Precio a definir
        "categoryRoom": {
            "categoryRoomId": 1,
            "nameCategory": "Familiar",
            "description": "Esta habitación cuenta con una sala y una terraza con vista de una de nuestras plazas icónicas. La arquitectura colonial de la habitación se complementa con un toque moderno"
        },
        "image": [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/281512923.jpg?k=9cc7425ca036c35acbda2d8c9bd010dc50e61bc11a39bf3571ecd6131ee5ae1a&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/362343800.jpg?k=712b9395d9e5137b3847cf7593f41840e99369c289ecce45d4fc17b25c09ca1b&o=&hp=1"
        ]
    },
    {
        "roomId": 2,
        "name": "Habitación Triple",
        "maxCapacity": 3,
        "maxCamas": "2 camas Queen Sizes",
        "description": "Habitación triple con 2 camas Queen Sizes",
        "price": 150.75, //!----Precio a definir
        "categoryRoom": {
            "categoryRoomId": 2,
            "nameCategory": "Triple",
            "description": "Habitación para 3 personas"
        },
        "image": [
            example
        ]
    },
    {
        "roomId": 3,
        "name": "Habitacion Matrimonial",
        "maxCapacity": 2,
        "maxCamas": "2 camas Queen Sizes",
        "description": "Habitación para parejas o viajeros que buscan una experiencia tranquila",
        "price": 300.00,
        "categoryRoom": {
            "categoryRoomId": 3,
            "nameCategory": "Habitación Matrimonial",
            "description": "Habitación de lujo con múltiples comodidades"
        },
        "image": [
            example3
        ]
    },
    {
        "roomId": 4,
        "name": "Habitación Individual",
        "maxCapacity": 1,
        "maxCamas": "1 cama Twin",
        "description": "Habitación para viajeros solitarios o viajes de negocios",
        "price": 150.00,
        "categoryRoom": {
            "categoryRoomId": 4,
            "nameCategory": "Habitación Individual",
            "description": "Habitación para personas solitarias y viajeros"
        },
        "image": [
            example4
        ]
    }
]

const RoomList = () => {
    const [roomList, setRoomList] = useState<RoomWithImage[]>([]);
    const { checkIn, checkOut, numberOfGuests, } = useReservation();

    useEffect(() => {
        fetchRoomsWithImages();
    }, [checkIn, checkOut, numberOfGuests]);

    const fetchRoomsWithImages = async () => {
        /* ----- Api connection ---------*/
        // try { 
        //     // 1. Obtener habitaciones
        //     const availableRooms:Room[] = await getAvailableRooms({
        //         initDate: checkIn,
        //         finishDate: checkOut,
        //         maxCapacity: numberOfGuests,
        //     });

        //     const roomsWithImages:RoomWithImage[] = await Promise.all(
        //         availableRooms.map(async (room) => {
        //             const imageUrl = await getRoomImages(room.roomId);
        //             return { ...room, image: imageUrl }; // Devuelve el objeto modificado
        //         })
        //     );
        //     console.log(roomsWithImages)
        //     setRoomList(roomsWithImages);

        // } catch (error) {
        //     console.error("Error fetching rooms or images:", error);
        // }
        /* ----------------------------- */

        setRoomList(rooms);
    };

    return (
        <div className="w-full flex flex-col gap-5">
            <HeaderRoom title="Seleccione la habitación" />
            <div className="flex flex-col gap-4 px-3 md:px-10">
                {roomList.map((room) => (
                    <>
                        <RoomCard key={room.roomId} room={room} />
                    </>
                ))}
            </div>
        </div>
    );
};

export default RoomList;
