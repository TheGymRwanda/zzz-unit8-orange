import Tag from "./../ui/Tag";

const BlogItem = ({ date, title, content, tags, itemRef }) => {
  return (
    <div
      ref={itemRef}
      className="flex-shrink-0 border rounded-xl bg-white border-primaryGray-100 p-5 w-75.5 sm:w-119.25 sm:h-100 flex flex-col justify-between gap-6 sm:gap-9.5 drop-shadow-small"
    >
      <div>
        <div className="text-primaryGray-400 text-lg -tracking-wide">
          {date}
        </div>
        <h5 className="text-2.5xl leading-3.5xl sm:text-4xl sm:leading-4.5xl -tracking-wide mt-6 mb-3">
          {title}
        </h5>
        <p className="text-xl sm:text-2xl -tracking-tighter">{content}</p>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {tags.map((item, index) => (
          <Tag key={index} content={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogItem;
