import { useReservation } from "../../../context/reservationContext";


// import { ArrowRightOutlined, CreditCardOutlined, UserOutlined } from "@ant-design/icons";
import { ArrowRightOutlined } from "@ant-design/icons";



export const Bill = () => {
    const { selectedRoom, checkIn, checkOut } = useReservation();

    const parseDate = (dateString: string): Date => {
        const [day, month, year] = dateString.split("/").map(Number);
        return new Date(2000 + year, month - 1, day); // Ajusta el año y el mes
    };

    const checkInDate = parseDate(checkIn);
    const checkOutDate = parseDate(checkOut);
    
    const numberOfNights = Math.max(0, (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));

    const IVA = 0.10;
    const precioIVA = (selectedRoom.price * IVA).toFixed(2); // Redondea a 2 decimales

    const total = (parseFloat(selectedRoom.price) + parseFloat(precioIVA)).toFixed(2); // Redondea a 2 decimales

    return (
        <>
            <div className="py-10">
                <h1 className="text-xl text-start font-bold">Factura</h1>
                <article className="border border-slate-300 p-5 rounded-sm">
                    <div className="flex items-end justify-between gap-5 md:gap-5 text-sm">
                        <div>
                            <h1 className="text-secondary-brown">Fecha inicio</h1>
                            <h2 className="opacity-50">Despues de las 15:00</h2>
                            <h3>{checkIn}</h3>
                        </div>
                        <span className="text-secondary-brown self-center">
                            <ArrowRightOutlined />
                        </span>
                        <div>
                            <h1 className="text-secondary-brown">Fecha fin</h1>
                            <h2 className="opacity-50">Antes de las 12:00</h2>
                            <h3>{checkOut}</h3>
                        </div>
                        <div >
                            <h1 className="font-bold">{numberOfNights} Noches</h1>
                        </div>
                    </div>
                    <div className="h-[1px] bg-slate-300 my-5"></div>
                    <div>
                        <h1 className="font-bold text-secondary-brown">Detalles de la habitación</h1>
                        <h1 className="font-bold">{selectedRoom.name}</h1>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <p>Tarifa regular, desayuno incluido</p>
                                    <p>$ {selectedRoom.price}</p>
                                </div>
                                <button className="border-0 border-b border-slate-800 hover:cursor-pointer self-end text-sm opacity-50">Ver Detalles</button>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="font-bold">Impuestos y tasas</h1>
                                <div>
                                    <p className="text-end">$ {precioIVA}</p>
                                    <button className="border-0 border-b border-slate-800 hover:cursor-pointer self-end text-sm opacity-50">Ver Detalles</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[1px] bg-slate-300 my-5"></div>
                    <span className="flex justify-between font-bold">
                        <h1 className="text-lg">Total a pagar</h1>
                        <span className="text-end">
                            <h2>$ {total}</h2>
                            <p className="text-xs font-light opacity-50">IVA e impuestos incluidos</p>
                        </span>
                    </span>
                </article>
            </div>
        </>
    )
}