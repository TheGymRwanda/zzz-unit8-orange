import { useRef } from "react";
import Slider from "react-slick";
import articles from "../../../data/articles";
import BlogItem from "../../cards/BlogItem";
import ArrowIcon from "../../ui/ArrowIcon";
import Title from "../../ui/Title";
import Wrapper from "../Wrapper";

const Blog = () => {
  const nextRef = useRef();
  const prevRef = useRef();
  const PrevArrow = ({ onClick }) => (
    <div ref={prevRef} onClick={onClick} className="hidden"></div>
  );
  const NextArrow = ({ onClick }) => (
    <div ref={nextRef} onClick={onClick} className="hidden"></div>
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Wrapper>
      <div className="mt-28">
        <div className="mb-7 flex items-end gap-4">
          <Title name="Blog" />
          <div className="flex items-center text-primaryGray-400 gap-2">
            <span onClick={() => prevRef.current.click()}>
              <ArrowIcon variant="rotate-90 cursor-pointer" />
            </span>

            <span onClick={() => nextRef.current.click()}>
              <ArrowIcon variant="-rotate-90 mb-0.75 cursor-pointer" />
            </span>
          </div>
        </div>
        <Slider {...settings}>
          {articles.map((item, index) => (
            <BlogItem key={index} {...item} />
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default Blog;
