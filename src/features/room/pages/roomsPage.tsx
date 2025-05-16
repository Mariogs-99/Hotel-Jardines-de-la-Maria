import { useEffect, useState } from "react";
import Title from "../../../shared/title";
import BackgroundCarrousel from "../../../shared/backgroundCarrousel";
import RoomsBackgroundImages from "../../../shared/roomsBackgroundImage/roomsBackgroundImages";
import RoomCategoryCard from "../components/RoomCategoryCard";
import { getPublicCategories } from "../services/categoryService";
import { CategoryClientViewDTO } from "../interfaces/categoryInterfaces";

function RoomsPage() {
  const [categories, setCategories] = useState<CategoryClientViewDTO[]>([]); 
  useEffect(() => {
    getPublicCategories()
      .then(setCategories)
      .catch(console.error);
  }, []);

  return (
    <>
      <BackgroundCarrousel type="rooms" className="h-[70vh]" />
      <div className="md:px-40 flex flex-col justify-center items-center bg-[#FAF6F3] py-20">
        <Title className="pb-10 pt-0">Nuestras habitaciones</Title>
        <p className="px-10 md:px-20 md:w-5xl leading-8 md:leading-10 md:text-xl text-center opacity-75">
          Descanso y confort en un entorno colonial. Nuestras habitaciones están
          diseñadas para ofrecerte una experiencia acogedora, combinando el encanto
          histórico con las comodidades modernas. Disfruta de un ambiente tranquilo,
          camas cómodas, aire acondicionado y vistas privilegiadas a la ciudad o
          nuestros jardines. Ya sea que viajes en pareja, familia o grupo, tenemos
          la opción ideal para ti.
        </p>
      </div>

      <section className="flex flex-col gap-20 pb-20">
        {categories
          .filter((cat) => !!cat.imageUrl) // 👈 Solo categorías con imagen asignada
          .map((cat, index) => (
            <RoomCategoryCard key={cat.categoryRoomId} data={cat} reversed={index % 2 !== 0} />
          ))}

      </section>

      <RoomsBackgroundImages text="Ver actividades" />
    </>
  );
}

export default RoomsPage;
