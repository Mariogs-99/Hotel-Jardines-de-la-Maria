import { useEffect, useState } from "react";
import Title from "../../../shared/title";
import BackgroundCarrousel from "../../../shared/backgroundCarrousel";
import RoomsBackgroundImages from "../../../shared/roomsBackgroundImage/roomsBackgroundImages";
import { getAvailableRooms } from "../services/roomServices";
import { Room } from "../interfaces/roomInterfaces";
import RoomCardClient from "../components/RoomCardClient";

function RoomsPage() {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const today = new Date().toISOString().split("T")[0];
      const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

      const result = await getAvailableRooms({
        initDate: today,
        finishDate: tomorrow,
        maxCapacity: 1,
      });

      setRooms(result);
    };

    fetchRooms();
  }, []);

  return (
    <>
      <BackgroundCarrousel type="rooms" className="h-[70vh]" />

      <div className="md:px-40 flex flex-col justify-center items-center bg-[#FAF6F3] py-20">
        <Title className="pb-10 pt-0">Nuestras habitaciones</Title>
        <p className="px-10 md:px-20 md:w-5xl leading-8 md:leading-10 md:text-xl text-center opacity-75">
          Descanso y confort en un entorno colonial. Nuestras habitaciones están
          diseñadas para ofrecerte una experiencia acogedora, combinando el encanto
          histórico con las comodidades modernas. Ya sea que viajes en pareja, familia o grupo,
          tenemos la opción ideal para ti.
        </p>
      </div>

      <section className="flex flex-col gap-20 pb-20">
        {rooms.length > 0 ? (
          rooms.map((room, index) => (
            <RoomCardClient key={room.roomId} room={room} reversed={index % 2 !== 0} />
          ))
        ) : (
          <p className="text-center text-lg text-gray-500 px-6">
            No hay habitaciones disponibles para este rango de fechas.
          </p>
        )}
      </section>

      <RoomsBackgroundImages text="Ver actividades" />
    </>
  );
}

export default RoomsPage;
