import Image from "next/image";

const HeroContent = () => {
  return (
    <>
      <div id="hero-content-conatiner">
        <div className="w-48 cursor-pointer transition-all duration-200 lg:w-60 absolute top-[48px] left-[0px] z-[99]">
          <Image
            src="https://allhealthchoice.com/wp-content/uploads/2021/06/newlogo.png"
            alt="all-health choice logo in color"
            width={500}
            height={175}
          />
        </div>

        <div
          id="hamburger"
          className="p-1 w-[40px] h-[40px] hover:w-[42px] hover:h-[42px] hover:shadow-lg bg-white cursor-pointer absolute top-[48px] right-[0px] z-[99] transition-all duration-200"
        >
          <Image
            src="/menu-icon-square.svg"
            alt="hamburger menu icon"
            width={238}
            height={127.8}
          />
        </div>
      </div>
    </>
  );
};

export default HeroContent;
