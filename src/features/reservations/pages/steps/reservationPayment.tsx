import HeaderRoom from "../../components/headerRooms";
import { Bill } from "../../components/bill";
import { GuarranteePolicies } from "../../components/guaranteePolicies";
import { PaymentInformationForm } from "../../components/reservationForm/PaymentInformationForm";
import { useRef, useState } from "react";
import { useReservation } from "../../../../context/reservationContext";
import { useNavigate } from "react-router-dom";
import { calculateReservation } from "../../../../utils/reservationCalculations";


export const ReservationPayment = () => {
    const formRef = useRef<{ submitForm: () => void }>(null);
    const { email, selectedRoom, checkIn, checkOut, numberOfRooms, numberOfGuests } = useReservation();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();

    const handleComplete = () => {
        console.log("➡️ Botón presionado, submitForm() ejecutado");
        formRef.current?.submitForm();
    };

    const { total } = calculateReservation(
        selectedRoom?.price ?? 0,
        checkIn,
        checkOut
    );

    const formatDateToISO = (rawDate: Date | string): string => {
        try {
            const parsed = typeof rawDate === "string"
                ? new Date(Date.parse(rawDate.replace(/(\d{2})\/(\d{2})\/(\d{2})/, "20$3-$2-$1")))
                : rawDate;

            if (isNaN(parsed.getTime())) throw new Error("Fecha inválida");
            return parsed.toISOString().split("T")[0];
        } catch (e) {
            console.error("❌ Error al formatear fecha:", rawDate, e);
            return "";
        }
    };

    const sendReservationToAPI = async (formData: any) => {
        const reservationDTO = {
            initDate: formatDateToISO(checkIn),
            finishDate: formatDateToISO(checkOut),
            cantPeople: numberOfGuests,
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.telephone,
            payment: total ?? 0,
            categoryRoomId: selectedRoom?.categoryRoom?.categoryRoomId ?? 0,
            roomId: selectedRoom?.id ?? 0 // 👈 Este campo lo debes usar ahora
        };


        console.log("📡 Enviando reserva al backend:", reservationDTO);

        try {
            const response = await fetch("http://localhost:8080/api/reservation/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reservationDTO)
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error("❌ Error de backend:", errorText);
                throw new Error("Error al guardar la reserva");
            }

            return await response.json();
        } catch (error) {
            console.error("❌ Error al enviar reserva:", error);
            throw error;
        }
    };

    return (
        <>
            <HeaderRoom title="Realizar pago" />
            <div className="px-10" id="payment">
                <PaymentInformationForm
                    ref={formRef}
                    onSuccess={async (formData) => {
                        console.log("✅ Formulario completado con:", formData);
                        try {
                            await sendReservationToAPI(formData);
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
                        } catch (error) {
                            alert("Ocurrió un error al procesar tu reserva.");
                        }
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
                        <p className="mb-4">Hemos enviado los detalles de tu reserva al correo:</p>    
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
