"use client";
import React from "react";
import type { NextPage } from "next";

export type BadgeType = {
  className?: string;
  badgeContainer?: string;

  /** Variant props */
  color?: string;
  state?: string;
};

const getBadgeContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Red-Default":
      return "[&]:bg-[#fee2e2]";
    case "Orange-Default":
      return "[&]:bg-[#ffedd5]";
    case "Amber-Default":
      return "[&]:bg-[#fef3c7]";
    case "Yellow-Default":
      return "[&]:bg-[#fef9c3]";
    case "Lime-Default":
      return "[&]:bg-[#ecfccb]";
    case "Green-Default":
      return "[&]:bg-[#dcfce7]";
    case "Emerald-Default":
      return "[&]:bg-[#d1fae5]";
    case "Teal-Default":
      return "[&]:bg-[#ccfbf1]";
    case "Cyan-Default":
      return "[&]:bg-[#cffafe]";
    case "Sky-Default":
      return "[&]:bg-[#e0f2fe]";
    case "Blue-Default":
      return "[&]:bg-[#dbeafe]";
    case "Indigo-Default":
      return "[&]:bg-[#e0e7ff]";
    case "Violet-Default":
      return "[&]:bg-[#ede9fe]";
    case "Purple-Default":
      return "[&]:bg-[#f3e8ff]";
    case "Fuchsia-Default":
      return "[&]:bg-background-extensions-backgroundfuchsia";
    case "Pink-Default":
      return "[&]:bg-background-extensions-backgroundpink";
    case "Rose-Default":
      return "[&]:bg-background-extensions-backgroundrose";
  }
};
const getTextStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Red-Default":
      return "[&]:text-[#b91c1c]";
    case "Orange-Default":
      return "[&]:text-[#c2410c]";
    case "Amber-Default":
      return "[&]:text-[#b45309]";
    case "Yellow-Default":
      return "[&]:text-[#a16207]";
    case "Lime-Default":
      return "[&]:text-[#4d7c0f]";
    case "Green-Default":
      return "[&]:text-[#15803d]";
    case "Emerald-Default":
      return "[&]:text-[#047857]";
    case "Teal-Default":
      return "[&]:text-[#0f766e]";
    case "Cyan-Default":
      return "[&]:text-[#0e7490]";
    case "Sky-Default":
      return "[&]:text-[#0369a1]";
    case "Blue-Default":
      return "[&]:text-[#1d4ed8]";
    case "Indigo-Default":
      return "[&]:text-[#4338ca]";
    case "Violet-Default":
      return "[&]:text-[#6d28d9]";
    case "Purple-Default":
      return "[&]:text-[#7e22ce]";
    case "Fuchsia-Default":
      return "[&]:text-content-extensions-contentfuchsia";
    case "Pink-Default":
      return "[&]:text-content-extensions-contentpink";
    case "Rose-Default":
      return "[&]:text-content-extensions-contentrose";
  }
};

const Badge: NextPage<BadgeType> = ({
  className = "",
  color = "Amber",
  state = "Default",
  badgeContainer,
}) => {
  const variantKey = [color, state].join("-");

  return (
    <div
      className={`min-w-[60px] rounded-global-borderradius-rounded-md bg-border-bordersecondary flex items-center justify-center !pt-global-spacing-1 !pb-global-spacing-1 !pl-global-spacing-15 !pr-global-spacing-15 text-center text-xs text-[#71717a] font-[Inter] ${getBadgeContainerStyle(
        variantKey
      )} ${className}`}
    >
      <div
        className={`relative leading-4 font-medium ${getTextStyle(variantKey)}`}
      >
        {badgeContainer}
      </div>
    </div>
  );
};

export default Badge;
