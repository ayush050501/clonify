import React from "react";

const Premium = () => {
  return (
    <>
      <div className="w-full px-9 py-8 bg-zinc-800 rounded-2xl justify-between items-center inline-flex">
        <div className=" self-stretch flex-col justify-start items-start gap-2 inline-flex">
          <div className=" text-white text-[28px] font-semibold font-['Inter'] leading-[34px]">
            Unlock premium stats
          </div>
          <div className="w text-white text-sm font-normal font-['Inter'] leading-snug">
            Get up to 10TB of storage for a limited time
          </div>
        </div>
        <div className="self-stretch px-6 py-[9px] bg-white rounded-[39px] justify-center items-center gap-1 inline-flex">
          <div className=" relative" />
          <button><div className="text-center text-zinc-800 text-base font-semibold font-['Inter'] leading-7">
            Upgrade
          </div></button>
        </div>
      </div>
    </>
  );
};

export default Premium;
