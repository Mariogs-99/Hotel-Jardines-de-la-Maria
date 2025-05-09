import bed from "../../../assets/bed.png";
import person from "../../../assets/personIcon.png";
import size from "../../../assets/size.png";
import air from "../../../assets/air.png";
import room from "../../../assets/bedroom.jpeg";
import smart from "../../../assets/smart.png";
import shower from "../../../assets/ducha.png";
import { useReservation } from "../../../context/reservationContext"; // ✅ importamos el context

const Matrimonial = ({ reversed = false }: { reversed?: boolean }) => {
  const { setIsDrawerOpen, setSelectedRoom } = useReservation(); // ✅ obtenemos del context

  const handleReserve = () => {
    setSelectedRoom({
      roomId: 3,
      name: "Habitación Matrimonial",
      maxCapacity: 2,
      maxCamas: "Cama Queen Sizes",
      description:
        "Pensada para parejas o viajeros que buscan una experiencia tranquila, esta habitación matrimonial ofrece una cama Queen que garantiza el descanso ideal. Con capacidad para dos personas, su ambiente cálido y acogedor crea el espacio perfecto para relajarse y disfrutar de una estadía placentera.",
      price: 300.0,
      image: [room]
    });
    setIsDrawerOpen(true); // ✅ abre el drawer
  };

  return (
    <section className={`grid ${reversed ? "md:grid-cols-[40vw_60vw]" : "md:grid-cols-[60vw_40vw]"} overflow-hidden`}>
      <article className={`${reversed ? "order-1" : "order-2"} px-10 md:px-20 flex flex-col justify-evenly gap-8 md:gap-0`}>
        <h1 className="text-3xl md:text-5xl font-title pb-0 text-primary-brown text-start">Habitación Matrimonial</h1>
        <article className="grid grid-cols-2 gap-x-3 gap-y-4 opacity-75">
          <div className="flex gap-5 items-center">
            <img src={person} alt="" className="h-7" />
            <p>Hasta 2 personas</p>
          </div>
          <div className="flex gap-5 items-center">
            <img src={size} alt="" className="h-8" />
            <p>20 a 30 m2</p>
          </div>
          <div className="flex gap-5 items-center">
            <img src={bed} alt="" className="h-8" />
            <p>Cama Queen Sizes</p>
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
          Pensada para parejas o viajeros que buscan una experiencia tranquila, esta habitación matrimonial ofrece una cama Queen que garantiza el descanso ideal. Con capacidad para dos personas, su ambiente cálido y acogedor crea el espacio perfecto para relajarse y disfrutar de una estadía placentera.
        </p>

        <p className="font-bold text-primary-brown text-lg">$300.00 por noche</p>

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
        alt="Cama Matrimonial"
        className={`${reversed ? "md:order-2" : "order-1"} py-5 px-5 md:p-0 object-cover w-full h-full`}
      />
    </section>
  );
};

export default Matrimonial;
