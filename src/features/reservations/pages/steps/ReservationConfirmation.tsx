import { useLocation } from "react-router-dom";
import { calculateReservation } from "../../../../utils/reservationCalculations";

export const ReservationConfirmation = () => {
  const { state } = useLocation();

  const {
    email = "",
    firstName = "",
    lastName = "",
    telephone = "",
    cardName = "",
    cardNumber = "",
    dueDate = "",
    selectedRoom = {},
    checkIn = "",
    checkOut = "",
    numberOfRooms = "",
    numberOfGuests = ""
  } = state || {};

  const { numberOfNights, subtotal, IVA, total } = calculateReservation(selectedRoom.price, checkIn, checkOut);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg text-gray-800">
        <h1 className="text-3xl font-bold text-primary-brown text-center mb-4">¡Reserva confirmada!</h1>
        <p className="text-center text-gray-600 mb-6">Hemos enviado los detalles de tu reserva al correo:</p>
        <p className="text-center text-primary-brown font-semibold mb-8">{email}</p>

        {/* Datos personales */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-primary-brown border-b pb-2 mb-3">Datos personales</h2>
          <ul className="space-y-1 text-sm">
            <li><span className="font-medium">Nombre:</span> {firstName} {lastName}</li>
            <li><span className="font-medium">Teléfono:</span> {telephone}</li>
            <li><span className="font-medium">Correo:</span> {email}</li>
          </ul>
        </div>

        {/* Datos de pago */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-primary-brown border-b pb-2 mb-3">Datos de pago</h2>
          <ul className="space-y-1 text-sm">
            <li><span className="font-medium">Nombre en tarjeta:</span> {cardName}</li>
            <li><span className="font-medium">Número de tarjeta:</span> **** **** **** {cardNumber?.slice(-4)}</li>
            <li><span className="font-medium">Expiración:</span> {dueDate}</li>
          </ul>
        </div>

        {/* Detalles de reserva */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-primary-brown border-b pb-2 mb-3">Detalles de la reserva</h2>
          <ul className="space-y-1 text-sm">
            <li><span className="font-medium">Habitación:</span> {selectedRoom?.name || "No especificada"}</li>
            <li><span className="font-medium">Precio por noche:</span> ${selectedRoom?.price?.toFixed(2) || "N/A"}</li>
            <li><span className="font-medium">Noches:</span> {numberOfNights}</li>
            <li><span className="font-medium">Subtotal:</span> ${subtotal.toFixed(2)}</li>
            <li><span className="font-medium">IVA (10%):</span> ${IVA.toFixed(2)}</li>
            <li className="text-primary-brown text-lg font-bold"><span>Total pagado:</span> ${total.toFixed(2)}</li>
            <li><span className="font-medium">Fecha de entrada:</span> {checkIn}</li>
            <li><span className="font-medium">Fecha de salida:</span> {checkOut}</li>
            <li><span className="font-medium">Habitaciones:</span> {numberOfRooms}</li>
            <li><span className="font-medium">Huéspedes:</span> {numberOfGuests}</li>
          </ul>
        </div>

        <button
          className="w-full bg-primary-brown text-white py-3 rounded-md hover:bg-primary-brown/90 transition"
          onClick={() => window.location.href = "/"}
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};
