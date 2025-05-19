import { useEffect, useState } from "react";
import BackgroundCarrousel from "../../shared/backgroundCarrousel";
import Title from "../../shared/title";
import RoomsBackgroundImages from "../../shared/roomsBackgroundImage/roomsBackgroundImages";
import Separator from "../../shared/cards/separator";
import { WhatsAppOutlined } from "@ant-design/icons";
import { getPublicEvents, PublicEventDTO } from "./services/publicEventServices";

// Imagen por defecto si no hay imagen del evento
const DEFAULT_EVENT_IMAGE = "/images/default-event.webp";

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_URL;

function EventsPage() {
  const [events, setEvents] = useState<PublicEventDTO[]>([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await getPublicEvents();
      setEvents(data);
    } catch (error) {
      console.error("Error al cargar eventos públicos:", error);
    }
  };

  const formatDateArray = (dateArray: number[]) => {
    const [year, month, day] = dateArray;
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getImageUrl = (relativePath: string | null) => {
    if (!relativePath) return DEFAULT_EVENT_IMAGE;
    return `${IMAGE_BASE_URL.replace(/\/$/, "")}/${relativePath.replace(/^\//, "")}`;
  };

  return (
    <div>
      <BackgroundCarrousel type="home" className="h-[80vh]" />

      <div className="flex flex-col justify-center pb-20">
        <Title className="text-center pt-20 pb-0">Eventos</Title>
        <h2 className="text-center pb-10 opacity-75">Bodas y reuniones</h2>
        <button className="bg-primary-brown px-8 py-5 text-white text-lg self-center flex items-center gap-5">
          <WhatsAppOutlined /> Haz tu cita para conocer la propiedad
        </button>
      </div>

      <div className="px-6 md:px-40 flex flex-col gap-10">
        <Separator />

        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row gap-6 rounded-2xl shadow-lg overflow-hidden border border-gray-200 bg-white"
          >
            <div className="md:w-1/2 h-[250px] md:h-auto">
              <img
                src={getImageUrl(event.imageUrl)}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between p-6 md:w-1/2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
              </div>
              <div className="text-sm text-gray-500 space-y-1">
                <p>📅 Fecha: <span className="text-gray-700">{formatDateArray(event.eventDate)}</span></p>
                <p>👥 Capacidad: <span className="text-gray-700">{event.capacity} personas</span></p>
                <p>💵 Precio: <span className="text-gray-700">${event.price.toFixed(2)}</span></p>
              </div>
            </div>
          </div>
        ))}

        <Separator />
        <RoomsBackgroundImages text="Reserva una habitación" />
      </div>
    </div>
  );
}

export default EventsPage;
