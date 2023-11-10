"use client";
import {CardGroup} from '@/components/Global/CardGroup'
import {LotteryCard} from '@/components/Shared/LotteryCard'
import Image from "next/image";
import img11 from '@/public/icons/lottery/11.png';
import img12 from '@/public/icons/lottery/12.png';
import img13 from '@/public/icons/lottery/13.png';
import img14 from '@/public/icons/lottery/14.png';
import img15 from '@/public/icons/lottery/15.png';
import img16 from '@/public/icons/lottery/16.png';
import img17 from '@/public/icons/lottery/17.png';
import img18 from '@/public/icons/lottery/18.png';
import img19 from '@/public/icons/lottery/19.png';
import img20 from '@/public/icons/lottery/20.png';
import img21 from '@/public/icons/lottery/21.png';
import img22 from '@/public/icons/lottery/22.png';
import img23 from '@/public/icons/lottery/23.png';
import img24 from '@/public/icons/lottery/24.png';
import img25 from '@/public/icons/lottery/25.png';
import Link from "next/link";

import arrowLeft from "@/public/icons/earn/iconamoon_arrow-left.svg";

// text-primary text-lg sm:text-[26px] leading-[130%] font-semibold Orange
// text-headers text-base sm:text-xl leading-[130%] font-semibold Headers
// font-normal text-sm sm:text-base sm:leading-[160%] text-headers opacity-50 - semiheads

const dataM = [
  { img: img11, opacited: false },
  { img: img12, opacited: false },
  { img: img13, opacited: false },
  { img: img14, opacited: false },
  { img: img15, opacited: false },
  { img: img16, opacited: false },
  { img: img17, opacited: false },
  { img: img18, opacited: false },
  { img: img19, opacited: false },
  { img: img20, opacited: false },
  { img: img21, opacited: false },
  { img: img22, opacited: false },
  { img: img23, opacited: false },
  { img: img24, opacited: false },
  { img: img25, opacited: false },
];

const mockDatDonat1 = [
  {
    id: 1,
    imageSrc: "img1",
    title: "Tee shirt!",
    price: "40 €",
    contributions: "6 contributions",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", // Описание из первого элемента массива items
  },
  {
    id: 2,
    imageSrc: "img2",
    title: "Another Tee shirt!",
    price: "35 €",
    contributions: "8 contributions",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const LotteryComponent = () => {
  return (
    <div className="mt-10 mx-auto max-w-[1266px] gap-[9.6vw] px-5 md:max-xl:px-4 xl:px-0 lg:flex-row sm:flex flex justify-between flex-wrap">
      <div className="grow mx-auto">
        <h3 className="text-[26px] md:text-[30px] lg:text-3xl leading-[130%] font-bold mb-[30px]">
          Welcome to &nbsp;
          <span className="text-primary block sm:inline">Loyalty Program</span>
        </h3>
        <div className="bg-lightgray w-[90vw] sm:w-full px-[30px] pt-[30px] pb-[50.5px] rounded-2xl">
          <Link href="/reward">
            <div className="flex items-center gap-[14px]">
              <Image src={arrowLeft} alt="arr-left" height={24} width={10} />
              <span className="text-primary text-lg sm:text-[26px] leading-[130%] font-semibold">Lottery</span>
            </div>
          </Link>
          <div className="pt-[27px] sm:pt-[37px] border-b border-grayline">
            <h4 className="text-headers text-base sm:text-xl leading-[130%] font-semibold mb-[5px] sm:mb-[9px]">
              What is Lorem Ipsum?
            </h4>
            <div className="font-normal max-w-[539px] text-sm sm:text-base sm:leading-[160%] text-headers opacity-50 pb-[26px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            </div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {dataM.map((item, i) => (
              <LotteryCard key={i} data={item} index={i} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-[30px] text-[26px] leading-[130%] md:text-[30px] text-center lg:text-left">Contreparties</h3>
        <div className="mx-auto">
          <CardGroup data={mockDatDonat1}/>
        </div>
      </div>
    </div>
  );
};

export default LotteryComponent;
