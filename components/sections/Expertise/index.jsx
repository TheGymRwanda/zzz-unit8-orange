import Wrapper from "../../Wrapper";
import Title from "../../ui/Title";
import areasOfExpertise from "/data/expertise";

const Expertise = () => {
  return (
    <Wrapper>
      <div className="grid place-content-end">
        <Title name="Expertise" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6.5 mt-1.75 md:mt-6 gap-y-2 md:gap-y-3">
          {areasOfExpertise.map((area, index) => (
            <li
              key={index}
              className="text-xl border-b -tracking-wider sm:-tracking-tighter md:text-2xl w-290 md:w-310 border-primaryGray-50"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Expertise;
