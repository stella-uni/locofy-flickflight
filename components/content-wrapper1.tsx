"use client";
import type { NextPage } from "next";
import { useState } from "react";
import { Button } from "antd";
import "/app/antd.css";
import Badge from "./badge";

export type ContentWrapper1Type = {
  className?: string;
};

const ContentWrapper1: NextPage<ContentWrapper1Type> = ({ className = "" }) => {
  const [badgeItems] = useState([
    {
      color: "Red",
      state: "Default",
      badgeContainer: "ERROR",
    },
    {
      color: "Orange",
      state: "Default",
      badgeContainer: "URGENT",
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
      <Button
        className="!pt-global-spacing-1 !pb-global-spacing-1 !pl-global-spacing-15 !pr-global-spacing-15 custom-badge"
        size="small"
        type="primary"
      >
        CLOSE
      </Button>
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

export default ContentWrapper1;
