"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Badge from "./badge";

export type ContentWrapperType = {
  className?: string;
};

const ContentWrapper: NextPage<ContentWrapperType> = ({ className = "" }) => {
  const [badgeItems] = useState([
    {
      color: "Amber",
      state: "Default",
      badgeContainer: "Close",
    },
    {
      color: "Red",
      state: "Default",
      badgeContainer: "ERROR",
    },
    {
      color: "Amber",
      state: "Default",
      badgeContainer: "URGENT222",
    },
    {
      color: "Amber",
      state: "Default",
      badgeContainer: "badge",
    },
    {
      color: "Yellow",
      state: "Default",
      badgeContainer: "badge",
    },
    {
      color: "Lime",
      state: "Default",
      badgeContainer: "badge",
    },
    {
      color: "Green",
      state: "Default",
      badgeContainer: "badge",
    },
    {
      color: "Emerald",
      state: "Default",
      badgeContainer: "badge",
    },
    {
      color: "Teal",
      state: "Default",
      badgeContainer: "badge",
    },
    {
      color: "Cyan",
      state: "Default",
      badgeContainer: "badge",
    },
    {
      color: "Sky",
      state: "Default",
      badgeContainer: "DRAFT",
    },
    {
      color: "Blue",
      state: "Default",
      badgeContainer: "ON PROCESS",
    },
    {
      color: "Indigo",
      state: "Default",
      badgeContainer: "badge",
    },
    {
      color: "Violet",
      state: "Default",
      badgeContainer: "badge",
    },
    {
      color: "Purple",
      state: "Default",
      badgeContainer: "badge",
    },
    {
      color: "Fuchsia",
      state: "Default",
      badgeContainer: "badge",
    },
    {
      color: "Pink",
      state: "Default",
      badgeContainer: "badge",
    },
    {
      color: "Rose",
      state: "Default",
      badgeContainer: "badge",
    },
  ]);
  return (
    <div
      className={`flex flex-col items-start gap-global-spacing-4 leading-[normal] tracking-[normal] ${className}`}
    >
      {badgeItems.map((item, index) => (
        <Badge
          key={index}
          color={item.color}
          state={item.state}
          badgeContainer={item.badgeContainer}
        />
      ))}
    </div>
  );
};

export default ContentWrapper;
