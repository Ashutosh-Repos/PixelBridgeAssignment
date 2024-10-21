import arrow2 from "../assets/images/arrow2.png";
import m1 from "../assets/images/m1.png";
import m2 from "../assets/images/m2.png";
import m3 from "../assets/images/m3.png";
import m4 from "../assets/images/m4.png";
import m1bg from "../assets/images/m1bg.png";
import m2bg from "../assets/images/m2bg.png";
import m3bg from "../assets/images/m3bg.png";
import m4bg from "../assets/images/m4bg.png";
import { useEffect, useState, useRef } from "react";

function Component6() {
  const merchdata = [
    { source: m1 },
    { source: m2 },
    { source: m3 },
    { source: m4 },
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === merchdata.length - 1 ? 0 : prevIndex + 1
        ),
      2000
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const handleMouseEnter = () => {
    resetTimeout(); // Clear the timeout to stop sliding
  };

  // Resume slideshow when not hovering
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === merchdata.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );
  };
  return (
    <div className="w-full min-h-[50rem] max-sm:min-h-[40rem] max-[350px]:min-h-[25rem] flex flex-col items-center justify-evenly overflow-hidden relative z-[1] bg-transparent overflow-hidden overflow-y-hidden">
      <h1
        className="w-full text-8xl font-['cheeseburga'] text-center mt-20 max-sm:mt-2 relative max-md:text-7xl max-sm:text-5xl "
        style={{ color: "#FFA800" }}
      >
        Merchandise
      </h1>
      <div className="w-full h-[35rem] max-sm:h-[20rem] max-sm:w-full max-[380px]:h-[18rem] mt-20 max-sm:mt-10 relative flex items-center justify-center max-sm:px-4 max-sm:py-1  px-8 py-4 z-10">
        <img
          src={arrow2}
          className=" absolute max-2xl:left-40 max-xl:left-30 max-lg:left-16 max-sm:left-8 w-14 drop-shadow-[2px_4px_5px_rgba(0,0,0,0.4)] max-sm:w-8 z-10"
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            } else {
              setIndex(0);
            }
          }}
        />
        <div
          className="w-[45rem] h-[30rem] max-md:h-[25rem] max-[380px]:h-[15rem] max-sm:h-[23rem] max-sm:w-full overflow-hidden flex relative overflow-hidden"
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => {
            handleMouseLeave();
          }}
        >
          <img
            src={
              index == 0 ? m1bg : index == 1 ? m2bg : index == 2 ? m3bg : m4bg
            }
            className="w-full rounded-2xl"
          />
          <img
            src={m1}
            className="absolute w-full h-full"
            style={{
              transform: `translate3d(${(0 - index) * 100}%, 0, 0)`,
              transition: "all 1s ease-in-out",
            }}
          />
          <img
            src={m2}
            className="absolute w-full h-full"
            style={{
              transform: `translate3d(${(1 - index) * 100}%, 0, 0)`,
              transition: "all 1s ease-in-out",
            }}
          />
          <img
            src={m3}
            className="absolute w-full h-full"
            style={{
              transform: `translate3d(${(2 - index) * 100}%, 0, 0)`,
              transition: "all 1s ease-in-out",
            }}
          />
          <img
            src={m4}
            className="absolute w-full h-full"
            style={{
              transform: `translate3d(${(3 - index) * 100}%, 0, 0)`,
              transition: "all 1s ease-in-out",
            }}
          />
        </div>

        <img
          src={arrow2}
          className=" absolute max-2xl:right-40 max-xl:right-30 max-lg:right-16 max-sm:right-8 w-14 rotate-[180deg] drop-shadow-[-2px_-4px_5px_rgba(0,0,0,0.4)] max-sm:w-8 z-10"
          onClick={() => {
            if (index < 3) {
              setIndex(index + 1);
            } else {
              setIndex(0);
            }
          }}
        />
      </div>
      <div className="w-[120%] aspect-square bg-dyellow absolute origin-top-left  top-[calc(100%-2rem)] left-5rem rotate-[-8deg] z-[0]"></div>
    </div>
  );
}
export default Component6;
