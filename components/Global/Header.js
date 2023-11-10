"use server";
import Avatar from "@/components/Profile/Avatar";
import { Navigation } from "@/components/Widgets/Navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import SignOut from "../Auth/SignOut";
import bg from "@/public/Top.jpg";
import db from "@/public/icons/db.svg";
import arrow from "@/public/icons/arrow.svg";
import logoAvatar from "@/public/logo-avatar.png";
import Image from "next/image";

const Header = async () => {
  const session = await getServerSession(authOptions);

  const navItemsAuth = [
    { label: "Présentation", href: "/" },
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "Profile", href: "/profile/client" },
    { label: "Reward", href: "/reward" },
  ];

  return (
    <header className=" relative w-full">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <Image src={bg} alt="banner" quality={100} layout="fill" objectFit="cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1266px] pt-[20px] md:pt-[28px] px-5 md:max-xl:px-4 xl:px-0">
          <div className="w-full rounded-xl bg-white">
            <div className="text-dark flex items-center rounded-xl pb-[14px] pl-[24px] pr-[24px] pt-[13px]">
              <span
                className="text-dark mr-5 grow text-[19.4px]
            font-semibold leading-[27.2px] sm:grow-0 md:text-[21.7px] md:leading-[30.4px]  lg:mr-[65px]
            "
              >
                Coflow
              </span>
              <div className="flex grow-0 flex-row-reverse justify-between gap-4 sm:grow md:flex-row">
                {session?.user && (
                  <div className="flex items-center">
                    <Avatar
                      user={session?.user}
                      className="h-[41px] w-[41px] md:h-[49px] md:w-[49px]"
                    />
                    <div className="ml-[10px] hidden flex-col sm:flex">
                      <div className="flex items-center">
                        <span className="mr-[5px] text-lg font-medium text-headers">
                          {session?.user?.name}
                        </span>
                        <Image
                          className="cursor-pointer"
                          src={arrow}
                          alt="avatar"
                          width={11}
                          height={11}
                        />
                      </div>
                      <span className="text-[13px] font-medium leading-[14px] text-semihead">
                        @AlexKir
                      </span>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-center gap-[36px]">
                  <div className="relative">
                    <div className="absolute -top-1.5 left-4 flex h-3.5 w-[26.8px] items-center justify-center rounded border ">
                      <span className="text-xs text-headers">8</span>
                    </div>
                    <Image src={db} alt="db" />
                  </div>
                  {session?.user ? (
                    <div className="hidden sm:block">
                      <SignOut />
                    </div>
                  ) : (
                    <Link href="/signin">
                      <button className="w-[147px] btn hidden bg-primary font-semibold text-white hover:bg-primary-focus sm:block">
                        Se déconnecter
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pb-[73px] pt-[56px] text-center">
            <div className="mb-[6px] text-[42px] font-bold leading-[54.6px] text-white sm:text-[51px] sm:leading-[66px]">
              Hello there
            </div>
            <div
              className="text-a text-base font-medium leading-[26.6px] tracking-[0.16px] text-white
            sm:text-lg sm:font-semibold sm:leading-[32.4px] sm:tracking-[0.18px]"
            >
              <span className="inline md:block">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              </span>
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </div>
            <button className="btn mt-[25px] block h-[58px]  border-transparent bg-primary font-semibold text-white hover:border-transparent hover:bg-primary-focus sm:h-[55px] md:hidden">
              <span className="px-[20.5px] py-[17px] text-base font-semibold leading-[20.8px] text-white">
                Participer
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto flex max-w-[1266px] items-center justify-center gap-4 px-5 md:max-xl:px-4 lg:justify-between xl:px-0">
        <div className="flex items-center justify-center">
          <div className="relative mr-[43px] hidden min-w-[192px] lg:block ">
            <Image
              src={logoAvatar}
              alt="logo-avatar"
              width={192}
              height={192}
              style={{ marginTop: "-50%" }}
            />
          </div>
          <Navigation navLinks={navItemsAuth} />
        </div>
        <button className="ml-7 btn hidden h-[58px] bg-primary px-[19px] py-[17px] font-semibold text-white hover:bg-primary-focus sm:h-[55px] md:block">
          <span className="text-base font-semibold leading-[25px] text-white  sm:text-[17px] sm:leading-[130%]">
            Participer
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
