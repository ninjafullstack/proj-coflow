import Image from "next/image";

import Email from "@/public/icons/emaill.svg";
import Heart from "@/public/icons/heart.svg";
import Fb from "@/public/icons/fb.svg";
import Twitter from "@/public/icons/twitter.svg";
import Youtube from "@/public/icons/youtube.svg";

function Footer() {
  return (
    <div className="mt-24">
      <div className="mx-auto mt-10 max-w-[1266px] justify-around lg:flex">
        <div className="m-4 flex h-[234px] flex-col rounded-2xl border p-6 lg:m-auto lg:mb-8 lg:w-[395px]">
          <Image src={Email} alt="Email image" height={78} width={78} className="m-auto mb-4" />
          <h3 className="m-auto mb-4 text-xl font-semibold ">Vous avez trouvé un bug ?</h3>
          <p className="m-auto mb-1 text-base font-normal opacity-50">Signalez le ici</p>
        </div>

        <div className="m-4 flex h-[234px] flex-col rounded-2xl border p-6 lg:m-auto lg:mb-8 lg:w-[395px]">
          <Image src={Email} alt="Email image" height={78} width={78} className="m-auto mb-4" />
          <h3 className="m-auto mb-4 text-xl font-semibold ">Vous avez une suggestion ?</h3>
          <p className="m-auto mb-1 text-base font-normal opacity-50">Soumettez vos idées ici</p>
        </div>

        <div className="m-4 flex h-[234px] flex-col rounded-2xl border p-6 lg:m-auto lg:mb-8 lg:w-[395px]">
          <Image src={Heart} alt="Email image" height={78} width={78} className="m-auto mb-4" />
          <h3 className="m-auto mb-4 text-xl font-semibold ">Vous voulez nous envoyer du love</h3>
          <p className="m-auto mb-1 text-base font-normal opacity-50">Faites le ici</p>
        </div>
      </div>

      <div className=" h-[246px] bg-deepgray lg:h-[66px]">
        <div className="m-auto flex max-w-[1266px] flex-col items-center justify-between pt-4 lg:flex-row">
          <div className="flex items-baseline">
            <div className="mb-8 mt-8 text-3xl font-semibold text-white lg:mb-0 lg:mr-4 lg:mt-0 lg:text-2xl">
              Coflow
            </div>
            <div className="hidden text-sm font-normal text-white opacity-50 lg:block">
              © 2023, Coflow, Powered by Shopify
            </div>
          </div>

          <div className="mb-8 flex flex-row gap-4 lg:mb-0">
            <Image src={Twitter} alt="Twitter" className="m-auto" />
            <Image src={Youtube} alt="Youtube" className="m-auto" />
            <Image src={Fb} alt="Facebook" className="m-auto ml-1" />
          </div>

          <div className="block text-sm font-normal text-white opacity-25 lg:hidden">
            © 2023, Coflow, Powered by Shopify
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
