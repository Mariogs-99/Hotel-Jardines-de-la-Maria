import img1 from "../assets/carrousel1.jpeg"
import img2 from "../assets/carrousel2.jpeg"
import img4 from "../assets/carrousel4.jpeg"
import img5 from "../assets/carrousel5.jpg"
import rooms from "../assets/bedroom2.jpeg"
import restaruant from "../assets/restaurant.jpeg"

import { Carousel } from "antd";
import { FC, HTMLProps } from 'react';

interface Props {
    type: string;
    text?: string;
    className?: HTMLProps<HTMLElement>["className"];
  }
  
  const BackgroundCarrousel: FC<Props> = ({ type, text, className }) => {
    const images = type === "home" ? [img1, img2, img4, img5] : type === "rooms" ? [rooms] : [restaruant];
  
    return (
      <section className="relative">
        <div className={`${className} bg-gradient-to-b from-black via-transparent to-black w-full absolute z-10 opacity-70`}></div>
  
        <Carousel autoplay dots={false} effect="fade" speed={600}>
          {images.map((image, index) => (
            <img key={index} src={image} alt="background" className={`${className} w-full object-cover`} />
          ))}
        </Carousel>
  
        <p className="flex bg-primary-brown md:bg-transparent text-white md:absolute md:w-[40%] p-8 md:p-10 text-4xl md:text-4xl font-title font-medium leading-10 md:leading-14 z-10 bottom-0">
          { text }
        </p>
      </section>
    );
  };

export default BackgroundCarrousel;