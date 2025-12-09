"use client";
import type { NextPage } from "next";

const Contents: NextPage = () => {
  return (
    <div className="w-full h-[1358px] relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-global-border-radius-rounded-lg bg-background-backgroundprimary border-border-bordersecondary border-solid border-[1px] box-border overflow-hidden flex flex-col items-start !pt-layout-gap-title-body-large !pb-layout-gap-title-body-large !pl-global-spacing-10 !pr-global-spacing-10 leading-[normal] tracking-[normal]">
      <nav className="!m-0 flex flex-col items-start gap-9 text-left text-xs text-content-contentprimary font-[Inter]">
        <h3 className="!m-0 relative text-lg leading-7 font-semibold font-[inherit]">
          Test
        </h3>
        <div className="relative text-base leading-6 font-semibold">Test</div>
        <div className="relative text-sm leading-5 font-semibold">Test</div>
        <div className="relative leading-4 font-semibold">Test</div>
        <div className="relative leading-4 font-semibold">Test</div>
      </nav>
    </div>
  );
};

export default Contents;
