import bed from "../../../assets/bed.png";
import person from "../../../assets/personIcon.png";
import size from "../../../assets/size.png";
import air from "../../../assets/air.png";
import room from "../../../assets/bedroom.jpeg";
import smart from "../../../assets/smart.png";
import shower from "../../../assets/ducha.png";
import { useReservation } from "../../../context/reservationContext"; // 🔥 importamos el context

const Individual = ({ reversed = false }: { reversed?: boolean }) => {
  const { setIsDrawerOpen, setSelectedRoom, setStep } = useReservation(); // ✅ usamos también setStep

  const handleReserve = () => {
    setSelectedRoom({
      roomId: 4,
      name: "Habitación Individual",
      maxCapacity: 1,
      maxCamas: "1 cama Twin",
      description: "Ideal para viajeros solitarios o viajes de negocios, esta habitación individual ofrece una cama Twin confortable y un ambiente tranquilo para un descanso reparador.",
      price: 150.00,
      image: [room]
    });
    setStep(1); // ✅ empezamos desde el datepicker
    setIsDrawerOpen(true); // ✅ abrimos el drawer
  };

  return (
    <section
      className={`grid ${
        reversed ? "md:grid-cols-[40vw_60vw]" : "md:grid-cols-[60vw_40vw]"
      } overflow-hidden`}
    >
      <article
        className={`${
          reversed ? "order-1" : "order-2"
        } px-10 md:px-20 flex flex-col justify-evenly gap-8 md:gap-0`}
      >
        <h1 className="text-3xl md:text-5xl font-title pb-0 text-primary-brown text-start">
          Habitación Individual
        </h1>
        <article className="grid grid-cols-2 gap-x-3 gap-y-4 opacity-75">
          <div className="flex gap-5 items-center">
            <img src={person} alt="" className="h-7" />
            <p>Hasta 1 persona</p>
          </div>
          <div className="flex gap-5 items-center">
            <img src={size} alt="" className="h-8" />
            <p>20 a 30 m2</p>
          </div>
          <div className="flex gap-5 items-center">
            <img src={bed} alt="" className="h-8" />
            <p>Cama Twin</p>
          </div>
          <div className="flex gap-5 items-center">
            <img src={air} alt="" className="h-8" />
            <p>Aire acondicionado</p>
          </div>
          <div className="flex gap-5 items-center">
            <img src={smart} alt="" className="h-8" />
            <p>Smart TV</p>
          </div>
          <div className="flex gap-5 items-center">
            <img src={shower} alt="" className="h-8" />
            <p>Baño privado con agua caliente</p>
          </div>
        </article>
        <p className="text-base leading-8 text-justify">
          Ideal para viajeros solitarios o viajes de negocios, esta habitación individual ofrece una cama Twin confortable y un ambiente tranquilo para un descanso reparador. Con capacidad para una persona, es perfecta para quienes buscan comodidad y funcionalidad en un espacio acogedor.
        </p>
        <p className="font-bold text-primary-brown text-lg">$150.00 por noche</p>
        <span className="flex gap-10">
          <button
            onClick={handleReserve}
            className="bg-primary-brown px-10 py-3 text-white w-full rounded-sm hover:bg-primary-brown/90 transition"
          >
            Reservar
          </button>
        </span>
      </article>

      <img
        src={room}
        alt=""
        className={`${
          reversed ? "md:order-2" : "order-1"
        } py-5 px-5 md:p-0 object-cover w-full h-full`}
      />
    </section>
  );
};

export default Individual;
