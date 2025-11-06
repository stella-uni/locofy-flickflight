import type { NextPage } from "next";
import { Button } from "antd";
import "/app/antd.css";
import Image from "next/image";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex items-start justify-center !pt-[33px] !pb-[33px] !pl-[84px] !pr-[83px] gap-11 text-left text-lg text-studio-darkmode-allwhite-ffffff font-[Roboto] lg:flex-wrap mq750:gap-[22px] mq750:!pl-[42px] mq750:!pr-[41px] mq750:box-border mq450:!pl-5 mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start gap-3.5 min-w-[385px] mq750:min-w-full">
        <Image
          className="w-[174px] h-[33px] relative"
          loading="lazy"
          width={174}
          height={33}
          sizes="100vw"
          alt=""
          src="/Logo.svg"
        />
        <div className="self-stretch relative leading-[27px]">
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <div className="w-[130px] h-[30px] flex items-start gap-5">
          <Button
            className="h-[30px] w-[30px] relative custom-entypo-socialfacebook-with-ci"
            size="small"
            style={{ width: "30px" }}
            type="primary"
          />
          <Button
            className="h-[30px] w-[30px] relative custom-entypo-socialinstagram-with-c"
            size="small"
            style={{ width: "30px" }}
            type="primary"
          />
          <Button
            className="h-[30px] w-[30px] relative custom-entypo-socialtwitter-with-cir"
            size="small"
            style={{ width: "30px" }}
            type="primary"
          />
        </div>
      </div>
      <div className="h-[157.9px] w-px relative border-[rgba(255,255,255,0.2)] border-solid border-r-[1px] box-border lg:w-[100px] lg:h-px lg:border-[rgba(255,255,255,0.2)] lg:border-solid lg:lg:border-t-[1px] lg:box-border" />
      <div className="flex-1 flex items-start justify-between gap-0 min-w-[385px] [row-gap:20px] text-xl mq750:flex-wrap mq750:gap-0 mq750:min-w-full">
        <div className="h-[159.8px] w-[197.3px] flex flex-col items-start !pt-0 !pb-[0.1px] !pl-0 !pr-0 box-border gap-[20.7px]">
          <h3 className="!m-0 w-[174.7px] h-[27px] relative text-[length:inherit] leading-[27px] font-medium font-[inherit] inline-block mq450:text-base mq450:leading-[22px]">
            Company
          </h3>
          <div className="flex flex-col items-start gap-3 text-base">
            <div className="w-[135.7px] h-[19px] relative inline-block">
              About Us
            </div>
            <div className="w-[84.3px] h-[19px] relative inline-block">
              News
            </div>
            <div className="w-[115.1px] h-[19px] relative inline-block">
              Careers
            </div>
            <div className="w-[197.3px] h-[19px] relative inline-block">
              How we work
            </div>
          </div>
        </div>
        <div className="h-[159.8px] w-[197.3px] flex flex-col items-start !pt-0 !pb-[0.1px] !pl-0 !pr-0 box-border gap-[20.7px]">
          <h3 className="!m-0 w-[131.6px] h-[27px] relative text-[length:inherit] leading-[27px] font-medium font-[inherit] inline-block mq450:text-base mq450:leading-[22px]">
            Support
          </h3>
          <div className="flex flex-col items-start gap-3 text-base">
            <div className="w-[109.6px] h-[19px] relative inline-block">
              Account
            </div>
            <div className="w-[197.3px] h-[19px] relative inline-block">
              Support Center
            </div>
            <div className="w-[53px] h-[19px] relative inline-block">FAQ</div>
            <div className="w-[164.4px] h-[19px] relative inline-block">
              Accessibility
            </div>
          </div>
        </div>
        <div className="h-[159.8px] w-[197.3px] flex flex-col items-start !pt-0 !pb-[0.1px] !pl-0 !pr-0 box-border gap-[20.7px]">
          <h3 className="!m-0 w-[76.7px] h-[27px] relative text-[length:inherit] leading-[27px] font-medium font-[inherit] inline-block mq450:text-base mq450:leading-[22px]">
            More
          </h3>
          <div className="flex flex-col items-start gap-3 text-base">
            <div className="w-[172.9px] h-[19px] relative inline-block">
              Covid Advisory
            </div>
            <div className="w-[135.4px] h-[19px] relative inline-block">
              Airline Fees
            </div>
            <div className="w-[50.6px] h-[19px] relative inline-block">
              Tips
            </div>
            <div className="w-[197.3px] h-[19px] relative inline-block">
              Quarantine Rules
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
