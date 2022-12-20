import { useCallback, useEffect, useRef, useState } from "react";
import images from "../../../data/gallery";
import { Stage, Layer, Image, Rect } from "react-konva";
import { useMediaQuery } from "react-responsive";

const Gallery = () => {
  const [image, setImage] = useState(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [rectangles, setRectangles] = useState([]);
  const [showText, setShowText] = useState(true);
  const [totalDistance, setTotalDistance] = useState(0);
  const [oldPointerX, setOldPointerX] = useState(0);
  const [oldPointerY, setOldPointerY] = useState(0);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);

  const imageRef = useRef(null);
  const imagesRef = useRef([]);
  const previousImage = useRef(null);
  const currentIndex = useRef(0);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const tabletScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  const mobileScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    // Add an initial image on large screen
    setImage(
      tabletScreen
        ? null
        : {
            image: imagesRef.current[0],
            x: 60,
            y: 10,
            width: tabletScreen
              ? mobileScreen
                ? images[0].width / 4
                : images[0].width / 3
              : images[0].width / 2.2,
            height: tabletScreen
              ? mobileScreen
                ? images[0].height / 4
                : images[0].width / 3
              : images[0].height / 2.2,
          }
    );
    setIsImageVisible(!tabletScreen);

    // setting the canvas size to the container size
    setCanvasWidth(containerRef.current.clientWidth);
    setCanvasHeight(containerRef.current.clientHeight);

    //handling canvas container size on resize event
    const resize = () => {
      setCanvasHeight(containerRef.current.clientHeight);
      setCanvasWidth(containerRef.current.clientWidth);
      if (tabletScreen) setCanvasHeight(containerRef.current.clientHeight);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [tabletScreen, mobileScreen]);

  // calculates the coordinates of the image
  const calculatePosition = useCallback(
    (event, imageHeight, imageWidth) => {
      let x = event.nativeEvent.offsetX;
      let y = event.nativeEvent.offsetY;

      // on Device boundary we touches the boundary instead of being cut
      x =
        canvasWidth - x < imageWidth * devicePixelRatio
          ? canvasWidth - imageWidth * devicePixelRatio
          : (imageWidth * devicePixelRatio) / 2 > x
          ? 0
          : x - (imageWidth * devicePixelRatio) / 2;

      if (tabletScreen) {
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
    },
    [canvasHeight, canvasWidth, tabletScreen]
  );

  // updates gray rectangles on the screen
  const updateRectangles = useCallback(
    (rectangles) => {
      if (image) {
        const newRects = [
          ...rectangles,
          { x: image.x, y: image.y, width: image.width, height: image.height },
        ];
        setShowText(false);
        previousImage.current = image;
        setRectangles(newRects);
        setImage(null);
      }
    },
    [image]
  );
  // handleClick handles
  const handleClick = (event) => {
    const pointerThreshold = 200;

    if (!tabletScreen) {
      setTotalDistance(
        totalDistance +
          Math.pow(oldPointerY - event.nativeEvent.offsetY, 2) +
          Math.pow(oldPointerX - event.nativeEvent.offsetX, 2)
      );
    }

    if (tabletScreen || totalDistance >= pointerThreshold) {
      setTotalDistance(0);
      setIsImageVisible(true);
      updateRectangles(rectangles);
      currentIndex.current += 1;
      if (currentIndex.current >= images.length) currentIndex.current = 0;
      let { width, height } = images[currentIndex.current];

      // on Desktop we take the whole height of the image
      // on Mobile we take a third of the original height
      // on Tablet we take half of the original height
      height = !tabletScreen
        ? images[currentIndex.current].height / 2.2
        : mobileScreen
        ? images[currentIndex.current].height / 4
        : images[currentIndex.current].height / 3;

      // on Desktop we take the whole width of the image
      // on Mobile we take a third of the original width
      // on Tablet we take half of the original width
      width = !tabletScreen
        ? images[currentIndex.current].width / 2.2
        : mobileScreen
        ? images[currentIndex.current].width / 4
        : images[currentIndex.current].width / 3;

      const { x, y } = calculatePosition(event, height, width);
      // updating the image state
      setImage({
        x,
        image: imagesRef.current[currentIndex.current],
        y,
        isImageVisible: false,
        width,
        height,
      });
    }

    setOldPointerX(event.nativeEvent.offsetX);
    setOldPointerY(event.nativeEvent.offsetY);
  };
  return (
    <div className="w-full mb-12 xl:max-w-page xl:px-16 mx-auto relative">
      <div className="w-full h-screen relative" ref={containerRef}>
        <div className="w-0 h-0 opacity-0">
          {images.map(({ url, width, height }, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              ref={(el) => (imagesRef.current[index] = el)}
              width={width}
              height={height}
              src={url}
              key={index}
              alt={"gallery image " + index}
            />
          ))}
        </div>
        <div
          onClick={tabletScreen ? handleClick : null}
          onMouseMove={tabletScreen ? null : handleClick}
          className="w-full bg-opacity-20 h-full z-50 absolute"
        ></div>
        {tabletScreen && showText && (
          <div className="text-center absolute text-xl top-1/2 left-1/2 text-neutral-400 -translate-x-1/2 -translate-y-1/2">
            Tap anywhere to see more of us
          </div>
        )}
        <Stage
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight * devicePixelRatio}
        >
          <Layer>
            {rectangles.length > 0 &&
              rectangles.map(({ y, x, width, height }, index) => (
                <Rect
                  fill="#E4E4E4"
                  key={index}
                  x={x}
                  y={y}
                  width={width * devicePixelRatio}
                  height={height * devicePixelRatio}
                />
              ))}
            {image && (
              <Image
                image={image.image}
                x={image.x}
                y={image.y}
                width={image.width * devicePixelRatio}
                height={image.height * devicePixelRatio}
                ref={imageRef}
                isImageVisible={isImageVisible}
                alt="gallery image"
              />
            )}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Gallery;