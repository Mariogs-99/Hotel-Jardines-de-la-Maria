import Title from "../../../../shared/title";
import BackgroundCarrousel from "../../../../shared/backgroundCarrousel";
import ImageGallery from "../../../../shared/gallery/imageGallery";
import RoomsBackgroundImages from "../../../../shared/roomsBackgroundImage/roomsBackgroundImages";
import img1 from "../../../../assets/carrousel1.jpeg"
import img2 from "../../../../assets/carrousel2.jpeg"
import img3 from "../../../../assets/carrousel3.jpeg"
import img4 from "../../../../assets/meetingroom.jpeg"
import img5 from "../../../../assets/instagram/insta1.jpeg"
import img6 from "../../../../assets/instagram/insta2.jpeg"
import img7 from "../../../../assets/instagram/insta3.jpeg"
import img8 from "../../../../assets/instagram/insta4.jpeg"

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

function Gallery(){
    return(
        <>
            <BackgroundCarrousel type="rooms" className="h-[70vh]" />
                <Title className="text-center">Galería</Title>
                <ImageGallery images={images}/>
                <RoomsBackgroundImages text="Ver actividades"/>            
        </>
    )
}

export default Gallery;