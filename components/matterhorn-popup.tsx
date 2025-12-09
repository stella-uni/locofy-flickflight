"use client";
import type { NextPage } from "next";

export type MatterhornPopupType = {
  className?: string;
  onClose?: () => void;
};

const MatterhornPopup: NextPage<MatterhornPopupType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div
      className={`w-[900px] relative rounded-lg bg-background-backgroundprimary flex flex-col items-start !p-5 box-border max-w-full max-h-full overflow-auto sm:!p-2.5 sm:box-border ${className}`}
    >
      <iframe
        className="self-stretch h-[560px] relative sm:h-[50.625vw!important]"
        src={`https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default MatterhornPopup;
