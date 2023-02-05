import Navbar from "./Navbar";
import { useState } from "react";
import LoginModal from "./modals/LoginModal";

const Landing: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center py-[120px] bg-slate-700">
        <h1 className="max-w-[810px] font-lexend font-medium text-cool-gray-900 text-center text-[69px] leading-[81px] -tracking-[0.02em] dark:text-white-100">
          Bringing the{" "}
          <span className="text-primary-light dark:text-primary-dark relative z-10">
            magic of
          </span>{" "}
          movies to you
        </h1>
        <h3 className="max-w-[600px] font-inter text-cool-gray-600 text-center text-[17px] leading-[30px] -tracking-[0.01em] mt-5 mb-10">
          Step inside and be transported to a world of your choosing
        </h3>
        <div className="flex flex-row gap-5">
          <button
            type="button"
            className="font-inter font-medium text-sm leading-[17px] text-white-100 bg-cool-gray-900 rounded-full px-5 py-4 border-black border-2 dark:text-[#0F172A] dark:bg-white-100"
          >
            Browse Films
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(true);
            }}
            className="font-inter font-medium text-sm leading-[17px] text-cool-gray-600 bg-white-100 rounded-full border px-5 py-4 border-cool-gray-200 flex flex-row flex-nowrap items-center gap-2.5 dark:text-cool-gray-600 dark:bg-primary-dark"
          >
            View my reservations
          </button>
        </div>
      </div>
      {open ? <LoginModal open={open} setOpen={setOpen} /> : ""}
    </>
  );
};

export default Landing;
