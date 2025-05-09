import logo from "../../../../assets/logo.png";
import CalendarReservation from "../../components/calendarReservation";
import InfoSection from "../../../../shared/menu/counterPeople";
import { useReservation } from "../../../../context/reservationContext";
import { RightOutlined } from "@ant-design/icons";

export const ReservationDatePicker = () => {
  const {
    checkIn,
    checkOut,
    setStep,
    numberOfGuests,
    numberOfRooms,
    selectedRoom, // ✅ traemos selectedRoom
  } = useReservation();

  const handleNext = () => {
    if (selectedRoom) {
      // ✅ Si ya hay habitación seleccionada, saltamos RoomList
      setStep(3);
    } else {
      // ✅ Si no, pasamos al listado de habitaciones
      setStep(2);
    }
  };

  return (
    <>
      <img src={logo} alt="logo" className="w-40 self-center" />
      <CalendarReservation />
      <InfoSection title="Habitaciones:" description="Número de habitaciones" withBorder />
      <InfoSection title="Huespedes:" description="Total de huéspedes (incluye niños y adultos)" />

      <div className="sticky flex justify-between md:items-center bg-white w-full h-full bottom-0 px-10 py-5">
        <span className="flex md:flex-row flex-col gap-5 md:gap-0 justify-between w-full">
          <span className="flex gap-5">
            <span>
              <p className="opacity-70">Fecha inicio:</p>
              <p>{checkIn}</p>
            </span>
            <RightOutlined style={{ color: "#4A2713" }} />
            <span>
              <p className="opacity-70">Fecha fin: </p>
              <p>{checkOut}</p>
            </span>
          </span>
          <span className="pr-10">
            <p className="opacity-70">Huéspedes: </p>
            <p>{numberOfGuests}</p>
          </span>

          <span className="pr-10">
            <p className="opacity-70">Habitaciones: </p>
            <p>{numberOfRooms}</p>
          </span>
        </span>
        <button
          className={`disabled:opacity-75 disabled:cursor-not-allowed self-start md:self-center hover:cursor-pointer bg-primary-brown text-white px-5 py-3 rounded-sm`}
          disabled={!checkIn || !checkOut}
          onClick={handleNext} // ✅ usamos nuestra función personalizada
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
