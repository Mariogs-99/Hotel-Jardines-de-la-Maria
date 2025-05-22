import person from "../../../assets/personIcon.png";
import size from "../../../assets/size.png";
import bed from "../../../assets/bed.png";
import air from "../../../assets/air.png";
import smart from "../../../assets/smart.png";
import shower from "../../../assets/ducha.png";
import { Room } from "../interfaces/roomInterfaces";
import { useReservation } from "../../../context/reservationContext";

const RoomCardClient = ({
  room,
  reversed = false,
}: {
  room: Room;
  reversed?: boolean;
}) => {
  const { setIsDrawerOpen, setSelectedRoom, setStep } = useReservation();

  const handleReserve = () => {
    setSelectedRoom({
      roomId: room.roomId,
      name: room.name,
      maxCapacity: room.maxCapacity,
      description: room.description,
      price: room.price,
      image: room.imageUrl ? [room.imageUrl] : [],
    });
    setStep(1);
    setIsDrawerOpen(true);
  };

  return (
    <section
      className={`flex flex-col md:flex-row ${
        reversed ? "md:flex-row-reverse" : ""
      } items-center justify-between px-6 md:px-24 py-20 border-b border-gray-100`}
    >
      {/* Imagen */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <div className="w-full max-w-[800px] aspect-[16/9] overflow-hidden rounded-3xl shadow-md border border-gray-200">
          <img
            src={`http://localhost:8080/${room.imageUrl}`}
            alt={room.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 flex flex-col gap-8 md:pl-24 md:pr-8">
        <h1 className="text-5xl font-semibold text-neutral-800 mb-4">
          {room.name}
        </h1>

        {/* Íconos estáticos */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-base text-neutral-700">
          <div className="flex items-center gap-3">
            <img src={person} alt="persona" className="h-6 opacity-70" />
            <p>
              Hasta {room.maxCapacity} persona{room.maxCapacity > 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img src={size} alt="tamaño" className="h-6 opacity-70" />
            <p>{room.sizeBed || "Tamaño estándar"}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={bed} alt="cama" className="h-6 opacity-70" />
            <p>Cama cómoda</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={air} alt="aire" className="h-6 opacity-70" />
            <p>Aire acondicionado</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={smart} alt="tv" className="h-6 opacity-70" />
            <p>Smart TV</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={shower} alt="ducha" className="h-6 opacity-70" />
            <p>Baño privado con agua caliente</p>
          </div>
        </div>

        {/* Precio y botón */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-gray-200 mt-4">
          <p className="text-3xl font-extrabold text-primary-brown tracking-tight">
            {room.price != null
              ? `$${room.price.toFixed(2)} por noche`
              : "Precio no disponible"}
          </p>
          <button
            onClick={handleReserve}
            className="bg-primary-brown text-white px-7 py-3 text-base rounded-full shadow hover:shadow-lg hover:bg-primary-brown/90 transition duration-200"
          >
            Reservar
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoomCardClient;
