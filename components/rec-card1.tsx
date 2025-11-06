import type { NextPage } from "next";
import Image from "next/image";

export type RecCard1Type = {
  className?: string;
  unsplash5MV818tzxeo: string;
  bali?: string;
  d3N?: string;
  discountValue?: string;
};

const RecCard1: NextPage<RecCard1Type> = ({
  className = "",
  unsplash5MV818tzxeo,
  bali,
  d3N,
  discountValue,
}) => {
  return (
    <div
      className={`flex flex-col items-center !pt-0 !pb-0 !pl-4 !pr-4 text-left text-xl text-[#424242] font-[Roboto] ${className}`}
    >
      <Image
        className="self-stretch h-[242px] relative rounded-t-[10px] rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        width={288}
        height={242}
        sizes="100vw"
        alt=""
        src={unsplash5MV818tzxeo}
      />
      <div className="self-stretch rounded-t-none rounded-b-[10px] bg-studio-darkmode-allwhite-ffffff border-[#eaeaea] border-solid border-[1px] flex flex-col items-center justify-center !pt-[18px] !pb-[18px] !pl-[15px] !pr-[15px]">
        <div className="self-stretch flex items-center [row-gap:20px] mq450:flex-wrap">
          <div className="flex-1 flex flex-col items-start gap-[3px] min-w-[120px]">
            <h3 className="!m-0 self-stretch relative text-[length:inherit] tracking-[0.02em] font-medium font-[inherit] mq450:text-base">
              {bali}
            </h3>
            <div className="self-stretch relative text-base tracking-[0.02em] text-[#999]">
              {d3N}
            </div>
          </div>
          <h2 className="!m-0 relative text-[32px] leading-[34px] font-normal font-['Baloo_Bhai'] text-[#1262af] text-right mq1050:text-[26px] mq1050:leading-[27px] mq450:text-[19px] mq450:leading-5">
            {discountValue}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RecCard1;
