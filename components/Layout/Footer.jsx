import LinkItem from "../ui/LinkItem";
import Wrapper from "../Wrapper";
import Link from "next/link";

function Footer() {
  return (
    <Wrapper>
      <div className="flex text-xl sm:text-2xl font-neuf space-y-12 sm:space-y-0 sm:justify-between flex-col sm:flex-row xl:pr-91 pb-12.5 mt-31">
        <div>
          <p>Ape Unit GmbH</p>
          <p>
            Waldemarstraße 38,
          </p>
          <p>
            10999 Berlin
          </p>
        </div>
        <div>
          <LinkItem to="https://twitter.com/apeunit" blank linkText="Twitter" />
          <LinkItem to="https://www.facebook.com/apeunit/" blank linkText="Facebook" />
          <LinkItem to="https://de.linkedin.com/company/ape-unit" blank linkText="Linkedin" />
        </div>
        <div className="flex gap-x-1">
          <Link href="https://apeunit.com/impressum.txt" target="_blank">
            Impressum
          </Link>
          /
          <Link href="https://apeunit.com/datenschutz.txt" target="_blank">
            Privacy
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
