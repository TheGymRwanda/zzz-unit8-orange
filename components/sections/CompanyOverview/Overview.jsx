const Overview = ({paragraph}) => {
    return (
        <div className="text-xl space-y-7 sm:text-2xl -tracking-tighter sm:h-412">
            <div>{paragraph?.text}</div>
            <p>{paragraph?.subText??""}</p>
       </div>
    );
}

export default Overview;