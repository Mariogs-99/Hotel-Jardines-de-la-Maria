import { useEffect, useState } from "react";
// import { getAvailableRooms, getRoomImages } from "../../../room/services/roomServices";
// import { Room, RoomWithImage } from "../../../room/interfaces/roomInterfaces";
import { RoomWithImage } from "../../../room/interfaces/roomInterfaces";
import RoomCard from "../../components/roomCard";
import HeaderRoom from "../../components/headerRooms";
import { useReservation } from "../../../../context/reservationContext";

const rooms: RoomWithImage[] = [
    {
        "roomId": 1,
        "name": "Habitación 101",
        "maxCapacity": 1,
        "description": "Habitación individual",
        "price": 120.50,
        "categoryRoom": {
            "categoryRoomId": 1,
            "nameCategory": "Individual",
            "description": "Habitación para una persona"
        },
        "image": [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/281512923.jpg?k=9cc7425ca036c35acbda2d8c9bd010dc50e61bc11a39bf3571ecd6131ee5ae1a&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/362343800.jpg?k=712b9395d9e5137b3847cf7593f41840e99369c289ecce45d4fc17b25c09ca1b&o=&hp=1"
        ]
    },
    {
        "roomId": 2,
        "name": "Habitación 202",
        "maxCapacity": 2,
        "description": "Habitación doble con balcón",
        "price": 150.75,
        "categoryRoom": {
            "categoryRoomId": 2,
            "nameCategory": "Doble",
            "description": "Habitación para dos personas"
        },
        "image": [
            "https://scontent.fsal7-1.fna.fbcdn.net/v/t39.30808-6/470205441_1123543049781393_4764063109222321732_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGGrZfdHcRSL_8LzwZEa_ADzNb-b74k4QDM1v5vviThAOGZQugTMpzRu1zaza6rFe66xJgaCqQeyOKO1WAdugyJ&_nc_ohc=viu7a8iA6JoQ7kNvgFFU9NY&_nc_zt=23&_nc_ht=scontent.fsal7-1.fna&_nc_gid=Akd7ghRqw_pdQEdWsQiOPDV&oh=00_AYC36O1nEoSHRp5cP8HpyNZqDp_dR2jzoePVZpU-8uATlg&oe=67BBD907"
        ]
    },
    {
        "roomId": 3,
        "name": "Suite 303",
        "maxCapacity": 4,
        "description": "Suite con jacuzzi y terraza privada",
        "price": 300.00,
        "categoryRoom": {
            "categoryRoomId": 3,
            "nameCategory": "Suite",
            "description": "Habitación de lujo con múltiples comodidades"
        },
        "image": [
            "https://scontent.fsal7-1.fna.fbcdn.net/v/t1.6435-9/138817212_849410922522467_2295595884385173031_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHkOkx-oohbPU7fCp62OBOd8Gzg946pcPLwbOD3jqlw8qvQ8FZL3bUpRrY8S1iRw5_PN_W_ZGDTKbAqq9gXC3R-&_nc_ohc=SDQ4KWLOB8kQ7kNvgEetHEX&_nc_zt=23&_nc_ht=scontent.fsal7-1.fna&_nc_gid=ARLXX7-BhffmYcXlZrjhn-L&oh=00_AYDzhZnPul6gfNRA-kcHtRON0Mxuenp4iF-sCYGZzrKq-g&oe=67DD7447"
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
