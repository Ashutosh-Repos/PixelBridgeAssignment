import dog4 from "../assets/images/dog4.png";
const token = [
  { i: "LIQUIDITY", ii: "LOCKED" },
  { i: "RENOUNCED", ii: "CONTRACT" },
  { i: "TAXES", ii: "0%" },
];
function Component5() {
  return (
    <div className="w-full min-h-[70rem] max-sm:min-h-[50rem] bg-gradient-radial from-lyellow via-dyellow to-dyellow z-[1] relative overflow-hidden">
      <div className="w-[120%] aspect-square bg-white absolute  bottom-full origin-top-right right-0 rotate-[-8deg] z-[0]"></div>
      <div className="w-full h-[10rem] z-[1] px-8 flex flex-col items-end justify-end relative mt-[11rem] max-sm:mt-4 max-md:mt-[6rem] pb-8">
        <h1 className=" w-full text-left text-9xl max-xl:text-9xl max-lg:text-8xl max-md:text-7xl text-white font-['cheeseburga']">
          Roadmap
        </h1>
      </div>
      <div className="w-full min-h-[5rem] z-[1] py-2 px-8 max-sm:px-2 flex flex-col items-center justify-center gap-[1rem] relative min-[920px]:hidden">
        {token.map((e, index) => (
          <div
            className="w-96 max-sm:w-56 max-sm:h-20 h-32 max-[920px]:w-80 max-[920px]:h-20 relative bg-black rounded-2xl flex items-start justify-center flex-col px-8 max-sm:px-2 py-4 max-sm:py-1"
            key={index}
          >
            <h2 className="text-sm max-sm:text-xs text-white flex items-center justify-center font-['Montserrat'] font-bold">
              {e.i}
            </h2>
            <h1 className="text-4xl max-sm:text-xl text-white flex items-center text-lyellow justify-center font-['Montserrat'] font-bold">
              {e.ii}
            </h1>
          </div>
        ))}
      </div>
      <div className="w-full h-[30rem] max-[920px]:h-[30rem] max-sm:h-[20rem] relative flex items-center justify-center px-8 max-[920px]:flex-wrap">
        <div className="w-[30rem] min-h-[5rem] z-[1] py-14 px-8  flex flex-col items-start justify-center gap-[1rem] relative max-[920px]:hidden">
          {token.map((e, index) => (
            <div
              className="w-96  h-30 relative bg-black rounded-2xl flex items-start justify-center flex-col px-8 py-4"
              key={index}
            >
              <h2 className="text-sm text-white flex items-center justify-center font-['Montserrat'] font-bold">
                {e.i}
              </h2>
              <h1 className="text-4xl text-white flex items-center text-lyellow justify-center font-['Montserrat'] font-bold">
                {e.ii}
              </h1>
            </div>
          ))}
        </div>
        <div className="max-w-[40rem] w-full h-full relative flex items-center justify-center ">
          <div
            className=" max-lg:w-[28rem] max-w-[40rem] relative flex items-end justify-center"
            id="dog4"
          >
            <img src={dog4} className="h-full relative z-[2] absolute" />
          </div>
        </div>
      </div>
      <div className="w-[120%] aspect-square bg-white absolute  top-full origin-top-right right-0 rotate-[8deg] z-[0]"></div>
    </div>
  );
}
export default Component5;
