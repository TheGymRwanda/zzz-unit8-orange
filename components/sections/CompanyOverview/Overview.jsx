import LinkItem from "../../ui/LinkItem";
const Overview = ({paragraph}) => {
    return (
        <div className="text-xl space-y-7 sm:text-2xl -tracking-tighter sm:h-412">
            <div> {paragraph} <div className="inline-block underline underline-offset-2"><LinkItem to="https://medium.com/@moritzfelipe/blockchain-the-internet-for-cooperation-37a606bb3c0">Learn more</LinkItem></div></div>
            <p>Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior.</p>
        </div>
    );
}

export default Overview;