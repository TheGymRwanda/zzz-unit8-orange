import { calcLength } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Stage, Layer, Image, Rect } from "react-konva";
import images from "../../../data/gallery";

const Gallery = () => {
  const [image, setImage] = useState(null);
  const [rectangles, setRectangles] = useState([]);
  const [canvasWidth, setCanvasWidth] = useState();
  const [canvasHeight, setCanvasHeight] = useState();
  // you need other two states oldX and oldY
  // you also need totalDistance state

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

  // calculate position should return x and y that puts the cursor at the center of the image
  // const calculatePosition = useCallback((event, width, height) => {}, [canvasWidth, canvasHeight]);
  /*
  let x = event.nativeEvent.offsetX;
      let y = event.nativeEvent.offsetY;

      // on Device boundary we touches the boundary instead of being cut
      x =
        canvasWidth - x < imageWidth * devicePixelRatio
          ? canvasWidth - imageWidth * devicePixelRatio
          : (imageWidth * devicePixelRatio) / 2 > x
          ? 0
          : x - (imageWidth * devicePixelRatio) / 2;

      if (isTablet) {
        y =
          canvasHeight - y < imageHeight * devicePixelRatio
            ? canvasHeight - imageHeight * devicePixelRatio
            : (imageHeight * devicePixelRatio) / 2 > y
            ? 0
            : y - (imageHeight * devicePixelRatio) / 2;
      } else {
        y =
          canvasHeight - y < imageHeight
            ? canvasHeight - imageHeight * devicePixelRatio
            : (imageHeight * devicePixelRatio) / 2 > y
            ? 0
            : y - (imageHeight * devicePixelRatio) / 2;
      }
      return { x, y };
  */

  const handleDisplayImage = (e) => {
    // you need thresholdDistance(constant) to track distance
    // setTotalDistance(totalDistance + Math.pow(oldY - e.nativeEvent.offsetY, 2) + Math.pow(oldX - e.nativeEvent.offsetX, 2))
    /* 
    if (totalDistance >= thresholdDistance) {
       // set totalDistance back to zero
       // update rectangles by adding a new object to the array with  x, y, width and height of previous image  
       // #oldLogic
       // width =  images[indexRef.current].width
       // height = images[indexRef.current].height
       // create a function calculatePosition(event: Event, width: number, height: number) : {x: number, y: number}
       
    }
    */
    // set oldX and oldY
    


    // old implementation #oldLogic
    // indexRef.current += 1;
    // if (indexRef.current > images.length - 1) indexRef.current = 0;

    // Don't care about this
    // console.log(e.nativeEvent.x, e.nativeEvent.y);
    // setImage({
    //   x: e.nativeEvent.offsetX,
    //   y: e.nativeEvent.offsetY,
    //   image: imagesRef.current[indexRef.current],
    //   width: images[indexRef.current].width,
    //   height: images[indexRef.current].height
    // });
  };

  return (
    <div className="relative h-screen w-full" ref={containerRef}>
      <div
        className="absolute z-50 w-full h-full border-4 border-sky-900"
        onMouseMove={handleDisplayImage}
      >
        <Stage width={canvasWidth} height={canvasHeight}>
          <Layer>
            {
              rectangles.map(({x, y, width, height}) => (
                <Rect 
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill="#ccc"
                />
              ))
            }
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
