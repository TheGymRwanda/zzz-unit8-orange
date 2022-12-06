import { calcLength } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Stage, Layer, Image } from "react-konva";
import images from "../../../data/gallery";

const Gallery = () => {
  const [image, setImage] = useState(null);
  const [rectangles, setRectangles] = useState();
  const [canvasWidth, setCanvasWidth] = useState();
  const [canvasHeight, setCanvasHeight] = useState();

  const imagesRef = useRef([]);
  const indexRef = useRef(0);
  const containerRef = useRef();

  useEffect(() => {
    setImage({
      image: imagesRef.current[0],
      width: images[0].width,
      height: images[0].height,
      alt: "gallery image",
    });
    setCanvasHeight(containerRef.current.clientHeight);
    setCanvasWidth(containerRef.current.clientWidth);

  }, []);

  const handleDisplayImage = (e) => {
    indexRef.current += 1;
    if (indexRef.current > images.length - 1) indexRef.current = 0;
    console.log(e.nativeEvent.x, e.nativeEvent.y);
    setImage({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      image: imagesRef.current[indexRef.current],
      width: images[indexRef.current].width,
      height: images[indexRef.current].height
    });
  };

  return (
    <div className="relative h-screen w-full" ref={containerRef}>
      <div
        className="absolute z-50 w-full h-full border-4 border-sky-900"
        onMouseMove={handleDisplayImage}
      >
        <Stage width={canvasWidth} height={canvasHeight}>
          <Layer>
            {image && (
              <Image
                image={image.image}
                width={image.width}
                height={image.height}
                x={image.x}
                y={image.y}
                alt="gallery image"
              />
            )}
          </Layer>
        </Stage>
      </div>
      <div className="h-0 w-0 opacity-0">
        {images.map((picture, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={picture.url}
            key={i}
            ref={(el) => (imagesRef.current[i] = el)}
            alt="Image"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
