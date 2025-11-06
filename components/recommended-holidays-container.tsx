"use client";
import type { NextPage } from "next";
import { useState } from "react";
import { Button } from "antd";
import "/app/antd.css";
import Image from "next/image";
import RecCard1 from "./rec-card1";

export type RecommendedHolidaysContainerType = {
  className?: string;
};

const RecommendedHolidaysContainer: NextPage<
  RecommendedHolidaysContainerType
> = ({ className = "" }) => {
  const [recCard1Items] = useState([
    {
      unsplash5MV818tzxeo: "/unsplash-5MV818tzxeo@2x.png",
      bali: "Bali",
      d3N: "4D3N",
      discountValue: "$899",
    },
    {
      unsplash5MV818tzxeo: "/SwitzerlandImage@2x.png",
      bali: "Swiss",
      d3N: "6D5N",
      discountValue: "$900",
    },
    {
      unsplash5MV818tzxeo: "/BoracayImage@2x.png",
      bali: "Boracay",
      d3N: "5D4N",
      discountValue: "$699",
    },
    {
      unsplash5MV818tzxeo: "/PalawanImage@2x.png",
      bali: "Palawan",
      d3N: "4D3N",
      discountValue: "$789",
    },
  ]);
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-center gap-6 text-left text-3xl text-[#303030] font-[Roboto] ${className}`}
    >
      <div className="self-stretch flex items-center [row-gap:20px] lg:flex-wrap">
        <h2 className="!m-0 flex-1 relative text-[length:inherit] tracking-[0.04em] capitalize font-bold font-[inherit] inline-block min-w-[278px] mq1050:text-2xl mq450:text-lg">
          Recommended Holidays
        </h2>
        <Button
          className="w-[199.9px] custom-view-all-button"
          size="small"
          shape="round"
          icon={<img width="24px" height="24px" src="/arrow-right.svg" />}
          iconPosition="end"
          style={{ width: "199.9px" }}
          type="primary"
        >
          View all holidays
        </Button>
      </div>
      <div className="self-stretch grid items-start grid-cols-[repeat(4,_minmax(240px,_1fr))] text-xl text-[#424242] lg:[grid-row-gap:20px] lg:justify-center lg:grid-cols-[repeat(2,_minmax(240px,_416px))] mq750:grid-cols-[minmax(240px,_1fr)]">
        {recCard1Items.map((item, index) => (
          <RecCard1
            key={index}
            unsplash5MV818tzxeo={item.unsplash5MV818tzxeo}
            bali={item.bali}
            d3N={item.d3N}
            discountValue={item.discountValue}
          />
        ))}
      </div>
      <div className="w-[199.9px] rounded-[31px] bg-studio-darkmode-allwhite-ffffff hidden items-start gap-2.5 whitespace-nowrap text-right text-lg text-[#1262ae]">
        <div className="w-[165.9px] relative tracking-[0.04em] font-medium inline-block shrink-0">
          View all holidays
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
    </section>
  );
};

export default RecommendedHolidaysContainer;
