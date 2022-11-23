const Tag = ({ content }) => {
  return (
    <div>
      <p className="font-neuf text-lg text-primaryGray-400 font-normal -tracking-wide bg-primaryGray-200 rounded-base px-2.5 py-sm  w-fit">
        {content}
      </p>
    </div>
  );
};

export default Tag;
