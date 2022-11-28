import Wrapper from "../Wrapper";
import Title from "../../ui/Title";
import areasOfExpertise from "../../../helpers/data/expertise";

const Expertise = () => {
    return (
        <Wrapper>
            <div className="grid place-content-end">
                <div className="w-full">
                    <Title name="Expertise" />
                    <ul className="grid grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-2 md:gap-x-6.25 mt-1.75">
                        {areasOfExpertise.map((area, index) => <li key={index} className="text-2xl -leading-tighter border-b border-primaryGray-50">{area}</li>)}
                    </ul>
                </div>
            </div>
        </Wrapper>
    )
}

export default Expertise;