import articles from "../../../data/articles";
import BlogItem from "../../cards/BlogItem";
import ArrowIcon from "../../ui/ArrowIcon";
import Title from "../../ui/Title";
import Wrapper from "../Wrapper";

const Blog = () => {
    return (
        <Wrapper>
            <div className="mt-28">
                <div className="mb-7 flex items-end gap-4">
                    <Title name="Blog"/>
                    <div className="flex items-center text-primaryGray-400 gap-2">
                        <ArrowIcon variant="rotate-90 cursor-pointer" />
                        <ArrowIcon variant="-rotate-90 mb-0.75 cursor-pointer" />
                    </div>
                </div>
                <div className="flex">
                    {
                        articles.map((item, index) => (
                            <BlogItem key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        </Wrapper>
    );
}

export default Blog;