"use client";
import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Button } from "antd";
import "/app/antd.css";
import Image from "next/image";
import HotelCard1 from "./hotel-card1";

export type PopularStaysType = {
  className?: string;
};

const PopularStays: NextPage<PopularStaysType> = ({ className = "" }) => {
  const [hotelCard1Items] = useState([
    {
      stayDetailsFlex: "",
      stayDetailsGap: "11px",
      stayDetailsRowsMinWidth: "152px",
      entireBungalow: "Entire bungalow",
      matterhornSuites: "Matterhorn Suites",
      night: "$575/night",
      ratingSpace1: "4.9",
      reviews: "(60 reviews)",
    },
    {
      stayDetailsFlex: 1,
      stayDetailsGap: "",
      stayDetailsRowsMinWidth: "",
      entireBungalow: "2-Story beachfront suite",
      matterhornSuites: "Discovery Shores",
      night: "$360/night",
      ratingSpace1: "4.8",
      reviews: "(116 reviews)",
    },
    {
      stayDetailsFlex: 1,
      stayDetailsGap: "5px",
      stayDetailsRowsMinWidth: "156px",
      entireBungalow: "Single deluxe hut",
      matterhornSuites: "Arctic Hut ",
      night: "$420/night",
      ratingSpace1: "4.7",
      reviews: "(78 reviews)",
    },
    {
      stayDetailsFlex: "",
      stayDetailsGap: "",
      stayDetailsRowsMinWidth: "",
      entireBungalow: "Deluxe King Room",
      matterhornSuites: "Lake Louise Inn",
      night: "$244/night",
      ratingSpace1: "4.6",
      reviews: "(63 reviews)",
    },
  ]);

  const onViewAllStaysButtonClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <div
      className={`self-stretch flex flex-col items-start gap-5 text-left text-3xl text-[#303030] font-[Roboto] ${className}`}
    >
      <div className="self-stretch flex items-center justify-center [row-gap:20px] shrink-0 lg:flex-wrap">
        <div className="h-[35px] flex-1 flex items-start min-w-[718px] mq1050:min-w-full">
          <h2 className="!m-0 h-[35px] w-[1105.3px] relative text-[length:inherit] tracking-[0.04em] capitalize font-bold font-[inherit] inline-block shrink-0 mq1050:text-2xl mq450:text-lg">
            Popular Stays
          </h2>
        </div>
        <Button
          className="cursor-pointer custom-view-all-stays-button"
          size="small"
          shape="round"
          icon={<img width="24px" height="24px" src="/arrow-right.svg" />}
          iconPosition="end"
          type="primary"
          onClick={onViewAllStaysButtonClick}
        >
          View all stays
        </Button>
      </div>
      <div className="self-stretch grid items-center grid-cols-[repeat(4,_minmax(240px,_1fr))] shrink-0 lg:[grid-row-gap:20px] lg:justify-center lg:grid-cols-[repeat(2,_minmax(240px,_416px))] mq750:grid-cols-[minmax(240px,_1fr)]">
        {hotelCard1Items.map((item, index) => (
          <HotelCard1
            key={index}
            stayDetailsFlex={item.stayDetailsFlex}
            stayDetailsGap={item.stayDetailsGap}
            stayDetailsRowsMinWidth={item.stayDetailsRowsMinWidth}
            entireBungalow={item.entireBungalow}
            matterhornSuites={item.matterhornSuites}
            night={item.night}
            ratingSpace1={item.ratingSpace1}
            reviews={item.reviews}
          />
        ))}
      </div>
      <div className="rounded-[31px] bg-background-backgroundprimary hidden items-start gap-2.5 whitespace-nowrap shrink-0 text-right text-lg text-[#1262ae]">
        <div className="w-[140.7px] relative tracking-[0.04em] font-medium inline-block shrink-0">
          View all stays
        </div>
        <Image
          className="cursor-pointer [border:none] !p-0 bg-[transparent] h-6 w-6 relative"
          width={24}
          height={24}
          sizes="100vw"
          alt=""
          src="/arrow-right1.svg"
        />
      </div>
    </div>
  );
};

export default PopularStays;