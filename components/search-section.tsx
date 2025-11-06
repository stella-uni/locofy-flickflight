import type { NextPage } from "next";
import { Radio, Input, DatePicker, Button } from "antd";
import "/app/antd.css";
import Image from "next/image";

export type SearchSectionType = {
  className?: string;
};

const SearchSection: NextPage<SearchSectionType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[640px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] flex items-start relative text-center text-[61px] text-studio-darkmode-allwhite-ffffff font-['Baloo_Bhai'] mq1050:h-auto ${className}`}
    >
      <div className="h-[639.9px] w-[1440px] relative [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] hidden z-[0]" />
      <Image
        className="h-full w-full absolute !!m-[0 important] top-[0.4px] right-[0px] left-[0px] max-w-full overflow-hidden object-cover z-[1]"
        width={1440}
        height={640}
        sizes="100vw"
        alt=""
        src="/Banner-Background@2x.png"
      />
      <div className="h-[640px] w-[1440px] flex flex-col items-center justify-center !pt-0 !pb-0 !pl-5 !pr-5 box-border gap-[43px] z-[2] mq1050:h-auto mq750:gap-[21px]">
        <div className="w-[1160px] flex flex-col items-center gap-[5px]">
          <h1 className="!m-0 self-stretch relative text-[length:inherit] leading-[67px] font-normal font-[inherit] mq1050:text-[49px] mq1050:leading-[54px] mq450:text-[37px] mq450:leading-10">{`Let’s explore & travel the world`}</h1>
          <h3 className="!m-0 self-stretch relative text-2xl leading-8 font-normal font-[Roboto] mq450:text-[19px] mq450:leading-[26px]">
            Find the best destinations and the most popular stays!
          </h3>
        </div>
        <section className="w-[1160px] rounded-[10px] bg-studio-darkmode-allwhite-ffffff flex flex-col items-start !p-5 box-border gap-1 text-left text-xl text-[#303030] font-[Roboto]">
          <div className="self-stretch overflow-hidden flex items-center !p-[5px] gap-[5px] mq1050:flex-wrap">
            <h3 className="!m-0 flex-1 relative text-[length:inherit] tracking-[0.04em] uppercase font-bold font-[inherit] inline-block min-w-[137px] mq450:text-base">
              Search flights
            </h3>
            <div className="flex items-center text-base text-[rgba(48,48,48,0.87)]">
              <div className="h-[38px] w-[216.5px] flex items-start gap-5">
                <div className="overflow-hidden flex items-center">
                  <Radio
                    className="h-[38px] w-[38px] custom-padding"
                    defaultChecked="true"
                  />
                  <div className="relative tracking-[0.15px] leading-[150%]">
                    Return
                  </div>
                </div>
                <div className="overflow-hidden flex items-center">
                  <input
                    className="cursor-pointer !m-0 h-[38px] w-[38px] rounded-[19px] flex !p-[9px] box-border"
                    checked={true}
                    type="radio"
                  />
                  <div className="w-[72.5px] relative tracking-[0.15px] leading-[150%] inline-block shrink-0">
                    One-way
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex items-start flex-wrap content-start gap-0 [row-gap:20px]">
            <div className="flex-1 flex items-start !p-[5px] box-border gap-2.5 min-w-[615px] mq1050:flex-wrap mq750:min-w-full">
              <Input
                className="bg-[transparent] h-14 flex-1 font-[Roboto] text-base text-[rgba(0,0,0,0.87)] min-w-[229px] custom-departure-field"
                size="large"
                placeholder="Departure"
                type="text"
                variant="borderless"
              />
              <Input
                className="bg-[transparent] h-14 flex-1 font-[Roboto] text-base text-[rgba(0,0,0,0.87)] min-w-[229px] custom-arrival-field"
                size="large"
                placeholder="Arrival"
                type="text"
                variant="borderless"
              />
              <DatePicker
                className="h-14 flex-1 min-w-[229px] custom-selectoutlined-datetimepicker"
                picker="date"
                placeholder="Date"
                suffixIcon={<img width="24px" height="24px" src="/date.svg" />}
                allowClear={false}
              />
            </div>
            <div className="flex flex-col items-center justify-center !p-[5px] mq1050:flex-1">
              <Button
                className="w-[164px] h-14 mq1050:text-center mq1050:self-stretch mq1050:w-full mq1050:min-w-[164px] custom-search-flights-button"
                size="large"
                style={{ width: "164px" }}
                type="primary"
              >
                Search flights
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchSection;
