import Image from 'next/image'

// font-normal text-[15px] leading-[145%] tracking-[-0.15px] text-headers opacity-50 iconst desc
// font-normal text-[15px] leading-[145%] tracking-[-0.15px] text-headers font-semibold iconst count

export const EarnIconsCard = ({data}) => {
  return (
    <div className="max-w-[191px] flex flex-col items-center justify-center text-center gap-[9.4px] rounded-2xl overflow-hidden">
      <div className="h-[78.6px] w-[78.6px] border rounded-full border-['#F2F2F2'] flex items-center justify-center bg-white">
        <Image src={data?.img} alt="avaLayalty" height={data?.width} width={data?.height}/>
      </div>
    
      <span className="font-normal text-[15px] leading-[145%] tracking-[-0.15px] text-headers">/04/2023</span>
    </div>
  )
}

