import Link from "next/link";
import Wrapper from "../sections/Wrapper";
import LinkItem from "../ui/LinkItem";

const Header = () => {
  return (
    <Wrapper>
      <div className="py-12 flex-col lg:flex-row gap-5 flex text-xl sm:text-2xl justify-between -tracking-tighter">
        <div>Ape Unit</div>
        <div className="max-w-189.25 xl:max-w-201.5">
          Unit➇ is a pioneering technology company specialing in decentralised
          technologies that creates end-to-end digital experiences for protocols
          including{" "}
          <span className="text-purple">
            Ethereum, Tezos, Near, Algorand, Celo
          </span>{" "}
          and more. Its team of 2,500+ digital specialists across 30+ locations
          on 5 continents delivers pioneering work on a global scale with a
          boutique culture. <LinkItem underlined>Contact us</LinkItem>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
