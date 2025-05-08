// import logo from "../assets/logo.png";
import { EnvironmentOutlined, FacebookOutlined, InstagramOutlined, TikTokOutlined } from "@ant-design/icons";
import logo from "../assets/logo.png";

function Footer() {
    return (
        <footer className="bg-[#ebe8e4] grid md:flex justify-center items-center gap-10 p-20 ">
            <div className=" grid md:flex gap-10 justify-items-center">
                <img src={logo} alt="" />
                <span className="flex flex-col font-body text-base text-[#3F6C42] gap-2 items-center md:items-start">
                    <p>Suchitoto</p>
                    <p>Cuscatlán</p>
                    <p>Tel: +503 7890 5449</p>
                    <p>jardindelasmariashotel@gmail.com </p>
                </span>
            </div>
            <div className="rotate-180 h-[1px] w-[70vw] md:flex md:h-32 md:w-[1px] bg-primary-brown opacity-35"></div>

            <div className="flex flex-col gap-5 text-[#3F6C42] justify-center items-start">
                <article className="flex gap-3">
                    <FacebookOutlined className="text-2xl" />
                    <h6>Hotel Jardín de las Marías - Suchitoto </h6>
                </article>
                <article className="flex gap-3">
                    <InstagramOutlined className="text-2xl" />
                    <h6>@hoteljardindelasmarias</h6>
                </article>
                <article className="flex gap-3">
                    <EnvironmentOutlined className="text-2xl " />
                    <h6>2a Avenida Sur 23, Suchitoto</h6>
                </article>
                <article className="flex gap-3">
                    <TikTokOutlined className="text-2xl " />
                    <h6>Hotel Jardin de las Marias</h6>
                </article>
            </div>
        </footer>
    )
}

export default Footer