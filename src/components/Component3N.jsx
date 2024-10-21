import dog3 from "../assets/images/dog3.png";
import r1 from "../assets/images/r1.png";
import r2 from "../assets/images/r2.png";
import r3 from "../assets/images/r3.png";
import r4 from "../assets/images/r4.png";
function Component3N() {
  const roadmap = [
    {
      text: "Community Building and Initial Launch",
      source: r1,
      low: "#FFF28000",
      high: "#DBC70CFF",
    },
    {
      text: "Merchandise Store Launch",
      source: r2,
      low: "#41FFFF00",
      high: "#00D4D4FF",
    },
    {
      text: "Community Events and contests",
      source: r3,
      low: "#D427FF00",
      high: "#D427FFFF",
    },
    {
      text: "Expansion and New Features",
      source: r4,
      low: "#8F3A3C00",
      high: "#8F3A3CFF",
    },
  ];
  return (
    <>
      <div
        className="w-full h-full max-[920px]:h-[25rem] z-[1] py-8 px-8  flex flex-col items-end justify-center gap-[1rem] relative"
        style={{
          background:
            "-webkit-radial-gradient(top,#FFF280,#FFC700,#FFC700,#FFC700)",
        }}
      >
        <h1 className=" w-full text-left text-9xl max-xl:text-9xl max-lg:text-8xl max-md:text-7xl text-white font-['cheeseburga']">
          Roadmap
        </h1>
      </div>

      <div className="w-full h-full max-[920px]:h-[25rem] bg-dyellow z-[1] py-8 px-8  flex flex-col items-enter justify-center gap-[1rem] relative min-[920px]:hidden z-[0] ">
        <h1 className="text-left text-3xl max-xl:text-2xl max-lg:text-xl text-black font-['Kumbh Sans'] font-semibold">
          Our journey is just beginning. Explore our roadmap to see the exciting
          milestones and future plans we have in store.
        </h1>
        <h1 className="text-left text-3xl max-xl:text-2xl max-lg:text-xl text-white font-['Kumbh Sans'] font-semibold">
          Join us as we grow and achieve new heights.
        </h1>
      </div>

      <div className="w-full h-[40rem] max-[920px]:h-[30rem] bg-dyellow relative flex items-start justify-center px-8 max-[920px]:flex-wrap">
        <div className="w-full h-full min-w-[20rem] min-h-[20rem] z-[1] py-8 px-14  flex flex-col items-end justify-center gap-[1rem] relative max-[920px]:hidden">
          <h1 className="text-left text-3xl max-xl:text-2xl max-lg:text-xl text-black font-['Kumbh Sans'] font-semibold">
            Our journey is just beginning. Explore our roadmap to see the
            exciting milestones and future plans we have in store.
          </h1>
          <h1 className="text-left text-3xl max-xl:text-2xl max-lg:text-xl text-dyellow font-['Kumbh Sans'] font-semibold">
            Join us as we grow and achieve new heights.
          </h1>
        </div>
        <div className="w-full h-full relative flex items-end justify-center">
          <div
            className="w-full h-full relative flex items-end justify-center"
            id="dog3"
          >
            <img src={dog3} className="h-full relative z-[1] absolute" />
          </div>
        </div>
        <div className="w-[120%] aspect-square bg-white absolute  top-1/2 right-0 rotate-[8deg] z-[0]"></div>
      </div>
      <div className="w-full min-h-[27rem] z-[2] relative flex items-center mt-[5rem] justify-center max-sm:px-4  px-20">
        <div className="h-full w-full relative rounded-[2rem] flex items-center overflow-x-scroll overflow-y-hidden gap-4">
          {roadmap.map((e, index) => (
            <div
              className="min-w-72 h-full relative drop-shadow-[2px_3px_5px_rgba(0,0,0,0.185)] my-4 flex items-center justify-center flex-col px-4 py-4"
              style={{ background: `linear-gradient(${e.high}, ${e.low})` }}
              key={index}
            >
              <h1 className="text-center text-2xl text-white font-['Montserrat'] font-bold h-[25%] w-52">
                {e.text}
              </h1>
              <img src={e.source} alt="" className=" h-[75%] maskIm" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Component3N;
