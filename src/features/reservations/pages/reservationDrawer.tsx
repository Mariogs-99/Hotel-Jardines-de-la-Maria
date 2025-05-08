import { CloseOutlined } from "@ant-design/icons";
import { FC, useEffect, useRef } from "react";
import RoomList from "./steps/roomList";
import RoomDetails from "./steps/roomDetails";
import { ReservationDatePicker } from "./steps/reservationDatePicker";
import { useReservation } from "../../../context/reservationContext";
import { ReservationPayment } from "./steps/reservationPayment";
import { Slide, ToastContainer, } from 'react-toastify';

interface ReservationDrawerInterface {
    isOpen: boolean;
    onClose?: () => void;
}

const ReservationDrawer: FC<ReservationDrawerInterface> = ({ isOpen, onClose }) => {
    const { step } = useReservation();

    const drawerRef = useRef<HTMLDivElement>(null); // Ref para el drawer

    // Hacer scroll al inicio cuando cambie el step
    useEffect(() => {
        console.log("scroll")
        if (drawerRef.current) {
            drawerRef.current.scrollTop = 0;
        }
    }, [step]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Slide}
            />
            {isOpen && (
                <button
                    className="fixed top-5 right-5 text-primary-brown text-2xl md:z-[60] hover:cursor-pointer p-5 z-70"
                    onClick={onClose}
                >
                    <CloseOutlined />
                </button>
            )}

            <div ref={drawerRef} className={`fixed top-0 right-0 h-screen w-full md:w-[40vw] bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"} z-50`}>
                <div className=" w-full flex flex-col py-5">
                    {step === 1 ? (
                        <ReservationDatePicker />
                    ) : step === 2 ? (
                        <RoomList />
                    ) : step === 3 ? (
                        <RoomDetails />
                    ) : (
                        <ReservationPayment />
                    )}
                </div>
            </div>

            <div
                onClick={onClose}
                className={`top-0 right-0 bg-black w-screen h-screen z-40 transition-opacity duration-300 ease-in-out
                ${isOpen ? "fixed opacity-50" : "hidden opacity-0"}`}
            ></div>
        </>
    );
};

export default ReservationDrawer;
