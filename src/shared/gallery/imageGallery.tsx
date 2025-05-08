import { FC } from "react";
import { Image } from 'primereact/image';

interface ImageGalleryProps {
  images: { src: string, size: string }[];
}

const ImageGallery:FC<ImageGalleryProps> = ({images}) => {
  return (
    <div className="w-full pb-3">
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-3 md:auto-rows-[20vh]">

        {images.map((image, index) => (
          <div key={index} className={`overflow-hidden  ${image.size}`}>
            <Image
              src={image.src}
              alt="Image"
              preview
              width="100%"
              loading="lazy"
              className="w-full h-full [&>img]:w-full [&>img]:h-full [&>img]:object-cover pb-1 md:pb-0"
            />

          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
