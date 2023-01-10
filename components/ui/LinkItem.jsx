import Image from "next/image";
import Link from "next/link";

const LinkItem = ({ linkText, to="#", blank, underlined, inline }) => {
  return (
    <Link
      href={to}
      target={blank && "_blank"}
      className={`w-max items-baseline gap-1 group cursor-pointer hover:no-underline underline-offset-2 ${
        underlined && "underline"
      } ${inline ? "inline-flex": 'flex'}`}
    >
      {linkText}
      <div className="transition-all w-max group-hover:translate-x-1 group-hover:-translate-y-1">
        <Image
          width={14}
          height={14}
          src="/assets/icons/arrow-link.svg"
          alt="arrow"
        />
      </div>
    </Link>
  );
};

export default LinkItem;
