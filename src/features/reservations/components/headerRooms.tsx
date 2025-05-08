import { CalendarOutlined, LeftOutlined, UserOutlined } from "@ant-design/icons";
import doorIcon from "../../../assets/door-icon.png"
import { FC } from "react";
import { useReservation } from "../../../context/reservationContext";

interface headerRoomInterface {
    title:string
}

const HeaderRoom:FC<headerRoomInterface> = ({title}) => {

    const { setStep, step, checkIn, checkOut, numberOfGuests, numberOfRooms } = useReservation()
    return(
        <div className="py-5 border-b-2 border-gray-300 sticky top-0 z-50 bg-white">
            <div className="px-10 flex flex-col gap-2">
                <span className="flex gap-5">
                    <LeftOutlined className="cursor-pointer" onClick={() => setStep(step - 1)}/>
                    <p className="text-xl font-bold">{title}</p>
                </span>
                <span className="flex gap-5 md:gap-6 opacity-75 text-sm">
                    <span className="flex items-center gap-1">
                        <CalendarOutlined />
                        <p>{checkIn} - {checkOut}</p>
                    </span>
                    <span className="flex items-center gap-1">
                        <UserOutlined />
                        <p>{numberOfGuests}</p>
                    </span>
                    <span className="flex items-center gap-1">
                        <img src={doorIcon} alt="" className="h-5" />
                        <p>{numberOfRooms}</p>
                    </span>
                
                </span>
            </div>
        </div>
    )
}

export default HeaderRoom;