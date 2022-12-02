import Link from "next/link";
import Wrapper from "../Wrapper";
import LinkItem from "../ui/LinkItem";

const Header = () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-between gap-5 py-12 text-xl lg:flex-row sm:text-2xl -tracking-tighter sm:tracking-normal">
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
          boutique culture.{" "}
          <LinkItem underlined inline>
            Contact us
          </LinkItem>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
