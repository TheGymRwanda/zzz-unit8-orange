import Image from 'next/image'
import Link from 'next/link';

const LinkItem = ({children, to, underlined}) => {
  return (
    <Link href={to || '#'} className={`w-max flex items-baseline gap-1 group cursor-pointer ${underlined && 'underline'}`}>
        {children}
        <div className="w-max group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
            <Image width={14} height={14} src="/assets/icons/arrow-link.svg" alt='arrow' />
        </div>
    </Link>
  )
}

export default LinkItem;