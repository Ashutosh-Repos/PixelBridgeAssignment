function Home() {
  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center justify-between overflow-hidden sticky top-0 left-0">
      <div className="w-full h-40 relative flex items-start justify-center mt-4">
        <h1
          className="absolute font-['cheeseburga'] w-full text-center text-transparent bg-clip-text text-8xl max-sm:text-[3.5rem] bg-gradient-to-b from-homelgreen to-homedgreen"
          style={{
            WebkitTextStroke: "2px black",
            filter: "drop-shadow(7px 7px black)",
          }}
        >
          welcome to alabay world
        </h1>
      </div>
      <div className="w-full h-28 bg-black relative flex items-center justify-center text-center text-white text-2xl max-lg:text-xl max-md:text-lg max-[480px]:text-base max-sm:h-40 max-[390px]:text-sm font-['cheeseburga'] mb-8 px-8 max-sm:py-1 py-4">
        <div className="w-11/12 h-full flex flex-row flex-wrap items-center justify-center m-0 p-0">
          <h2 className="flex">WHERE THE&nbsp;</h2>
          <h2 className="flex text-transparent bg-clip-text bg-gradient-to-b from-lyellow to-dyellow">
            LEGENDARY CENTRAL ASIAN SHEPHERD DOG&nbsp;
          </h2>
          <h2 className="flex">MEETS A NEW-AGE ADVENTURE.&nbsp;</h2>
          <h2 className="flex text-transparent bg-clip-text bg-gradient-to-b from-lyellow to-dyellow">
            JOIN US IN CELEBRATING THE&nbsp;
          </h2>
          <h2 className="flex text-transparent bg-clip-text bg-gradient-to-b from-lyellow to-dyellow">
            STRENGTH&nbsp;
          </h2>
          <h2 className="flex">,&nbsp;</h2>
          <h2 className="flex text-transparent bg-clip-text bg-gradient-to-b from-lyellow to-dyellow">
            LOYALTY&nbsp;
          </h2>
          <h2 className="flex">,&nbsp;</h2>
          <h2 className="flex">AND&nbsp;</h2>
          <h2 className="flex text-transparent bg-clip-text bg-gradient-to-b from-lyellow to-dyellow">
            HERITAGE&nbsp;
          </h2>
          <h2 className="flex">OF THE ALABAY BREED.</h2>
        </div>
      </div>
    </div>
  );
}
export default Home;
