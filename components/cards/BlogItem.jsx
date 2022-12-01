import Tag from "./../ui/Tag";

const BlogItem = ({date, title, content, tags}) => {
    return (
        <div className=" border rounded-xl border-primaryGray-100 p-5 w-119.25 h-100 flex flex-col justify-between gap-[38px] shadow-pr">
            <div>
                <div className="text-primaryGray-400 text-lg -tracking-wide">{date}</div>
                <h5 className="text-4xl leading-4.5xl -tracking-wide mt-6 mb-3">{title}</h5>
                <p className="text-2xl -tracking-tighter">{content}</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
                {
                    tags.map((item, index) => (
                        <Tag key={index} content={item}/>
                    ))
                }
            </div>
        </div>
    );
}

export default BlogItem;