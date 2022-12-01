import Image from "next/image";
import Link from "next/link";

const LinkItem = ({ children, to, blank }) => {
  return (
    <Link
      href={to || "#"}
      target={blank && "_blank"}
      className="w-max inline-flex items-baseline gap-1 group cursor-pointer"
    >
      {children}
      <div className="w-max group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
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
