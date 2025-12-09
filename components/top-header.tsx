"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "antd";
import Image from "next/image";
import "/app/antd.css";

export type TopHeaderType = {
  className?: string;
};

const TopHeader: NextPage<TopHeaderType> = ({ className = "" }) => {
  const onSearchTextClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  const onHotelsTextClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <header
      className={`self-stretch h-[77px] bg-background-backgroundprimary flex items-center justify-center !pt-[22px] !pb-[22px] !pl-20 !pr-20 box-border top-[0] z-[99] sticky mq750:!pl-10 mq750:!pr-10 mq750:box-border ${className}`}
    >
      <div className="flex-1 flex items-center justify-between gap-5 max-w-full shrink-0">
        <Image className="h-[33px] w-[174px] relative overflow-hidden shrink-0" />
        <div className="flex items-center justify-end gap-9 mq450:gap-[18px]">
          <nav className="!m-0 flex items-center justify-end gap-[29.7px] text-left text-sm text-[#424242] font-[Roboto] mq750:hidden">
            <div className="relative text-[#1262af]">Explore</div>
            <div
              className="relative cursor-pointer"
              onClick={onSearchTextClick}
            >
              Search
            </div>
            <div
              className="relative cursor-pointer"
              onClick={onHotelsTextClick}
            >
              Hotels
            </div>
            <div className="relative">Offers</div>
          </nav>
          <div className="flex items-center justify-center gap-3">
            <Button
              className="h-6 w-6 relative hidden custom-hamburger-menu"
              size="small"
              style={{ width: "24px" }}
              type="primary"
            />
            <Button
              className="h-6 w-6 relative custom-notification-bell"
              size="small"
              style={{ width: "24px" }}
              type="primary"
            />
            <Button
              className="h-9 w-9 !pt-3 !pb-3 !pl-4 !pr-4 box-border custom-profile-picture"
              size="middle"
              shape="circle"
              style={{ width: "36px" }}
              type="primary"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;