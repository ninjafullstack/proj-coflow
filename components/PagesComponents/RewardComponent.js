"use client";
import {CardGroup} from '@/components/Global/CardGroup'
import Image from "next/image";
import Link from "next/link";

import ProgressBar from "@/components/Global/ProgressBar";

import ArrowLeft from "@/public/icons/Arrow-left.svg";
import Points from "@/public/icons/Points.svg";
import Earn from "@/public/icons/Earn.svg";
import Redeem from "@/public/icons/Redeem.svg";
import Refferals from "@/public/icons/Refferals.svg";
import Basic from "@/public/icons/Basic.svg";
import Levels from "@/public/icons/Levels.svg";
import Lottery from "@/public/icons/Lottery.svg";

const mockDatDonat3 = [
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
  return (
    <div>
      <div className="flex-column mx-auto mt-10 max-w-[1266px] gap-[86px] lg:flex ">
        <div className="p-4 lg:w-3/5 lg:flex-shrink-0 ">
          <h3 className="mb-6 text-[26px] font-bold md:text-[30px] lg:text-3xl">
            Welcome to &nbsp;
            <span className="text-primary block sm:inline">Loyalty Program</span>
          </h3>

          <div className="mb-4 flex justify-between rounded-2xl border p-2 lg:p-6">
            <div className="flex grow flex-row justify-between lg:flex-col">
              <div className="flex">
                <Image src={Points} alt="Points image" height={61} width={61} className="mb-2" />
                <p className="m-auto ml-2 text-base font-semibold lg:text-xl">Points</p>
              </div>
              <div className="text-right lg:text-left">
                <span className="text-2xl font-extrabold text-primary">0</span>
                <p className="text-xs font-normal opacity-50 lg:text-sm">Equals 0 USD</p>
              </div>
            </div>
            <Link href="/reward" className="my-auto hidden lg:block">
              <Image src={ArrowLeft} alt="Open" height={24} width={10} className="" />
            </Link>
          </div>

          <div className="mb-4 flex gap-2 ">
            <div className="flex w-1/2 justify-between rounded-2xl border  p-2 lg:p-6">
              <div className="flex flex-col lg:flex-row">
                <Image src={Earn} alt="Earn image" height={61} width={61} className="mb-2" />
                <p className="m-auto ml-2 text-base font-semibold lg:text-xl">Earn</p>
              </div>
              <Link href="/reward/earn" className="my-auto">
                <Image src={ArrowLeft} alt="Open" height={24} width={10} className="" />
              </Link>
            </div>
            <div className="flex w-1/2 justify-between rounded-2xl border  p-2 lg:p-6">
              <div className="flex  flex-col lg:flex-row">
                <Image src={Redeem} alt="Earn image" height={61} width={61} className="mb-2" />
                <p className="m-auto ml-2  text-base font-semibold lg:text-xl">Redeem</p>
              </div>
              <Link href="/reward" className="my-auto">
                <Image src={ArrowLeft} alt="Open" height={24} width={10} className="" />
              </Link>
            </div>
          </div>

          <div className="mb-4 flex justify-between rounded-2xl border  p-2 lg:p-6">
            <div className="flex flex-col">
              <div className="flex">
                <Image
                  src={Refferals}
                  alt="Refferals image"
                  height={61}
                  width={61}
                  className="mb-2"
                />
                <p className="m-auto ml-2 text-base font-semibold lg:text-xl">Refferals</p>
              </div>
              <div className="">
                <p className="text-xs font-medium lg:text-sm">
                  <span className="opacity-50">You get </span>10% coupon
                </p>
                <p className="text-xs font-medium lg:text-sm">
                  <span className="opacity-50">They get </span>10% coupon
                </p>
              </div>
            </div>
            <Link href="/reward" className="my-auto">
              <Image src={ArrowLeft} alt="Open Refferals" height={24} width={10} className="" />
            </Link>
          </div>

          <div className="mb-4 rounded-2xl border p-6">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="flex">
                  <Image src={Basic} alt="Basic image" height={61} width={61} className="mb-2" />
                  <p className="m-auto ml-2  text-base font-semibold lg:text-xl">
                    Basic
                    <span className="opacity-50"> (level 1)</span>
                  </p>
                </div>
                <div className="">
                  <p className="text-sm font-medium lg:text-base">1500 USD to Bronze</p>
                </div>
              </div>
              <Link href="/reward" className="relative left-4 my-auto lg:left-0">
                <Image src={ArrowLeft} alt="Open Basic" height={24} width={10} className="" />
              </Link>
            </div>
            <div className="mt-2">
              <ProgressBar value={17} width={"100%"} height={8} color={"#D64758"} tip={false} />
            </div>
          </div>

          <div className="mb-4 flex justify-between rounded-2xl border p-2 lg:p-6">
            <div className="flex flex-col">
              <div className="flex">
                <Image src={Levels} alt="Levels image" height={61} width={61} className="mb-2" />
                <p className="m-auto ml-2  text-base font-semibold lg:text-xl">Levels</p>
              </div>
              <div className="">
                <p className="text-xs font-normal opacity-50 lg:text-sm">Level up to get more</p>
                <p className="text-xs font-normal opacity-50 lg:text-sm">
                  {" "}
                  benefits and discounts.
                </p>
              </div>
            </div>
            <Link href="/reward/levels" className="my-auto">
              <Image src={ArrowLeft} alt="Open Levels" height={24} width={10} className="" />
            </Link>
          </div>

          <div className="mb-4 flex justify-between rounded-2xl border  p-2 lg:p-6">
            <div className="flex flex-row lg:flex-col">
              <div className="flex">
                <Image src={Lottery} alt="Lottery image" height={61} width={61} className="mb-2" />
                <p className="m-auto ml-2  text-base font-semibold lg:text-xl">Lottery</p>
              </div>
            </div>
            <Link href="/reward/lottery" className="my-auto">
              <Image src={ArrowLeft} alt="Open Lottery" height={24} width={10} className="" />
            </Link>
          </div>

          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
  
        <div className="mx-auto">
          <CardGroup data={mockDatDonat3}/>
        </div>
      </div>
    </div>
  );
};

export default RewardComponent;
