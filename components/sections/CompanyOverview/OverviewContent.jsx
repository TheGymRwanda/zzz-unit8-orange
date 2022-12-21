import LinkItem from "../../ui/LinkItem";

const Overview = ({ text, textLink, subText }) => {
  return (
    <div className="text-xl space-y-7 sm:text-2xl -tracking-tighter sm:h-412">
      <div>
        {text}
        <div className="inline-block">
          <LinkItem
            to="https://medium.com/@moritzfelipe/blockchain-the-internet-for-cooperation-37a606bb3c0"
            underlined
          >
            {textLink}
          </LinkItem>
        </div>
      </div>
      <p>{subText}</p>
    </div>
  );
};

export default Overview;