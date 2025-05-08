// import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { forwardRef, useImperativeHandle, useState } from "react";

import Input from "../../../../shared/form/Input"
import { InputOtp } from 'primereact/inputotp';
// import { makeReservation } from "../../services/reservationService";
// import { useReservation } from "../../../context/reservationContext";
import { Slide, toast } from "react-toastify";


export const PaymentInformationForm = forwardRef((_, ref) => {


    let [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        telephone: "",
        email: "",
        cardName: "",
        cardNumber: "",
        dueDate: "",
        CVV: ""
    });

    // const { selectedRoom, checkIn, checkOut } = useReservation();

    const handlerReservation = async () => {
        toast.success('Reserva completada correctamente', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
        });
    }
    // const handlerReservation = async () => {
    //     const formatDateToDB = (dateString: string): string => {
    //         const [day, month, year] = dateString.split("/");
    //         return `20${year}-${month}-${day}`;
    //     };

    //     const checkInFormatted = formatDateToDB(checkIn);
    //     const checkOutFormatted = formatDateToDB(checkOut);

    //     console.log(checkInFormatted, checkOutFormatted);

    //     const body = {
    //         initDate: checkInFormatted,
    //         finishDate: checkOutFormatted,
    //         cantPeople: selectedRoom.maxCapacity,
    //         email: formData.email,
    //         phone: formData.telephone,
    //         payment: selectedRoom.price,
    //         categoryRoomId: selectedRoom.categoryRoom.categoryRoomId
    //     }

    //     console.log(body)
    //     try{
    //      await makeReservation(body)
    //      toast.success('Reserva completada correctamente', {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "colored",
    //         transition: Slide,
    //         });
    //     }
    //     catch(error) {
    //         toast.error('Error en la reserva de la habitación', {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "colored",
    //             transition: Slide,
    //             });
    //     }
    // }

    useImperativeHandle(ref, () => ({
        submitForm: handlerReservation
    }));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form className="my-5 flex flex-col gap-5">
            <div className="flex flex-col gap-5 clear-start px-5 pt-2 pb-5 rounded-sm">
                <h1 className="opacity-90 text-xl font-bold">Información de contacto</h1>
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="firstName" className="opacity-90">Nombres</label>
                    <Input name="firstName" placeholder="Nombres" type="text" value={formData.firstName} onChange={handleChange} />
                </span>
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="lastName" className="font-primary">Apellidos</label>
                    <Input name="lastName" placeholder="Apellidos" type="text" value={formData.lastName} onChange={handleChange} />
                </span>
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="telephone" className="font-primary">Telefono</label>
                    <Input name="telephone" placeholder="Apellidos" type="number" value={formData.telephone} onChange={handleChange} />
                </span>
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="email" className="font-primary">Correo</label>
                    <Input name="email" placeholder="Apellidos" type="email" value={formData.email} onChange={handleChange} />
                </span>
            </div>
            <div className="flex flex-col gap-5 clear-start px-5 pt-2 pb-5 rounded-sm">
                <h1 className="opacity-90 text-xl font-bold">Información de pago</h1>
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="cardName" className="opacity-90">Nombre de tarjeta</label>
                    <Input name="cardName" placeholder="nombre de tarjeta" type="text" value={formData.cardName} onChange={handleChange} />
                </span>
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="cardNumber" className="font-primary">Número de trajeta</label>
                    <Input name="cardNumber" placeholder="**** **** **** ****" type="text" value={formData.cardNumber} onChange={handleChange} />
                </span>
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="dueDate" className="font-primary">Expiración</label>
                    <Input name="dueDate" placeholder="Apellidos" type="date" value={formData.dueDate} onChange={handleChange} />
                </span>
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="CVV" className="font-primary">CVV</label>
                    <InputOtp value={formData.CVV} onChange={(e: any) => console.log(e.value)} length={3} />
                </span>
            </div>

        </form>
    )
})