import dog2 from "../assets/images/dog2.png";
function Component2() {
  return (
    <div
      className="relative w-full min-h-[60rem] max-lg:min-h-[55rem] max-[900px]:min-h-[50rem] max-md:min-h-[40rem] max-sm:min-h-[35rem] max-[280px]:min-h-[34rem]  relative flex items-center justify-center flex-col px-2 py-8 overflow-hidden"
      style={{
        background:
          "-webkit-radial-gradient(bottom,#FFF280,#FFC700,#FFC700,#FFC700)",
      }}
    >
      <div className="w-[120%] aspect-square bg-white absolute origin-top-right bottom-[40rem] max-md:bottom-[30rem] max-sm:bottom-[20rem] right-0 rotate-[-8deg] z-[0]"></div>
      <h1 className="text-9xl text-dyellow font-['cheeseburga'] top-0 relative z-[1] max-sm:mt-4 mt-20 mb-14 max-lg:text-7xl max-md:text-6xl max-sm:text-5xl text-center">
        Project Vision
      </h1>
      <div className="w-full relative h-full relative flex flex-col items-center justify-center z-[1]">
        <div
          className="w-full relative h-full relative flex flex-col items-center justify-center z-[1]"
          id="dog2"
        >
          <img src={dog2} className="h-full absolute top-0 z-[1]" />
        </div>
      </div>
      <p className="w-full h-20 my-10 z-[1] font-['Kumbh Sans'] font-bold text-center text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm px-32 max-md:px-20  max-sm:px-2">
        Our mission is to honor the heritage of the Alabay by creating a
        vibrant, loyal, and powerful community. Just as the Alabay protects its
        flock, we aim to build a pack that stands strong together.
      </p>
    </div>
  );
}
export default Component2;
