import BackgroundCarrousel from "../../shared/backgroundCarrousel";
import InformationCard from "../../shared/cards/informationCar";
import Title from "../../shared/title";
import event1 from "../../assets/meetingroom.jpeg"
import RoomsBackgroundImages from "../../shared/roomsBackgroundImage/roomsBackgroundImages";
import Separator from "../../shared/cards/separator";
import { WhatsAppOutlined } from "@ant-design/icons";

function EventsPage() {
    return (
        <div>
            <BackgroundCarrousel type="home" className="h-[80vh]" />
            <div className="flex flex-col justify-center pb-20">
                <Title className="text-center pt-20 pb-0">
                    Eventos
                </Title>
                <h2 className="text-center pb-10 opacity-75">Bodas y reuniones</h2>
                <button className="bg-primary-brown px-8 py-5 text-white text-lg self-center flex items-center gap-5"><WhatsAppOutlined /> Haz tu cita para conocer la propiedad</button>
            </div>

            <div className='px-10 md:px-40 flex flex-col gap-10'>
                <Separator />
                <InformationCard img={event1} title="Salón de reuniones" description='Ofrecemos un elegante y moderno salón de reuniones, ideal para conferencias, presentaciones, capacitaciones y eventos privados. Nuestro espacio ha sido diseñado para brindar comodidad, funcionalidad y tecnología de vanguardia, garantizando el éxito de cualquier evento.' />
                <Separator />
                <RoomsBackgroundImages text="Reserva una habitación" />

            </div>

        </div>
    )
}

export default EventsPage;