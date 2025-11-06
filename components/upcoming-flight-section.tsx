import type { NextPage } from "next";
import { Button } from "antd";
import "/app/antd.css";
import Image from "next/image";
import FlightMainContainer from "./flight-main-container";

export type UpcomingFlightSectionType = {
  className?: string;
};

const UpcomingFlightSection: NextPage<UpcomingFlightSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start text-left text-lg text-[#303030] font-[Roboto] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start gap-5">
        <b className="self-stretch relative tracking-[0.04em] uppercase">
          Recent Searches
        </b>
        <div className="self-stretch flex flex-col items-start justify-center gap-9 text-2xl text-[#1262ae] mq750:gap-[18px]">
          <div className="self-stretch flex items-center justify-center flex-wrap content-center gap-[15px]">
            <FlightMainContainer sIN="SIN" duration="/Duration.svg" lAX="LAX" />
            <FlightMainContainer sIN="MY" duration="/Duration.svg" lAX="DUB" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-5 text-lg text-[#cecece]">
            <div className="self-stretch relative tracking-[0.04em] uppercase">
              Prepare for your trip
            </div>
            <div className="self-stretch flex items-start justify-between flex-wrap content-start gap-5 text-center text-[15px] text-[#8e8e94]">
              <div className="flex flex-col items-center justify-center gap-2 text-left">
                <Image
                  className="w-[65.4px] h-[65.4px] relative"
                  loading="lazy"
                  width={65.4}
                  height={65.4}
                  sizes="100vw"
                  alt=""
                  src="/Hotel-Icon.svg"
                />
                <div className="relative tracking-[0.04em]">Hotel</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-[65.4px] h-[65.4px] rounded-2xl bg-[#ff9b53] flex items-start !pt-[17px] !pb-[17.1px] !pl-4 !pr-4 box-border">
                  <div className="h-[65.4px] w-[65.4px] relative rounded-2xl bg-[#ff9b53] hidden" />
                  <Button
                    className="h-[31.3px] w-[31.6px] relative z-[1] custom-ticket"
                    size="small"
                    style={{ width: "31.6px" }}
                    type="primary"
                  />
                </div>
                <div className="relative tracking-[0.04em]">Attractions</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <Image
                  className="w-[65.4px] h-[65.4px] relative"
                  loading="lazy"
                  width={65.4}
                  height={65.4}
                  sizes="100vw"
                  alt=""
                  src="/Eats-Icon.svg"
                />
                <div className="relative tracking-[0.04em]">Eats</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-[65.4px] h-[65.4px] relative rounded-2xl bg-[#fdbf00]">
                  <div className="absolute top-[0px] left-[0px] rounded-2xl bg-[#fdbf00] w-full h-full hidden" />
                  <Button
                    className="absolute h-[48.47%] w-[41.13%] top-[26.45%] right-[29.51%] bottom-[25.08%] left-[29.36%] z-[1] custom-train"
                    size="small"
                    style={{ width: "26.9px" }}
                    type="primary"
                  />
                </div>
                <div className="relative tracking-[0.04em]">Commute</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-[70px] h-[65.4px] relative rounded-2xl bg-[#4dabff]">
                  <div className="absolute top-[0px] left-[0px] rounded-2xl bg-[#4dabff] w-full h-full hidden" />
                  <Button
                    className="absolute h-[40.21%] w-[40.57%] top-[29.66%] right-[29.57%] bottom-[30.12%] left-[29.86%] z-[1] custom-taxi"
                    size="small"
                    style={{ width: "28.4px" }}
                    type="primary"
                  />
                </div>
                <div className="w-[32.1px] relative tracking-[0.04em] inline-block">
                  Taxi
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-[65.4px] h-[65.4px] relative rounded-2xl bg-[#79ca00]">
                  <div className="absolute top-[0px] left-[0px] rounded-2xl bg-[#79ca00] w-full h-full hidden" />
                  <Button
                    className="absolute h-[35.63%] w-[39.91%] top-[32.26%] right-[29.97%] bottom-[32.11%] left-[30.12%] z-[1] custom-movie"
                    size="small"
                    style={{ width: "26.1px" }}
                    type="primary"
                  />
                </div>
                <div className="relative tracking-[0.04em]">Movies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingFlightSection;
