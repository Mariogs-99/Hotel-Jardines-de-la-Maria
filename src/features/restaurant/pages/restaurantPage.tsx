import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import Title from "../../../shared/title";
import BackgroundCarrousel from "../../../shared/backgroundCarrousel";
import menu from "../../../assets/menu2.pdf";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import restaurant from "../../../assets/restaurant-2.jpeg"
import iconRestaurant from "../../../assets/chef-hat-icon.png"

// Images
import img1 from "../../../assets/restaurant/food1.jpeg"
import img2 from "../../../assets/restaurant/food2.jpeg"
import img3 from "../../../assets/restaurant/food3.jpeg"
import img4 from "../../../assets/restaurant/food4.jpeg"
import img5 from "../../../assets/restaurant/food5.jpeg"
import img6 from "../../../assets/restaurant/food6.jpeg"
import img7 from "../../../assets/restaurant/food7.jpeg"
import img8 from "../../../assets/restaurant/food8.jpeg"
import ImageGallery from "../../../shared/gallery/imageGallery";

const images = [
  { src: img1, size: "row-span-2" },
  { src: img2, size: "row-span-2" },
  { src: img3, size: "row-span-2" },
  { src: img4, size: "row-span-2" },
  { src: img5, size: "col-span-2 row-span-4" },
  { src: img6, size: "row-span-2" },
  { src: img7, size: "row-span-4" },
  { src: img8, size: "row-span-2" },
];

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function RestaurantPage() {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfHeight, setPdfHeight] = useState<number>(window.innerWidth < 768 ? 600 : Math.min(window.innerHeight, window.innerWidth * 0.8));

  useEffect(() => {
    const handleResize = () => {
      setPdfHeight(window.innerWidth < 768 ? 600 : Math.min(window.innerHeight, window.innerWidth * 0.8));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: any }): void {
    setNumPages(numPages);
    setPageNumber(1);
  }
  const [pageHeight, setPageHeight] = useState<number | null>(null);

  function onPageLoad({ height }: { height: number }) {
    if (!pageHeight) {
      setPageHeight(height); // Solo guarda la altura en la primera carga
    }
  }


  function changePage(offset: number): void {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1); // Pasa directamente el número como argumento
  }

  function nextPage() {
    changePage(1); // Pasa directamente el número como argumento
  }

  return (
    <>
      <BackgroundCarrousel
        type="restaruant"
        className="h-[70vh]"
      />
      <span className="flex flex-col justify-center items-center py-10">
        <img src={iconRestaurant} alt="icon" className="h-16" />
        <Title className="text-center pb-0 pt-0">Restaurante</Title>
      </span>
      <div className="w-full flex justify-center">
        <div className="h-0.5 bg-primary-brown opacity-50 w-[50%]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start ">
        <article className="flex flex-col justify-center items-center h-full ">
          <Title className="text-secondary-brown text-center pt-10 pb-0 md:pb-10">Menú</Title>
          <div className="w-full h-screen flex justify-center items-center overflow-hidden">
          <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className="hover:brightness-90 h-full px-5 bg-slate-100"
            >
              <LeftOutlined />
            </button>
            <div>
              <Document file={menu} onLoadSuccess={onDocumentLoadSuccess}>
                <Page
                  pageNumber={pageNumber}
                  height={pdfHeight}
                  onLoadSuccess={onPageLoad}
                  loading={<p className="text-center text-gray-500">Cargando página...</p>}
                />
              
              </Document>
            </div>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
              className="hover:brightness-90 h-full px-5 bg-slate-100"
            >
              <RightOutlined />
            </button>

          </div>
          <div className="flex bg-hover-brown p-2 gap-5">
            
            <p>
              {pageNumber || (numPages ? 1 : "--")} de {numPages || "--"}
            </p>
            
          </div>
        </article>

        <article className="flex flex-col">
          <Title className="text-secondary-brown text-center pt-10 pb-10">Horarios</Title>
          <div className="flex flex-cols justify-center items-center h-[80vh] md:h-screen ">
            <img src={restaurant} alt="" className="relative self-center brightness-35 h-[100%]  -emerald-500" />
            <span className=" absolute text-center leading-8  text-white z-10 gap-10 flex flex-col">
              <span>
                <h2 className="font-title text-2xl">Diariamente</h2>
                <p>7 a.m. a 10 p.m.</p>
              </span>
              <span>
                <h2 className="font-title text-2xl">Room Service</h2>
                <p>7 a.m. a 10 p.m.</p>
              </span>
            </span>
          </div>
        </article>
      </div>
      <div>
        <Title className="text-center text-secondary-brown">Galeria</Title>
        <ImageGallery images={images}/>
      </div>
    </>
  );
}

export default RestaurantPage;
