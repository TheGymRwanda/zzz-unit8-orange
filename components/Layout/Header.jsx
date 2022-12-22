import Wrapper from "../Wrapper";
import LinkItem from "../ui/LinkItem";

const Header = () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-between gap-5 pt-6.5 sm:pt-12 text-xl lg:flex-row sm:text-2xl -tracking-tighter sm:tracking-normal">
        <h1>Ape Unit</h1>
        <div className="max-w-189.25 xl:max-w-201.5">
          Unit➇ is a pioneering technology company specialing in decentralised
          technologies that creates end-to-end digital experiences for protocols
          including
          <span className="text-purple px-1">
            Ethereum, Tezos, Near, Algorand, Celo
          </span>
          and more. Its team of 2,500+ digital specialists across 30+ locations
          on 5 continents delivers pioneering work on a global scale with a
          boutique culture.
          <span className="pl-1">
            <LinkItem to="mailto:web3@apeunit.com" underlined inline>
              Contact us
            </LinkItem>
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
