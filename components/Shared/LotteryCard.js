import Image from 'next/image'

// font-normal text-[15px] leading-[145%] tracking-[-0.15px] text-headers opacity-50 iconst desc
// font-normal text-[15px] leading-[145%] tracking-[-0.15px] text-headers font-semibold iconst count

export const LotteryCard = ({data, index}) => {
  return (
    <div className="max-w-[191px] flex flex-col items-center justify-center text-center gap-[9.4px]">
      <div className="h-[83px] w-[125.4px] border rounded-2xl border-['#F2F2F2'] flex items-center justify-center bg-white">
        <Image src={data?.img} alt="avaLayalty" height={83} width={125.4}/>
      </div>
      
      <span className="font-normal text-[15px] leading-[145%] tracking-[-0.15px] text-headers">{`${index}/04/2023`}</span>
    </div>
  )
}

