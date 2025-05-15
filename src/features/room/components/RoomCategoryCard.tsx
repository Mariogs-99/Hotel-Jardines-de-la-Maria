import person from "../../../assets/personIcon.png";
import size from "../../../assets/size.png";
import bed from "../../../assets/bed.png";
import air from "../../../assets/air.png";
import smart from "../../../assets/smart.png";
import shower from "../../../assets/ducha.png";
import { useReservation } from "../../../context/reservationContext";

const RoomCategoryCard = ({
  data,
  reversed = false,
}: {
  data: any;
  reversed?: boolean;
}) => {
  const { setIsDrawerOpen, setSelectedRoom, setStep } = useReservation();

  const handleReserve = () => {
    setSelectedRoom({
      roomId: data.categoryRoomId,
      name: data.nameCategoryEs,
      maxCapacity: data.maxPeople,
      maxCamas: data.bedInfo,
      description: data.descriptionEs,
      price: data.minPrice,
      image: [data.imageUrl],
    });
    setStep(1);
    setIsDrawerOpen(true);
  };

  return (
    <section
      className={`flex flex-col md:flex-row ${
        reversed ? "md:flex-row-reverse" : ""
      } items-center justify-between px-6 md:px-24 py-24 border-b border-gray-200`}
    >
      {/* Imagen */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <div className="w-full max-w-[800px] aspect-[16/9] overflow-hidden rounded-2xl shadow-lg border border-gray-300">
          <img
            src={data.imageUrl}
            alt={data.nameCategoryEs}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 flex flex-col gap-8 md:pl-16">
        <h1 className="text-6xl font-title text-primary-brown font-bold mb-2 border-b pb-4 border-gray-300">
          {data.nameCategoryEs}
        </h1>

        {/* Íconos */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-lg text-gray-800 border-b border-gray-200 pb-5">
          <div className="flex items-center gap-3">
            <img src={person} alt="persona" className="h-7" />
            <p>Hasta {data.maxPeople} persona{data.maxPeople > 1 ? "s" : ""}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={size} alt="tamaño" className="h-7" />
            <p>{data.roomSize}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={bed} alt="cama" className="h-7" />
            <p>{data.bedInfo}</p>
          </div>
          {data.hasAc && (
            <div className="flex items-center gap-3">
              <img src={air} alt="aire" className="h-7" />
              <p>Aire acondicionado</p>
            </div>
          )}
          {data.hasTv && (
            <div className="flex items-center gap-3">
              <img src={smart} alt="tv" className="h-7" />
              <p>Smart TV</p>
            </div>
          )}
          {data.hasPrivateBathroom && (
            <div className="flex items-center gap-3">
              <img src={shower} alt="ducha" className="h-7" />
              <p>Baño privado con agua caliente</p>
            </div>
          )}
        </div>

  

        {/* Precio y botón */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-3">
          <p className="text-2xl font-bold text-primary-brown">
            {data.minPrice != null
              ? `$${data.minPrice.toFixed(2)} por noche`
              : "Precio no disponible"}
          </p>
          <button
            onClick={handleReserve}
            className="bg-primary-brown text-white px-8 py-4 text-lg rounded-md shadow-md hover:bg-primary-brown/90 transition"
          >
            Reservar
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoomCategoryCard;
