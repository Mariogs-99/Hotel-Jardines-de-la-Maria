import { UserOutlined } from "@ant-design/icons";
import React from "react";
// import bedIcon from "../../assets/bed.png"
import { Image } from 'antd';
import { useReservation } from "../../../context/reservationContext";
import { RoomWithImage } from "../../room/interfaces/roomInterfaces";


interface RoomCardProps {
    room: RoomWithImage;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
    console.log("room", room)
    console.log("roomImage:", typeof (room.image))  

    const { setSelectedRoom, setStep } = useReservation();
    return (
        <div className="rounded-md cursor-pointer px-5">
            {/* <Image.PreviewGroup
                items={room.image.map(img => String(img))}
            >
                <Image
                    width={'100%'}
                    src={String(room.image[0])}
                />
            </Image.PreviewGroup> */}

            <Image.PreviewGroup
                items={room.image}
            >
                <Image
                    width={'100%'}
                    height={'35vh'}
                    style={{ objectFit:'cover', objectPosition:'center' }}
                    src={String(room.image[0])}
                />
            </Image.PreviewGroup>
            <span className="flex justify-between items-center mt-4">
                <h3 className="text-lg font-bold">{room.name}</h3>
                <p className="text-gray-600">Precio por noche: ${room.price}</p>
            </span>
            <span className="flex gap-10">
                <span className="flex items-center gap-3">
                    <UserOutlined className="opacity-75 h-7" />
                    <p className="text-gray-600">Máx.: {room.maxCapacity}</p>
                </span>
                {/* <span className="flex gap-3">
                    <img src={bedIcon} alt="bed_icon" className="h-7" />
                    <p className="text-gray-600">{room.bedSize}</p>
                </span> */}
            </span>

            <button
                className="my-5 bg-primary-brown text-white px-4 py-2 rounded-md w-full hover:cursor-pointer hover:brightness-125 active:brightness-50"
                onClick={() => {
                    setSelectedRoom(room)
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setStep(3)
                }}
            >Reservar</button>
        </div>
    );
};

export default RoomCard;
