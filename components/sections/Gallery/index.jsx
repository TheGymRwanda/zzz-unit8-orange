import { useState, useRef, useEffect } from "react";
import { Stage, Layer, Image } from "react-konva";
import images from "../../../data/gallery";

const Gallery = () => {
  const [pictures, setPictures] = useState(images);
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const imagesRef = useRef([]);
  useEffect(() => {
    setImage({
      image: imagesRef.current[0],
      width: images[0].width,
      height: images[0].height,
      alt: "gallery image",
    });
  }, []);

  const handleDisplayImage = (e) => {
    console.log(e);
  };

  return (
    <div className="relative h-[95vh] w-[80%]">
      <div
        className="absolute z-50 w-full h-full"
        onMouseMove={(e) => handleDisplayImage(e)}
      ></div>
      <div className="h-0 w-0 opacity-0">
        {pictures.map((picture, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={picture.url}
            key={i}
            ref={(el) => (imagesRef.current[i] = el)}
            alt="blah"
          />
        ))}
      </div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {image && (
            <Image
              image={image.image}
              width={image.width}
              height={image.height}
              alt="hshshs"
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default Gallery;
