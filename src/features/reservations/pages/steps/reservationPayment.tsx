// import { IoIosArrowBack } from "react-icons/io";
// import { useReservation } from "../../../context/reservationContext";
import HeaderRoom from "../../components/headerRooms";
import { Bill } from "../../components/bill";
import { GuarranteePolicies } from "../../components/guaranteePolicies";
import { PaymentInformationForm } from "../../components/reservationForm/PaymentInformationForm";
import { useRef, useState } from "react";
import { useReservation } from "../../../../context/reservationContext";
import { useNavigate } from "react-router-dom";


export const ReservationPayment = () => {
    const formRef = useRef<{ submitForm: () => void }>(null);
    const { email } = useReservation();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();
    const { selectedRoom, checkIn, checkOut, numberOfRooms, numberOfGuests } = useReservation();

    const handleComplete = () => {
        formRef.current?.submitForm();
    };

    return (
        <>
            <HeaderRoom title="Realizar pago" />
            <div className="px-10" id="payment">
            <PaymentInformationForm
                ref={formRef}
                onSuccess={(formData) => {
                    navigate('/reserva-completada', {
                    state: {
                        ...formData,
                        selectedRoom,
                        checkIn,
                        checkOut,
                        numberOfRooms,
                        numberOfGuests
                    }
                    });
                }}
                />


                <Bill />
                <GuarranteePolicies />

                <button
                    className="mt-4 w-full bg-primary-brown text-white px-5 py-3 rounded-md hover:cursor-pointer hover:brightness-125 active:brightness-50"
                    onClick={handleComplete}
                >
                    Completar reservación
                </button>
            </div>

            {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-md shadow-lg max-w-sm text-center">
                        <h2 className="text-2xl font-bold mb-4">¡Reserva Confirmada!</h2>
                        <p className="mb-4">
                            Hemos enviado los detalles de tu reserva al correo:
                        </p>    
                        <p className="font-semibold text-primary-brown">{email}</p>
                        <button
                            className="mt-6 bg-primary-brown text-white px-4 py-2 rounded-md"
                            onClick={() => setShowConfirmation(false)}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
