import Image from 'next/image';
import img2 from '@/public/img1.png';

export const Card = ({ data }) => {
  return (
    <div className="card w-[350px] sm:w-96 bg-base-100 shadow-xl rounded-[18px] overflow-hidden md:max-lg:m-auto">
      <div className="block max-h-[226px] overflow-hidden sm:hidden">
        <Image
          alt="card"
          src={img2}
          width={349}
          height={226}
        />
      </div>
      <div className="hidden sm:block">
        <Image
          alt="card"
          src={img2}
          width={384}
          height={350}
        />
      </div>
      <div className="card-body pt-[18px] sm:pt-[26px] sm:pt-[23px] sm:pt-[24px] px-[25px]">
        <h3 className="card-title font-semibold text-xl leading-[130%] text-headers">{data.title}</h3>
        <ul className="pb-[26px] ml-5 list-inside list-none font-normal text-sm sm:text-base sm:leading-[160%] text-headers opacity-50 list-disc list-inside">
          <li className="relative">
            <span className="bullet" />
            {data.description}
          </li>
          <li className="relative">
            <span className="bullet" />
            {data.description}
          </li>
          <style jsx>{`
            .bullet::before {
              content: "•";
              color: #222;
              opacity: 0.5;
              position: absolute;
              left: -1.25em;
              bottom: 0;
              transform: translateY(-50%);
            }
          `}</style>
        </ul>
        <div className="card-actions justify-end flex justify-between">
          <div>
            <div className="font-extrabold text-[30px] sm:leading-[130%] text-primary">{data.price}</div>
            <div className="font-normal text-sm sm:leading-[160%] text-headers opacity-50">{data.contributions}</div>
          </div>
          <button className="btn text-white h-[58px] sm:h-[48px] font-semibold sm:py-[13px] px-[19px] py-[17px] bg-primary hover:bg-primary-focus">
            <span className="font-semibold w-full text-white text-base sm:leading-[130%] leading-[130%]">Participer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

