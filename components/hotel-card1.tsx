"use client";
import type { NextPage } from "next";
import { useState, useMemo, type CSSProperties, useCallback } from "react";
import { Button } from "antd";
import "/app/antd.css";
import Image from "next/image";
import MatterhornPopup from "./matterhorn-popup";
import PortalPopup from "./portal-popup";

export type HotelCard1Type = {
  className?: string;
  entireBungalow?: string;
  matterhornSuites?: string;
  night?: string;
  ratingSpace1?: string;
  reviews?: string;

  /** Style props */
  stayDetailsFlex?: CSSProperties["flex"];
  stayDetailsGap?: CSSProperties["gap"];
  stayDetailsRowsMinWidth?: CSSProperties["minWidth"];
};

const HotelCard1: NextPage<HotelCard1Type> = ({
  className = "",
  stayDetailsFlex,
  stayDetailsGap,
  stayDetailsRowsMinWidth,
  entireBungalow,
  matterhornSuites,
  night,
  ratingSpace1,
  reviews,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
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

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <section
        className={`self-stretch flex items-start justify-center !pt-0 !pb-0 !pl-3 !pr-3 text-left text-base text-[#303030] font-[Roboto] ${className}`}
      >
        <div className="self-stretch flex-1 rounded-[10px] bg-background-backgroundprimary border-[#eaeaea] border-solid border-[1px] box-border flex flex-col items-start !pt-[13px] !pb-[13px] !pl-3 !pr-3 gap-[23px] max-w-full hover:bg-[rgba(226,226,226,0.1)] hover:cursor-pointer">
          <Image
            className="self-stretch h-[200px] relative rounded-[10px] max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            width={270}
            height={200}
            sizes="100vw"
            alt=""
            src="/Matterhorn-Suites-Image@2x.png"
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
              className="h-[25px] w-[25px] relative cursor-pointer custom-video"
              size="small"
              style={{ width: "25px" }}
              type="primary"
              onClick={openMatterhornPopup}
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
                src="/Vector2.svg"
              />
              <div className="h-[19px] w-[25px] relative tracking-[0.04em] font-medium inline-block shrink-0">
                {ratingSpace1}
              </div>
            </div>
            <div className="h-[19px] w-[216.4px] relative tracking-[0.04em] text-[#1262af] inline-block shrink-0">
              {reviews}
            </div>
          </div>
          <Button
            className="self-stretch h-[46px] custom-more-details-button"
            size="large"
            shape="circle"
            type="primary"
          >
            More details hahaha
          </Button>
        </div>
      </section>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelCard1;