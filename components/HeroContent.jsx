import Image from "next/image";

const HeroContent = ({ title }) => {
  return (
    <>
      <div id="hero-content-conatiner">
        <div className="w-48 lg:w-60 absolute top-[0px] left-[0px]">
          <Image
            src="https://allhealthchoice.com/wp-content/uploads/2021/06/newlogo.png"
            alt="all-health choice logo in color"
            width={500}
            height={175}
          />
        </div>

        <div
          id="hamburger"
          className="p-1 w-[45px] h-[45px] bg-white shadow-lg cursor-pointer absolute top-[0px] right-[0px]"
        >
          <Image
            src="/menu-icon-square.svg"
            alt="hamburger menu icon"
            width={238}
            height={127.8}
          />
        </div>

        <div className="w-[70%] lg:w-[45%] pb-12 md:pb-20 lg:pb-32 pt-24 lg:pt-40 mx-auto text-left text-white relative">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
