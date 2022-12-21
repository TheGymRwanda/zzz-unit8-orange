import LinkItem from "../../ui/LinkItem";

const Overview = ({ content, linkContent, additionalContent }) => {
  return (
    <div className="text-xl space-y-7 sm:text-2xl -tracking-tighter sm:h-412">
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

export default Overview;
