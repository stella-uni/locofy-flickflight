import type { NextPage } from "next";
import { Input, Button } from "antd";
import "/app/antd.css";
import Image from "next/image";

export type SubscribeSectionType = {
  className?: string;
};

const SubscribeSection: NextPage<SubscribeSectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch h-[529px] bg-[#f3f7fb] overflow-hidden shrink-0 flex items-start justify-center !pt-[52px] !pb-[42px] !pl-0 !pr-0 box-border relative max-w-full mq750:!pt-[34px] mq750:!pb-[27px] mq750:box-border ${className}`}
    >
      <Image
        className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden object-cover"
        width={1440}
        height={530}
        sizes="100vw"
        alt=""
        src="/Subscribe-section-background@2x.png"
      />
      <section className="w-[549px] flex flex-col items-center !p-5 box-border gap-[30px] max-w-full z-[1] text-center text-lg text-[#1262ae] font-[Roboto]">
        <div className="self-stretch flex flex-col items-center gap-[7px]">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            subscribe to our newsletter
          </b>
          <h2 className="!m-0 self-stretch relative text-3xl font-bold font-[inherit] text-[#434343] mq1050:text-2xl mq450:text-lg">
            Get weekly updates
          </h2>
        </div>
        <form className="!m-0 self-stretch shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-studio-darkmode-allwhite-ffffff border-[#eaeaea] border-solid border-[1px] flex flex-col items-start !pt-[26px] !pb-[26px] !pl-[29px] !pr-[29px] gap-[17px]">
          <div className="self-stretch flex flex-col items-start">
            <div className="self-stretch relative text-lg leading-[34px] font-[Roboto] text-[#576074] text-left">
              Fill in your details to join the party!
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start gap-2.5">
            <Input
              className="bg-[transparent] self-stretch h-14 font-[Roboto] text-base text-[rgba(0,0,0,0.6)] custom-destination-name-input"
              size="large"
              placeholder="Your name"
              suffix={<img width="24px" height="24px" src="/Arrow.svg" />}
              type="text"
              variant="borderless"
            />
            <Input
              className="bg-[transparent] self-stretch h-14 font-[Roboto] text-base text-[rgba(0,0,0,0.6)] custom-name-input"
              size="large"
              placeholder="Email address"
              suffix={<img width="24px" height="24px" src="/Arrow-1.svg" />}
              type="text"
              variant="borderless"
            />
          </div>
          <Button
            className="w-[164px] h-14 hover:bg-[#dc880b] custom-button"
            size="large"
            style={{ width: "164px" }}
            type="primary"
            htmlType="submit"
          >
            submit
          </Button>
        </form>
      </section>
    </div>
  );
};

export default SubscribeSection;
