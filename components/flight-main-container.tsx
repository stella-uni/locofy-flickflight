import type { NextPage } from "next";
import Image from "next/image";

export type FlightMainContainerType = {
  className?: string;
  sIN?: string;
  duration: string;
  lAX?: string;
};

const FlightMainContainer: NextPage<FlightMainContainerType> = ({
  className = "",
  sIN,
  duration,
  lAX,
}) => {
  return (
    <div
      className={`flex-1 rounded-lg border-[#eaeaea] border-solid border-[1px] box-border flex flex-col items-center justify-center !pt-[18px] !pb-[18px] !pl-[19px] !pr-[19px] gap-[21px] min-w-[411px] text-left text-2xl text-[#1262ae] font-[Roboto] mq750:min-w-full ${className}`}
    >
      <div className="self-stretch flex items-center justify-between gap-5 mq450:flex-wrap mq450:gap-5">
        <div className="h-7 w-[44.7px] flex items-start">
          <h3 className="!m-0 h-7 w-[44.7px] relative text-[length:inherit] tracking-[0.04em] capitalize font-bold font-[inherit] inline-block shrink-0 mq450:text-[19px]">
            {sIN}
          </h3>
        </div>
        <Image
          className="h-6 w-[117.4px] relative"
          width={117.4}
          height={24}
          sizes="100vw"
          alt=""
          src={duration}
        />
        <div className="h-7 w-[51.3px] flex items-start text-right">
          <h3 className="!m-0 h-7 w-[51.3px] relative text-[length:inherit] tracking-[0.04em] capitalize font-bold font-[inherit] inline-block shrink-0 mq450:text-[19px]">
            {lAX}
          </h3>
        </div>
      </div>
      <h3 className="!m-0 relative text-xl tracking-[0.04em] capitalize text-[#000] font-[inherit] mq450:text-base">
        <b>{`Depart on: `}</b>
        <span>7 Sep 2021</span>
      </h3>
    </div>
  );
};

export default FlightMainContainer;
