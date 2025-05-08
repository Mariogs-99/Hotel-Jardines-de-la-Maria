import BackgroundCarrousel from '../../../../shared/backgroundCarrousel'
import Title from '../../../../shared/title'
//import RoomsBackgroundImages from '../../../shared/roomsBackgroundImage/roomsBackgroundImages'
//import Map from '../../../home/components/map'
//import InformationCard from '../../../shared/cards/informationCar'
//import Separator from '../../../shared/cards/separator'


function HotelMapPage() {
    return (
        <>
            <BackgroundCarrousel type="home" className="h-[70vh]"/>
            <Title className="text-center">Ubicación</Title>
            <div className='h-[80vh] md:h-screen w-full'>
                {/* <Map/> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.395325601925!2d-89.03004842588005!3d13.935051293026426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f636be212fc02b9%3A0xa91d6ccc9a2f91e4!2sHotel%20Jard%C3%ADn%20de%20las%20Mar%C3%ADas!5e0!3m2!1ses!2ssv!4v1738781993429!5m2!1ses!2ssv" width="600" height="450" style={{width:'100%'}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div> 
            {/* <Title className="pt-0 pb-5 md:pb-20 text-center">Acceso</Title>
            <div className='px-10 md:px-40 flex flex-col gap-10'>
            <Separator />
                <InformationCard img='https://villabokeh.com/_novaimg/galleria/1444412.jpg' title="Aeropuerto" description='Villa Bokéh se encuentra en el valle de Panorama, hermana de Antigua Guatemala. Nuestro aeropuerto internacional más cercano es el Aeropuerto Internacional de La Aurora. Estamos encantados de programar tu transporte. El hotel está a una hora del aeropuerto. Póngase en contacto con el hotel si desea reservar su llegada.'/>
                <Separator />
                <InformationCard img='https://villabokeh.com/_novaimg/galleria/1444330.jpg' title="Transporte privado o helicóptero" description='Villa Bokéh puede ayudarlo a reservar un traslado privado en helicóptero desde y hacia el Aeropuerto Internacional de la Ciudad de Guatemala y otros destinos dentro de Guatemala. Un vuelo desde la ciudad de Guatemala es de aproximadamente 15 minutos.'/>
                <Separator />
                <RoomsBackgroundImages text="Ver actividades"/>           
            </div> */}
        </>
    )
}

export default HotelMapPage;
