import { useReservation } from "../../../context/reservationContext";
import { calculateReservation } from "../../../utils/reservationCalculations";


// import { ArrowRightOutlined, CreditCardOutlined, UserOutlined } from "@ant-design/icons";
import { ArrowRightOutlined } from "@ant-design/icons";



export const Bill = () => {
     const { selectedRoom, checkIn, checkOut } = useReservation();

  const { numberOfNights, subtotal, IVA, total } = calculateReservation(
    selectedRoom.price,
    checkIn,
    checkOut
  );

    return (
  <div className="py-10">
    <h1 className="text-2xl font-bold text-primary-brown mb-4">Factura de Reserva</h1>

    <article className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white">
      {/* Fechas */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm gap-4">
        <div>
          <p className="text-secondary-brown font-semibold">Fecha de inicio</p>
          <p className="text-gray-500 text-xs">Check-in después de las 15:00</p>
          <p className="font-medium">{checkIn}</p>
        </div>

        <ArrowRightOutlined className="text-secondary-brown hidden md:block" />

        <div>
          <p className="text-secondary-brown font-semibold">Fecha de salida</p>
          <p className="text-gray-500 text-xs">Check-out antes de las 12:00</p>
          <p className="font-medium">{checkOut}</p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-gray-500 text-xs">Duración</p>
          <p className="font-bold">{numberOfNights} noche{numberOfNights !== 1 && "s"}</p>
        </div>
      </div>

      <hr className="my-5 border-gray-300" />

      {/* Detalles habitación */}
      <div>
        <h2 className="text-secondary-brown font-semibold text-lg mb-1">Detalles de la habitación</h2>
        <p className="font-bold text-lg">{selectedRoom.name}</p>

        <div className="space-y-3 mt-3">
          <div className="flex justify-between">
            <p className="text-sm text-gray-700">Tarifa regular (desayuno incluido)</p>
            <p className="font-medium">${selectedRoom.price}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-sm text-gray-700">Subtotal ({numberOfNights} noche{numberOfNights !== 1 && "s"})</p>
            <p className="font-medium">${subtotal.toFixed(2)}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-sm text-gray-700 font-semibold">Impuestos y tasas</p>
            <p className="font-medium">${IVA}</p>
          </div>
        </div>
      </div>

      <hr className="my-5 border-gray-300" />

      {/* Total */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-primary-brown">Total a pagar</h2>
        <div className="text-right">
          <p className="text-2xl font-bold text-primary-brown">${total}</p>
          <p className="text-xs text-gray-500 italic">IVA e impuestos incluidos</p>
        </div>
      </div>
    </article>
  </div>
);

}