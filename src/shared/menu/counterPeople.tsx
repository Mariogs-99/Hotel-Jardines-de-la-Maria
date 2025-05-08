import React from "react";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useReservation } from "../../context/reservationContext";


interface InfoSectionProps {
  title: string;
  description: string;
  withBorder?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, description, withBorder = false }) => {
  const { setNumberOfRooms, setNumberOfGuests, numberOfRooms, numberOfGuests } = useReservation();

  const count = title === "Habitaciones:" ? numberOfRooms : numberOfGuests;
  const setCount = title === "Habitaciones:" ? setNumberOfRooms : setNumberOfGuests;

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <div className={`py-7 flex justify-between items-center mx-14 ${withBorder ? "border-y border-slate-300" : ""}`}>
      <div>
        <h2 className="font-bold text-xl">{title}</h2>
        <h3 className="opacity-70">{description}</h3>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={decreaseCount} disabled={count === 1}>
          <MinusOutlined className={`w-6 h-6 ${count === 1 ? "text-gray-400" : "text-black"}`} />
        </button>
        <span className="text-lg font-semibold">{count}</span>
        <button onClick={increaseCount}>
          <PlusOutlined className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export default InfoSection;
