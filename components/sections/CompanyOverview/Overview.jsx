import LinkItem from "../../ui/LinkItem";

const Overview = ({ text, textLink, subText }) => {
  return (
    <div className="text-xl lg:space-y-7 sm:space-y-7.5 space-y-5.5 sm:text-2xl -tracking-tighter sm:min-h-412">
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
