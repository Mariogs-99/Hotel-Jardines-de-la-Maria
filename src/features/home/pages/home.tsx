import BackgroundCarrousel from "../../../shared/backgroundCarrousel";
import CollapseComponent from "../components/collapse";
import Title from "../../../shared/title";
import CategoriesImages from "../components/categoriesImages";
import InstagramSection from "../components/instagramSection";
import RoomsBackgroundImages from "../../../shared/roomsBackgroundImage/roomsBackgroundImages";

import decorator from "../../../assets/decorator.svg"
import "./iconCustomization.css";
import { motion } from "framer-motion";
import { LiaBedSolid } from "react-icons/lia";
import {
  PiSwimmingPool,
  PiFlowerLotusLight,
  PiChurchLight,
} from "react-icons/pi";
import { LuCalendarCheck } from "react-icons/lu";
import { IoRestaurantOutline } from "react-icons/io5";
import { useReservation } from "../../../context/reservationContext";

function Home() {

  const { lang } = useReservation()
  return (
    <div>
      <BackgroundCarrousel
        type="home"
        text={`${lang == 'es' ? "Vive la magia de Suchitoto con el confort que mereces" : "Live the magic of Suchitoto with the comfort you deserve"}`}
        className="h-[70vh] md:h-screen"
      />
      <div className="flex items-center justify-center md:px-[10%]">
        <embed src={decorator} className="md:h-5 h-3 px-1 hidden md:flex"/>
        <Title className="text-center">
          {`${lang == 'es' ? "Sumérgete en la historia y la cultura de Suchitoto mientras disfrutas de una estancia acogedora en nuestro hotel." :"Immerse yourself in the history and culture of Suchitoto while enjoying a cozy stay at our hotel." }`}
        </Title>
        <embed src={decorator} className="md:h-5 rotate-180 hidden md:flex"/>
      </div>
      {/* Infor del lugar */}
      <section className="grid md:grid-cols-[40%_60%] justify-between bg-[#9F8F7C]">
        <motion.article
          className="order-2 md:order-1 flex flex-col gap-5 py-10 px-5 md:p-10 justify-center font-title text-primary-brown"
          initial={{ opacity: 1, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CollapseComponent />
        </motion.article>
        <motion.article
          className="order-1 md:order-2 "
          // initial={{ opacity: 0, x: 150 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 0.7 }}
          // viewport={{ once: true }}
        >
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/d0/9e/06/areas-comunes.jpg?w=900&h=500&s=1"
            alt="hotel_habitacion"
            className=" w-full object-cover md:h-[80vh] px-10 pt-10 md:p-10"
          />
        </motion.article>
      </section>

      {/* Imagen de fondo con banner */}
      <RoomsBackgroundImages text="Descansa, descubre y disfruta" />

      {/* Ventajas y servicios a ofrecer */}
      <motion.section
        className="py-10 px-2 md:p-20"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Title className="pb-0 pt-0 text-center">Jardín de las Marías</Title>
        <Title className="pt-0 text-center">
          Un destino que combina historia y naturaleza
        </Title>
        <article className="grid grid-cols-1 sm:grid-cols-2 gap-14 md:gap-10 justify-center items-center w-full px-10 md:px-52 text-lg opacity-75 pb-10">
          <div className="flex md:grid-cols-[15%_85%] justify-items-center md:justify-items-start items-center gap-5">
            <PiChurchLight className="text-black opacity-40 size-12 self-center" />
            <p className="text-start md:text-start">
              Vistas increíbles a la Parroquia Santa Lucía
            </p>
          </div>
          <div className="flex md:grid-cols-[15%_85%] justify-items-center md:justify-items-start items-center gap-5">
            <PiFlowerLotusLight className="text-black opacity-40 size-12 self-center" />
            <p className="text-start md:text-start">Jardines y terrazas</p>
          </div>
          <div className="flex md:grid-cols-[15%_85%] justify-items-center md:justify-items-start items-center gap-5">
            <LiaBedSolid className="text-black opacity-40 size-12 stroke-[2%] stroke-white" />
            <p className="text-start md:text-start">
              Hasta 15 habitaciones disponibles
            </p>
          </div>
          <div className="flex md:grid-cols-[15%_85%] justify-items-center md:justify-items-start items-center gap-5">
            <PiSwimmingPool className="text-black opacity-40 size-13 stroke-[2%] stroke-white" />
            <p className="text-start md:text-start">Área de piscina privada</p>
          </div>
          <div className="flex md:grid-cols-[15%_85%] justify-items-center md:justify-items-start items-center gap-5">
            <LuCalendarCheck className="text-black opacity-40 size-11 stroke-[5%]" />
            <p className="text-start md:text-start">
              Salones especiales para eventos
            </p>
          </div>
          <div className="flex md:grid-cols-[15%_85%] justify-items-center md:justify-items-start items-center gap-5">
            <IoRestaurantOutline className="text-black opacity-40 size-10 stroke-[2%] stroke-custom" />
            <p className="text-start md:text-start">
              Diferentes platillos de comida tipica
            </p>
          </div>
        </article>
      </motion.section>

      {/* Actividades a realizar */}
      <section>
        <CategoriesImages />
      </section>

      {/* Mapa */}
      <section
        className="h-[70vh] md:h-screen"
        style={{ width: "100%", overflow: "hidden", padding: "5%" }}
      >
        <Title className="pt-10 md:pt-0 pb-0 text-center">Suchitoto</Title>
        <h2 className="font-body text-center text-xl font-extralight text-gray-600 pb-10">
          Ubicación
        </h2>
        {/* <Map></Map> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.395325601925!2d-89.03004842588005!3d13.935051293026426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f636be212fc02b9%3A0xa91d6ccc9a2f91e4!2sHotel%20Jard%C3%ADn%20de%20las%20Mar%C3%ADas!5e0!3m2!1ses!2ssv!4v1738781993429!5m2!1ses!2ssv"
          width="600"
          height="450"
          style={{ width: "100%" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Imagenes instagram */}
      <section>
        <InstagramSection />
      </section>
    </div>
  );
}

export default Home;
