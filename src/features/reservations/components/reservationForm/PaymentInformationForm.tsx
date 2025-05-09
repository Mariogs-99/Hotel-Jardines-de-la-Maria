// import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { forwardRef, useImperativeHandle, useState } from "react";
import CreditCard from "../CreditCard";
import Input from "../../../../shared/form/Input"
import { InputOtp } from 'primereact/inputotp';
// import { makeReservation } from "../../services/reservationService";
// import { useReservation } from "../../../context/reservationContext";
import { Slide, toast } from "react-toastify";


//export const PaymentInformationForm = forwardRef((_, ref)

type FormData = {
    firstName: string;
    lastName: string;
    telephone: string;
    email: string;
    cardName: string;
    cardNumber: string;
    dueDate: string;
    CVV: string;
  };
  

  export const PaymentInformationForm = forwardRef(({ onSuccess }: { onSuccess: (data: FormData) => void }, ref) => {
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

    const formatPhoneNumber = (value: string) => {
        const cleaned = value.replace(/\D/g, "").slice(0, 8);
        if (cleaned.length <= 4) return cleaned;
        return `${cleaned.slice(0, 4)}-${cleaned.slice(4)}`;
    };
      
    const formatCardNumber = (value: string) => {
        const cleaned = value.replace(/\D/g, "").slice(0, 16);
        return cleaned.replace(/(.{4})/g, "$1 ").trim();
    };

    const formatDueDate = (value: string) => {
        if (value.includes("-")) {
          // caso YYYY-MM-DD
          const [year, month] = value.split("-");
          return `${month}/${year.slice(2)}`; // MM/AA
        }
      
        // caso si el usuario escribe 4 dígitos seguidos
        const cleaned = value.replace(/\D/g, "").slice(0, 4);
        if (cleaned.length >= 3) {
          return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
        }
        return cleaned;
    };
      
      

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
    
        onSuccess(formData); // 🔥 notifica al padre
    }
    
   

    useImperativeHandle(ref, () => ({
        submitForm: handlerReservation
    }));
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
      
        if (name === "telephone") {
          value = formatPhoneNumber(value);
        } else if (name === "cardNumber") {
          value = formatCardNumber(value);
        } else if (name === "dueDate") {
          value = formatDueDate(value);
        }
      
        setFormData({ ...formData, [name]: value });
    };
      

    return (
        <form className="my-5 flex flex-col gap-5">
            <div className="flex flex-col gap-5 clear-start px-5 pt-2 pb-5 rounded-sm">
                <h1 className="opacity-90 text-xl font-bold">Información de contacto</h1>
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="firstName" className="opacity-90">Nombre</label>
                    <Input name="firstName" placeholder="Nombre" type="text" value={formData.firstName} onChange={handleChange} />
                </span>
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="lastName" className="font-primary">Apellido</label>
                    <Input name="lastName" placeholder="Apellido" type="text" value={formData.lastName} onChange={handleChange} />
                </span>
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="telephone" className="font-primary">Teléfono</label>
                    <Input name="telephone" placeholder="Digite su numero de teléfono" type="text" value={formData.telephone} onChange={handleChange} />
                </span>
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="email" className="font-primary">Correo</label>
                    <Input name="email" placeholder="Correo electrónico" type="email" value={formData.email} onChange={handleChange} />
                </span>
            </div>
            <div className="flex flex-col gap-5 clear-start px-5 pt-2 pb-5 rounded-lg shadow-lg bg-white border border-primary-brown">
                <h1 className="opacity-90 text-xl font-bold text-primary-brown">Información de pago</h1>

                <div className="flex justify-center">
                    <CreditCard
                        cardName={formData.cardName}
                        cardNumber={formData.cardNumber}
                        dueDate={formData.dueDate}
                        CVV={formData.CVV}
                    />
                </div>
                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="cardName" className="opacity-90">Nombre de tarjeta</label>
                    <Input
                    className="bg-gray-50 border-2 border-primary-brown rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-primary-brown"
                    name="cardName"
                    placeholder="Nombre en tarjeta"
                    type="text"
                    value={formData.cardName}
                    onChange={handleChange}
                    />
                </span>

                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="cardNumber" className="font-primary">Número de tarjeta</label>
                    <Input
                    className="bg-gray-50 border-2 border-primary-brown rounded-md px-3 py-2 text-lg font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-primary-brown"
                    name="cardNumber"
                    placeholder="**** **** **** ****"
                    type="text"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    />
                </span>

                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="dueDate" className="font-primary">Expiración</label>
                    <Input
                    className="bg-gray-50 border-2 border-primary-brown rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-primary-brown"
                    name="dueDate"
                    placeholder="MM/AA"
                    type="text"
                    value={formData.dueDate}
                    onChange={handleChange}
                    />
                </span>

                <span className="flex flex-col gap-1 w-full">
                    <label htmlFor="CVV" className="font-primary">CVV</label>
                    <InputOtp
                    className="bg-gray-50 border-2 border-primary-brown rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-primary-brown"
                    value={formData.CVV}
                    onChange={(e: any) => console.log(e.value)}
                    length={3}
                    />
                </span>
                </div>


        </form>
    )
})