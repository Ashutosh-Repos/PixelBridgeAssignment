import dog1 from "../assets/images/dog1.png";

function Top() {
  return (
    <>
      <div className="w-full h-full max-[920px]:h-[25rem] bg-gradient-radial from-lyellow via-dyellow to-dyellow z-[1] py-8 px-8  flex flex-col items-center justify-center gap-[1rem] relative min-[920px]:hidden z-[0]">
        <span className="w-1/4 h-2 absolute top-4 flex items-center justify-center mb-4">
          <span className="w-20 h-full bg-[#FFF6A1] rounded"></span>
        </span>
        <h2 className="text-right text-6xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-4xl font-black font-['Montserrat'] w-full mt-8">
          History Of
        </h2>
        <h1 className="text-right text-9xl max-xl:text-9xl max-lg:text-8xl max-md:text-6xl max-sm:text-5xl text-white font-['cheeseburga'] w-full">
          ALABAY
        </h1>
        <p className="text-right text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm font-bold font-['Kumbh Sans'] w-full">
          The Central Asian Shepherd Dog, also known as Alabay, has been a
          guardian of livestock and property for centuries. Originating from
          Central Asia, these dogs are renowned for their courage, strength, and
          loyalty.
        </p>
      </div>
      <div className="w-full h-[40rem] max-[920px]:h-[30rem] bg-gradient-radial bg-gradient-radial from-lyellow via-dyellow to-dyellow relative flex flex-row-reverse items-center justify-center px-8 max-[920px]:flex-wrap">
        <span className="w-1/2 h-2 absolute top-4 flex items-center justify-center max-[920px]:hidden">
          <span className="w-24 h-full bg-[#FFF6A1] rounded"></span>
        </span>
        <div className="w-full h-full min-w-[20rem] min-h-[20rem] z-[1] py-8 px-8  flex flex-col mt-8 items-end justify-center gap-[1rem] relative max-[920px]:hidden">
          <h2 className="text-right text-6xl max-xl:text-6xl max-lg:text-5xl font-black font-['Montserrat']">
            History Of
          </h2>
          <h1 className="text-right text-9xl max-xl:text-9xl max-lg:text-8xl text-white font-['cheeseburga']">
            ALABAY
          </h1>
          <p className="text-right text-3xl max-xl:text-2xl max-lg:text-xl font-bold font-['Kumbh Sans']">
            The Central Asian Shepherd Dog, also known as Alabay, has been a
            guardian of livestock and property for centuries. Originating from
            Central Asia, these dogs are renowned for their courage, strength,
            and loyalty.
          </p>
        </div>
        <div className="w-full h-full relative flex items-end justify-center min-[920px]:mt-20">
          <div
            className="w-full h-full relative flex items-end justify-center"
            id="dog1"
          >
            <img src={dog1} className="h-full relative z-[1] absolute" />
          </div>
        </div>
        <div className="w-[120%] aspect-square bg-white absolute origin-top-right top-full right-0 rotate-[8deg] z-[0]"></div>
      </div>
    </>
  );
}
export default Top;
