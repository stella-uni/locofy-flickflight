"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Button } from "antd";
import "/app/antd.css";
import Image from "next/image";

export type HotelCard1Type = {
  className?: string;
  matterhornSuitesImage: string;
  entireBungalow?: string;
  matterhornSuites?: string;
  night?: string;
  ratingStar: string;
  ratingSpace?: string;
  reviews?: string;

  /** Style props */
  stayDetailsFlex?: CSSProperties["flex"];
  stayDetailsGap?: CSSProperties["gap"];
  stayDetailsRowsMinWidth?: CSSProperties["minWidth"];
};

const HotelCard1: NextPage<HotelCard1Type> = ({
  className = "",
  matterhornSuitesImage,
  stayDetailsFlex,
  stayDetailsGap,
  stayDetailsRowsMinWidth,
  entireBungalow,
  matterhornSuites,
  night,
  ratingStar,
  ratingSpace,
  reviews,
}) => {
  const stayDetailsStyle: CSSProperties = useMemo(() => {
    return {
      flex: stayDetailsFlex,
      gap: stayDetailsGap,
    };
  }, [stayDetailsFlex, stayDetailsGap]);

  const stayDetailsRowsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: stayDetailsRowsMinWidth,
    };
  }, [stayDetailsRowsMinWidth]);

  return (
    <section
      className={`self-stretch flex items-start justify-center !pt-0 !pb-0 !pl-3 !pr-3 text-left text-base text-[#303030] font-[Roboto] ${className}`}
    >
      <div className="self-stretch flex-1 rounded-[10px] bg-studio-darkmode-allwhite-ffffff border-[#eaeaea] border-solid border-[1px] flex flex-col items-start !pt-[13px] !pb-[13px] !pl-3 !pr-3 gap-[23px] hover:bg-[rgba(226,226,226,0.1)] hover:cursor-pointer">
        <Image
          className="self-stretch h-[200px] relative rounded-[10px] max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          width={270}
          height={200}
          sizes="100vw"
          alt=""
          src={matterhornSuitesImage}
        />
        <div
          className="self-stretch flex items-start gap-[11px] mq450:flex-wrap"
          style={stayDetailsStyle}
        >
          <div
            className="flex-1 flex flex-col items-start gap-1.5 min-w-[152px]"
            style={stayDetailsRowsStyle}
          >
            <div className="self-stretch relative tracking-[0.02em] text-[#8e8e94]">
              {entireBungalow}
            </div>
            <h3 className="!m-0 self-stretch relative text-[22px] tracking-[0.04em] capitalize font-bold font-[inherit] mq450:text-lg">
              {matterhornSuites}
            </h3>
            <div className="self-stretch relative text-lg tracking-[0.04em]">
              {night}
            </div>
          </div>
          <Button
            className="h-[25px] w-[25px] relative custom-video"
            size="small"
            style={{ width: "25px" }}
            type="primary"
          />
        </div>
        <div className="self-stretch h-[19px] flex items-start gap-[9.3px] mq450:h-auto mq450:flex-wrap">
          <div className="flex items-start gap-[3.7px]">
            <Image
              className="h-[17.2px] w-[16.6px] relative shrink-0"
              width={16.6}
              height={17.2}
              sizes="100vw"
              alt=""
              src={ratingStar}
            />
            <div className="h-[19px] w-[25px] relative tracking-[0.04em] font-medium inline-block shrink-0">
              {ratingSpace}
            </div>
          </div>
          <div className="h-[19px] w-[216.4px] relative tracking-[0.04em] text-[#1262af] inline-block shrink-0">
            {reviews}
          </div>
        </div>
        <Button
          className="self-stretch h-[46px] custom-more-details-button"
          size="large"
          type="primary"
        >
          More details
        </Button>
      </div>
    </section>
  );
};

export default HotelCard1;
