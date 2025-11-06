import type { NextPage } from "next";
import TopHeader from "../components/top-header";
import SearchSection from "../components/search-section";
import UpcomingFlightSection from "../components/upcoming-flight-section";
import PopDestinationsMain from "../components/pop-destinations-main";
import RecommendedHolidaysContainer from "../components/recommended-holidays-container";
import PopularStays from "../components/popular-stays";
import SubscribeSection from "../components/subscribe-section";
import Footer from "../components/footer";

const Homepage: NextPage = () => {
  return (
    <div className="w-full relative bg-studio-darkmode-allwhite-ffffff flex flex-col items-center gap-[69px] leading-[normal] tracking-[normal] hover:[background:linear-gradient(#fff,_#fff),_#87550a] mq750:gap-[34px] mq450:gap-[17px]">
      <section className="self-stretch flex flex-col items-center">
        <TopHeader />
        <SearchSection />
      </section>
      <main className="w-[1440px] flex flex-col items-center !pt-0 !pb-0 !pl-20 !pr-20 box-border gap-20 mq750:gap-10 mq750:!pl-10 mq750:!pr-10 mq750:box-border mq450:gap-5">
        <UpcomingFlightSection />
        <PopDestinationsMain />
        <RecommendedHolidaysContainer />
        <PopularStays />
      </main>
      <section className="self-stretch flex flex-col items-start max-w-full">
        <SubscribeSection />
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
