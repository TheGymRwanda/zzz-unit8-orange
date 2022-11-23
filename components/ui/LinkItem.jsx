import Image from 'next/image'

const LinkItem = ({children}) => {
  return (
    <div className='flex items-center gap-1 group cursor-pointer'>
        {children}
        <div className="w-max group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
            <Image width={14} height={14} src="/assets/icons/arrow-link.png" alt='arrow' />
        </div>
    </div>
  )
}

export default LinkItem;