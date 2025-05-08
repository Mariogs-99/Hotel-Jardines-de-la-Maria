import { InstagramOutlined } from "@ant-design/icons";
import Title from "../../../shared/title";
import insta1 from "../../../assets/instagram/insta1.jpeg"
import insta2 from "../../../assets/instagram/insta2.jpeg"
import insta3 from "../../../assets/instagram/insta3.jpeg"
import insta4 from "../../../assets/instagram/insta4.jpeg"
import insta5 from "../../../assets/instagram/insta5.jpeg"

const imagesList = [
    { img: insta1, url: "ejemplo.com" },
    { img: insta2, url: "ejemplo.com" },
    { img: insta3, url: "ejemplo.com" },
    { img: insta4, url: "ejemplo.com" },
    { img: insta5, url: "ejemplo.com" }
];

function InstagramSection() {

    return (
        <section className="pt-20 pb-0 md:py-20 flex flex-col justify-center items-center">
            <InstagramOutlined className="text-2xl text-center pb-5" />
            <Title className="pt-0 pb-0">Disfruta el viaje</Title>
            <a className="opacity-75 hover:opacity-100 transition-all duration-300 hover:cursor-pointer">@hoteljardindelasmarias</a>

            <article className="flex flex-wrap md:flex-wrap justify-center gap-1 md:gap-4 w-full py-10">
            {imagesList.map((image, index) => (
                    <div
                        key={index}
                        className="relative h-[60vh] w-full md:w-[17vw] overflow-hidden group"
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-5 justify-center items-center">
                            <span className="border border-slate-400 absolute rounded-sm z-10 h-[90%] w-[90%]"></span>
                            <InstagramOutlined className="text-5xl text-center pb-5" style={{color:"#fff"}}/>
                            <button className="border border-white py-2 px-4 rounded-sm text-white opacity-100 hover:cursor-pointer hover:bg-white hover:text-purple-600 hover:font-bold z-30 transition-all duration-300">Ver en instagram</button>
                        </div>

                        {/* Imagen */}
                        <img
                            src={image.img}
                            alt=""
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </article>

        </section>
    )
}

export default InstagramSection;