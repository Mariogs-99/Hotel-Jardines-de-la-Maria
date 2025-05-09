import { createContext, useContext, useState, ReactNode } from "react";

interface ReservationContextProps {
    step: number;
    checkIn: string;
    checkOut: string;
    numberOfRooms: number;
    numberOfGuests: number;
    selectedRoom: any;
    email: string;
    telephone: number;
    lang: string;
    isDrawerOpen: boolean; // ✅ nuevo
    setStep: (step: number) => void;
    setCheckIn: (date: string) => void;
    setCheckOut: (date: string) => void;
    setNumberOfRooms: (number: number) => void;
    setNumberOfGuests: (number: number) => void;
    setEmail: (email: string) => void;
    setTelephone: (number: number) => void;
    setSelectedRoom: (room: any) => void;
    setLang: (lang: string) => void;
    setIsDrawerOpen: (isOpen: boolean) => void; // ✅ nuevo
}

const ReservationContext = createContext<ReservationContextProps | undefined>(undefined);

export const ReservationProvider = ({ children }: { children: ReactNode }) => {
    const [step, setStep] = useState(1);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [numberOfRooms, setNumberOfRooms] = useState(1);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState(0);
    const [selectedRoom, setSelectedRoom] = useState<any>(null);
    const [lang, setLang] = useState<string>('es');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // ✅ nuevo

    return (
        <ReservationContext.Provider value={{
            step, setStep,
            checkIn, setCheckIn,
            checkOut, setCheckOut,
            numberOfRooms, setNumberOfRooms,
            numberOfGuests, setNumberOfGuests,
            selectedRoom, setSelectedRoom,
            email, setEmail,
            telephone, setTelephone,
            lang, setLang,
            isDrawerOpen, setIsDrawerOpen // ✅ nuevo
        }}>
            {children}
        </ReservationContext.Provider>
    );
};

export const useReservation = () => {
    const context = useContext(ReservationContext);

    if (!context) {
        throw new Error("useReservation debe usarse dentro de un ReservationProvider");
    }
    return context;
}
