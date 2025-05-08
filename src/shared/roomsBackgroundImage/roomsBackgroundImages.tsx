import background from "../../assets/carrousel1.jpeg"
import Button from "../../shared/button"
import { FC } from 'react';

interface InterfaceRoomsBackgroundImages {
  text: string
}

const RoomsBackgroundImages: FC<InterfaceRoomsBackgroundImages> = ({ text }) => {

  return (
    <section>
      <article className="flex flex-col gap-5 justify-center items-center text-center h-[60vh] md:h-[80vh]">
        <div className="h-[60vh] md:h-[80vh] w-full bg-black absolute -z-10 opacity-60"></div>
        <img src={background} className="md:w-full h-[60vh] md:h-[80vh] absolute -z-20 object-cover" />
        <h1 className="font-title text-3xl leading-10 md:text-5xl text-white">{text}</h1>
        <Button url="habitaciones" text="VER HABITACIONES"></Button>
      </article>
    </section>
  )
}

export default RoomsBackgroundImages