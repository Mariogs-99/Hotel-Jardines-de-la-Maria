import BackgroundCarrousel from "../../shared/backgroundCarrousel";
import InformationCard from "../../shared/cards/informationCar";
import Title from "../../shared/title";
import pool from "../../assets/pool2.jpg";
import RoomsBackgroundImages from "../../shared/roomsBackgroundImage/roomsBackgroundImages";
import Separator from "../../shared/cards/separator";
// import { Editor } from "primereact/editor";
// import { useState } from "react";

function ExperiencesPage() {
    // const [text, setText] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');

    // const renderHeader = () => {
    //     return (
    //         <span className="ql-formats">
    //             <button className="ql-bold" aria-label="Bold"></button>
    //             <button className="ql-italic" aria-label="Italic"></button>
    //             <button className="ql-underline" aria-label="Underline"></button>
    //         </span>
    //     );
    // };

    // const header = renderHeader();

    return (
        <>
            <BackgroundCarrousel type="home" className="h-[70vh] md:h-[80vh]" />
            <div className="flex flex-col justify-center pb-20">
                <Title className="text-center pt-20 pb-10">
                    Experiencias
                </Title>
                <p className="font-body leading-8 opacity-80 px-10 md:w-4xl self-center text-center text-lg">Vive Suchitoto más allá de la estadía. En nuestro hotel te ayudamos a descubrir lo mejor de este mágico destino. Cada experiencia está diseñada para conectar contigo y con la esencia de Suchitoto.</p>
            </div>

            <div className='px-10 md:px-40 flex flex-col gap-10'>
                <Separator />
                <InformationCard img={pool} title="Piscina" description='Nuestra piscina, un refugio de frescura rodeado de un entorno sereno. Relájate bajo el sol mientras disfrutas de un chapuzón refrescante o simplemente déjate llevar por el ambiente relajado.' />
                <Separator />
                <RoomsBackgroundImages text="Reserva una habitación" />
            </div>
            {/* <div className="card">
            <Editor value={text} onTextChange={(e) => console.log(e.htmlValue)} headerTemplate={header} style={{ height: '320px' }} />
        </div> */}
        </>
    )
}

export default ExperiencesPage;