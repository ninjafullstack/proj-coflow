"use client";
import {CardGroup} from '@/components/Global/CardGroup'
import {DonateBlock} from '@/components/Global/DonateBlock'
import {EarnIconsCard} from '@/components/Shared/EarnIconsCard'
import clipYoutube from '@/public/icons/earn/clip-youtube.svg'
import dailyVisit from '@/public/icons/earn/daily-visits.svg'
import firstDonation from '@/public/icons/earn/first-donation.svg'
import leaveComment from '@/public/icons/earn/leavecom.svg'
import postInsta from '@/public/icons/earn/post-insta.svg'
import referFriend from '@/public/icons/earn/refer-friend.svg'
import secondDonation from '@/public/icons/earn/second-donation.svg'
import tiktok from '@/public/icons/earn/tiktok.svg'
import welcomeFamily from '@/public/icons/earn/welcome-family.svg'
import Image from "next/image";
import Link from "next/link";

import arrowLeft from "@/public/icons/earn/iconamoon_arrow-left.svg";

// text-primary text-lg sm:text-[26px] leading-[130%] font-semibold Orange
// text-headers text-base sm:text-xl leading-[130%] font-semibold Headers
// font-normal text-sm sm:text-base sm:leading-[160%] text-headers opacity-50 - semiheads

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

const mockData1 = [
  {
    id: 1,
    img: welcomeFamily,
    desc: 'Welcome to the family',
    count: '50 Vibes',
    width: '54',
    height: '55',
  },
  {
    id: 2,
    img: firstDonation,
    desc: 'First donation',
    count: '50 Vibes',
    width: '54',
    height: '55',
  },
  {
    id: 3,
    img: secondDonation,
    desc: 'Second donation',
    count: '150 Vibes',
    width: '54',
    height: '53',
  },
  {
    id: 4,
    img: tiktok,
    desc: 'Post a clip on Tik Tok (Rules : Clip must promote this page and you must tag @bricebbrice)',
    count: '300 Vibes',
    width: '35',
    height: '35',
  },
  {
    id: 5,
    img: clipYoutube,
    desc: 'Post a clip on Youtube short (Rules : Clip must promote this page and you must tag @bricebbrice)',
    count: '300 Vibes',
    width: '36',
    height: '36',
  },
  {
    id: 6,
    img: postInsta,
    desc: 'Post a clip on Instagram Reels (Rules : Clip must promote this page and you must tag @bricebbrice)',
    count: '300 Vibes',
    width: '54',
    height: '55',
  },
  {
    id: 7,
    img: dailyVisit,
    desc: 'Visit the page daily',
    count: '10 Vibes',
    width: '54',
    height: '55',
  },
  {
    id: 8,
    img: leaveComment,
    desc: 'Leave a comment',
    count: '150 Vibes',
    width: '42',
    height: '42',
  },
  {
    id: 9,
    img: referFriend,
    desc: 'Refer a friend',
    count: '400 Vibes',
    width: '54',
    height: '53',
  },

]

const EarnComponent = () => {
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
              <Image src={arrowLeft} alt="arr-left" height={24} width={10} className="" />
              <span className="text-primary text-lg sm:text-[26px] leading-[130%] font-semibold">Earn</span>
            </div>
          </Link>
          <div className="pt-[27px] sm:pt-[37px] border-b border-grayline">
            <h4 className="text-headers text-base sm:text-xl leading-[130%] font-semibold mb-[5px] sm:mb-[9px]">
              Cashback
            </h4>
            <div className="font-normal text-sm sm:text-base sm:leading-[160%] text-headers opacity-50 pb-[26px]">
              Earn 10 Vibes for every 1 EUR spent.
            </div>
          </div>
      
          <h4 className="text-headers text-base sm:text-xl leading-[130%] font-semibold mt-[25px] sm:mt-[30px] mb-[5px] sm:mb-[9px]">
            Challenge Board
          </h4>
          <div className="font-normal text-sm sm:text-base sm:leading-[160%] text-headers opacity-50 mb-[60px] sm:mb-[30px]">
            Earn 10 Vibes for every 1 EUR spent.
          </div>
          <div className="grid grid-cols-1 gap-8 lg:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 overflow-x-hidden">            {mockData1.map((item) => (
              <div key={item.id} className="flex justify-center">
                <EarnIconsCard data={item} />
              </div>
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

export default EarnComponent;
