"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type Col1Type = {
  className?: string;
  parisImage: string;
  paris?: string;
  priceValue?: string;

  /** Style props */
  detailsWidth?: CSSProperties["width"];
  priceValueWidth?: CSSProperties["width"];
};

const Col1: NextPage<Col1Type> = ({
  className = "",
  parisImage,
  paris,
  detailsWidth,
  priceValue,
  priceValueWidth,
}) => {
  const detailsStyle: CSSProperties = useMemo(() => {
    return {
      width: detailsWidth,
    };
  }, [detailsWidth]);

  const priceValueStyle: CSSProperties = useMemo(() => {
    return {
      width: priceValueWidth,
    };
  }, [priceValueWidth]);

  return (
    <div
      className={`flex flex-col items-center justify-center !pt-0 !pb-0 !pl-4 !pr-4 text-left text-xl text-studio-darkmode-allwhite-ffffff font-[Roboto] ${className}`}
    >
      <div className="self-stretch h-[182px] rounded-[10px] overflow-hidden shrink-0 flex items-start !pt-0 !pb-[107px] !pl-0 !pr-0 box-border relative">
        <Image
          className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          width={288}
          height={182}
          sizes="100vw"
          alt=""
          src={parisImage}
        />
        <div className="w-[287.4px] flex items-start !pt-2 !pb-2 !pl-3 !pr-3 box-border z-[1]">
          <h3 className="!m-0 flex-1 relative text-[length:inherit] tracking-[0.02em] font-bold font-[inherit] mq450:text-base">
            {paris}
          </h3>
          <div
            className="h-[59px] w-[90.9px] flex flex-col items-end gap-0.5 text-right text-base"
            style={detailsStyle}
          >
            <div className="w-[52.5px] h-[19px] relative tracking-[0.04em] uppercase inline-block">
              from
            </div>
            <h2
              className="!m-0 w-[90.9px] h-[38px] relative text-[38px] leading-[38px] font-normal font-['Baloo_Bhai'] inline-block mq1050:text-3xl mq1050:leading-[30px] mq450:text-[23px] mq450:leading-[23px]"
              style={priceValueStyle}
            >
              {priceValue}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Col1;
