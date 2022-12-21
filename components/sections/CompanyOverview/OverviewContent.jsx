import LinkItem from "../../ui/LinkItem";

const OverviewContent = ({ content, linkContent, additionalContent }) => {
  return (
    <div className="text-xl lg:space-y-7 sm:space-y-7.5 space-y-5.5 sm:text-2xl -tracking-tighter sm:min-h-412">
      <div>
        {content}
        <div className="inline-block">
          <LinkItem
            to="https://medium.com/@moritzfelipe/blockchain-the-internet-for-cooperation-37a606bb3c0"
            underlined
          >
            {linkContent}
          </LinkItem>
        </div>
      </div>
      <p>{additionalContent}</p>
    </div>
  );
};

export default OverviewContent;
