"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { CardGroup } from "@/components/Global/CardGroup";

import arrowLeft from "@/public/icons/earn/iconamoon_arrow-left.svg";
import CupFirst from "@/public/icons/CupFirst.svg";
import ArrowUp from "@/public/icons/ArrowUp.svg";
import ArrowDown from "@/public/icons/ArrowDown.svg";
import Star from "@/public/icons/Star.svg";

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

const RewardComponent = () => {
  const [bronzeOpen, setBronzeOpen] = useState(false);
  const [silverOpen, setSilverOpen] = useState(false);
  const [goldOpen, setGoldOpen] = useState(false);

  return (
    <div className="mx-auto mt-10 flex max-w-[1266px] flex-wrap justify-between gap-[9.6vw] px-5 sm:flex md:max-xl:px-4 lg:flex-row xl:px-0">
      <div className="mx-auto grow">
        <h3 className="mb-[30px] text-[26px] font-bold leading-[130%] md:text-[30px] lg:text-3xl">
          Welcome to &nbsp;
          <span className="block text-primary sm:inline">Loyalty Program</span>
        </h3>
        <div className="w-[90vw] rounded-2xl bg-lightgray px-[30px] pb-[50.5px] pt-[30px] sm:w-full">
          <Link href="/reward">
            <div className="flex items-center gap-[14px]">
              <Image src={arrowLeft} alt="arr-left" height={24} width={10} className="" />
              <span className="text-lg font-semibold leading-[130%] text-primary sm:text-[26px]">
                Levels
              </span>
            </div>
          </Link>

          <div className="mt-5 flex">
            <div className="mr-4 flex rounded-full border-2 border-solid border-primary p-2">
              <Image className="" src={CupFirst} alt="Cup First" height={39} width={39} />
            </div>
            <div className="my-auto">
              <div className="text-sm font-normal opacity-50">Level 1</div>
              <h4 className="text-xl font-semibold ">Basic</h4>
            </div>
          </div>

          <div>
            <div className="flex">
              <div className="my-auto mr-4 flex h-[57px] rounded-full border-2 border-solid border-primary p-2">
                <Image className="" src={CupFirst} alt="Cup First" height={39} width={39} />
              </div>
              <div className="my-auto">
                <div className="text-sm font-normal opacity-50">Level 2</div>
                <h4 className="text-xl font-semibold ">Bronze</h4>
                <div className="text-sm font-normal opacity-50">After spending 1 500 USD</div>
              </div>
            </div>

            <div className="ml-[74px] mt-4 rounded-lg bg-white p-4">
              <div className="flex justify-between">
                <h4 className="text-base font-semibold ">Benefits</h4>
                <button
                  className="my-auto"
                  onClick={() => {
                    setBronzeOpen(!bronzeOpen);
                  }}
                >
                  {bronzeOpen ? (
                    <Image className="" src={ArrowUp} alt="open list" height={5} width={10} />
                  ) : (
                    <Image className="" src={ArrowDown} alt="open list" height={5} width={10} />
                  )}
                </button>
              </div>
              {bronzeOpen && (
                <div>
                  <p className="mt-2 text-sm font-normal opacity-50">
                    Earn 2 Points for every 1 USD spent.
                  </p>
                  <div className="mt-7 flex">
                    <Image className="" src={Star} alt="Star" height={16} width={15} />
                    <p className="ml-2 text-sm font-medium text-[#FFDB65] opacity-50">400 Points</p>
                  </div>
                </div>
              )}
            </div>
            
          </div>

          
        </div>
      </div>


      <div>
        <h3 className="mb-[30px] text-center text-[26px] leading-[130%] md:text-[30px] lg:text-left">
          Contreparties
        </h3>
        <div className="mx-auto">
          <CardGroup data={mockDatDonat1} />
        </div>
      </div>
    </div>
  );
};

export default RewardComponent;
