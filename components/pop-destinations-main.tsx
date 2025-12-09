"use client";
import type { NextPage } from "next";
import { useState } from "react";
import { Button } from "antd";
import "/app/antd.css";
import Image from "next/image";
import Col1 from "./col1";

export type PopDestinationsMainType = {
  className?: string;
};

const PopDestinationsMain: NextPage<PopDestinationsMainType> = ({
  className = "",
}) => {
  const [col1Items] = useState([
    {
      paris: "Paris",
      detailsWidth: "90.9px",
      priceValue1: "$699",
      priceValueWidth1: "90.9px",
    },
    {
      paris: "Greece",
      detailsWidth: "99.9px",
      priceValue1: "$1079",
      priceValueWidth1: "99px",
    },
    {
      paris: "Norway",
      detailsWidth: "",
      priceValue1: "$895",
      priceValueWidth1: "",
    },
    {
      paris: "Tuscany",
      detailsWidth: "100.6px",
      priceValue1: "$1245",
      priceValueWidth1: "100.6px",
    },
  ]);
  return (
    <section
      className={`self-stretch flex flex-col items-start gap-6 text-left text-lg text-[#1262ae] font-[Roboto] ${className}`}
    >
      <div className="self-stretch flex items-center [row-gap:20px] shrink-0 lg:flex-wrap">
        <div className="flex-1 flex flex-col items-start gap-1.5 min-w-[682px] mq1050:min-w-full">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Plan your next trip
          </b>
          <h2 className="!m-0 self-stretch relative text-3xl tracking-[0.04em] capitalize font-bold font-[inherit] text-[#303030] mq1050:text-2xl mq450:text-lg">
            Most Popular Destinations
          </h2>
        </div>
        <Button
          className="w-[231.4px] custom-view-all-top"
          size="small"
          shape="round"
          icon={<img width="24px" height="24px" src="/arrow-right.svg" />}
          iconPosition="end"
          style={{ width: "231.4px" }}
          type="primary"
        >
          View all destinations
        </Button>
      </div>
      <div className="self-stretch grid items-start grid-cols-[repeat(4,_minmax(240px,_1fr))] shrink-0 text-xl text-background-backgroundprimary lg:[grid-row-gap:20px] lg:justify-center lg:grid-cols-[repeat(2,_minmax(240px,_416px))] mq750:grid-cols-[minmax(240px,_1fr)]">
        {col1Items.map((item, index) => (
          <Col1
            key={index}
            paris={item.paris}
            detailsWidth={item.detailsWidth}
            priceValue1={item.priceValue1}
            priceValueWidth1={item.priceValueWidth1}
          />
        ))}
      </div>
      <div className="w-[231.4px] rounded-[31px] bg-background-backgroundprimary hidden items-start gap-2.5 whitespace-nowrap shrink-0 text-right">
        <div className="w-[197.3px] relative tracking-[0.04em] font-medium inline-block shrink-0">
          View all destinations
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

export default PopDestinationsMain;