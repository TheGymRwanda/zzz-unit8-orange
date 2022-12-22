import { useRef, useState } from "react";
import articles from "../../../data/articles";
import BlogItem from "../../cards/BlogItem";
import ArrowIcon from "../../ui/ArrowIcon";
import Title from "../../ui/Title";
import Wrapper from "../Wrapper";

const Blog = () => {
  const itemRef = useRef();
  const itemsContainerRef = useRef();
  const [offset, setoffset] = useState(0);

  const debounce = (cb) => {
    let timeout;
    return () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(cb, 1000);
    };
  };

  return (
    <Wrapper>
      <div className="mt-28">
        <div className="mb-7 flex items-end gap-4">
          <Title name="Blog" />
          <div className="hidden xl:flex items-center text-primaryGray-400 gap-2">
            <span
              onClick={() => {
                itemsContainerRef.current.scrollLeft -=
                  itemRef.current?.clientWidth + 20;
              }}
            >
              <ArrowIcon
                variant={`rotate-90 cursor-pointer ${
                  offset <= 0 ? "" : "text-[#5602E0]"
                }`}
              />
            </span>

            <span
              onClick={() => {
                itemsContainerRef.current.scrollLeft +=
                  itemRef.current?.clientWidth + 20;
              }}
            >
              <ArrowIcon
                variant={`-rotate-90 mb-0.75 cursor-pointer ${
                  offset <
                    itemsContainerRef.current?.scrollWidth -
                      itemsContainerRef.current?.clientWidth ||
                  !itemsContainerRef.current?.clientWidth
                    ? "text-[#5602E0]"
                    : ""
                }`}
              />
            </span>
          </div>
        </div>
        <div className="relative sm:-mr-9 lg:-mr-16 2xl:mr-auto">
          <div
            className="w-full overflow-x-scroll flex gap-5 scroll-smooth scrollbar-hide"
            ref={itemsContainerRef}
            onScroll={(e) => debounce(() => setoffset(e.target.scrollLeft))()}
          >
            {articles.map((item, index) => (
              <BlogItem key={index} {...item} itemRef={itemRef} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Blog;
