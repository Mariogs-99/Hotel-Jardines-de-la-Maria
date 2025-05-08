// import { IoIosArrowBack } from "react-icons/io";
// import { useReservation } from "../../../context/reservationContext";
import HeaderRoom from "../../components/headerRooms";
import { Bill } from "../../components/bill";
import { GuarranteePolicies } from "../../components/guaranteePolicies";
import { PaymentInformationForm } from "../../components/reservationForm/PaymentInformationForm";
import { useRef } from "react";

export const ReservationPayment = () => {
    const formRef = useRef<{ submitForm: () => void }>(null);

    return (
        <>
            <HeaderRoom title="Realizar pago" />
            <div className="px-10" id="payment">
                <PaymentInformationForm ref={formRef} />
                <Bill />
                <GuarranteePolicies />

                <button
                    className="mt-4 w-full bg-primary-brown text-white px-5 py-3 rounded-md hover:cursor-pointer hover:brightness-125 active:brightness-50"
                    onClick={() => formRef.current?.submitForm()}
                >
                    Completar reservación
                </button>
            </div>
        </>
    )
}