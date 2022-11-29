import LinkItem from "../ui/LinkItem";
import Wrapper from "../sections/Wrapper";
function Footer() {
  return (
    <Wrapper>
      <div className="flex text-2xl font-neuf space-y-12 lg:space-y-0 lg:justify-between  flex-col lg:flex-row pr-91 pb-12.5 mt-31">
        <div>
          <p>Ape Unit GmbH</p>
          <p>
            Waldemarstraße 38,
            <br />
            10999 Berlin
          </p>
        </div>
        <div>
          <LinkItem to="https://twitter.com/apeunit">Twitter</LinkItem>
          <LinkItem to="https://www.facebook.com/apeunit/">Facebook</LinkItem>
          <LinkItem to="https://de.linkedin.com/company/ape-unit">
            LinkedIn
          </LinkItem>
        </div>
        <div>Impressum / Privacy</div>
      </div>
    </Wrapper>
  );
}
export default Footer;
