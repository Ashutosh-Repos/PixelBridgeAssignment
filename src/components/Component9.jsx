import dog5 from "../assets/images/dog5.png";
import tele from "../assets/images/tele.png";
import thread from "../assets/images/thread.png";
import link from "../assets/images/links.png";
function Component9() {
  return (
    <div className="w-full min-h-[50rem] max-sm:min-h-[25rem] max-[950px]:min-h-[40rem]  relative  flex flex-col items-start justify-start">
      <h1 className="text-7xl px-8 max-sm:px-2 py-4 text-[#FFA800] font-['cheeseburga'] max-sm:text-6xl max-[440px]:text-5xl">
        SOCIAL MEDIA
      </h1>
      <h1 className="text-7xl px-8 max-sm:px-2 py-4 text-[#FFA800] font-['cheeseburga'] max-sm:text-6xl max-[440px]:text-5xl">
        LINKS
      </h1>
      <div className="w-full h-full relative flex items-end justify-center mt-0 relative">
        <div className="w-full h-auto aspect-square px-4 py-4 flex items-center justify-center relative">
          <div className="absolute">
            <div className="flex items-center text-xl max-md:text-lg max-sm:text-[8px] font-bold font-['Montserrat'] text-white gap-2 mt-2">
              <img
                src={thread}
                alt=""
                className="w-16 max-md:w-10 max-sm:w-6"
              />
              <p>Twitter Link</p>
            </div>
            <div className="flex items-center text-xl max-md:text-lg max-sm:text-[8px] font-bold font-['Montserrat'] text-white gap-2 mt-2">
              <img src={tele} alt="" className="w-16 max-md:w-10 max-sm:w-6" />
              <p>Telegram Link</p>
            </div>
          </div>
          <img src={link} alt="" className="w-full max-w-[35rem]" />
        </div>
        <div className="w-full h-auto aspect-square flex items-end justify-center relative">
          <div
            id="dog5"
            className="w-full relative h-full relative flex flex-col items-end justify-center    "
          >
            <img src={dog5} alt="" className="w-full max-w-[35rem] z-[1]" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Component9;
