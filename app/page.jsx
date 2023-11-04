"use client";

import Image from "next/image";
import { heroImageSlider } from "@/constants";
import { useState } from "react";
import { HeroContent } from "@/components";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      {/* MOBILE HEADER */}
      <section>
        <header>
          <nav>
            <div className="flex items-center cursor-pointer">
              <div
                id="info"
                className="w-1/2 py-3 text-center bg-[#1b75bc] text-[#e6f0f8]"
              >
                MORE INFO
              </div>
              <div
                id="login"
                className="w-1/2 py-3 text-center bg-[#808285] text-[#e6f0f8] cursor-pointer"
              >
                MEMBER LOGIN
              </div>
            </div>
          </nav>

          <div id="hero-slides-container" className="hero-wrapper relative">
            <div
              id="hero-slide-1"
              className={
                currentSlide === 0 ? "bg-cover bg-center bg-slide-1" : "hidden"
              }
            >
              {/* blue bg overlay */}
              <div className="absolute inset-0 bg-opacity-70 bg-blue-600"></div>
              <HeroContent title={heroImageSlider[currentSlide].title} />
            </div>
            <div
              id="hero-slide-2"
              className={
                currentSlide === 1 ? "bg-cover bg-center bg-slide-2" : "hidden"
              }
            >
              {/* blue bg overlay */}
              <div className="absolute inset-0 bg-opacity-70 bg-blue-600"></div>
              <HeroContent title={heroImageSlider[currentSlide].title} />
            </div>
            <div
              id="hero-slide-3"
              className={
                currentSlide === 2 ? "bg-cover bg-center bg-slide-3" : "hidden"
              }
            >
              {/* blue bg overlay */}
              <div className="absolute inset-0 bg-opacity-70 bg-blue-600"></div>
              <HeroContent title={heroImageSlider[currentSlide].title} />
            </div>
            <div
              id="hero-slide-4"
              className={
                currentSlide === 3 ? "bg-cover bg-center bg-slide-4" : "hidden"
              }
            >
              {/* blue bg overlay */}
              <div className="absolute inset-0 bg-opacity-70 bg-blue-600"></div>
              <HeroContent title={heroImageSlider[currentSlide].title} />
            </div>
            <div
              id="hero-slide-5"
              className={
                currentSlide === 4 ? "bg-cover bg-center bg-slide-5" : "hidden"
              }
            >
              {/* blue bg overlay */}
              <div className="absolute inset-0 bg-opacity-70 bg-blue-600"></div>
              <HeroContent title={heroImageSlider[currentSlide].title} />
            </div>
            <div
              id="hero-slide-6"
              className={
                currentSlide === 5 ? "bg-cover bg-center bg-slide-6" : "hidden"
              }
            >
              {/* blue bg overlay */}
              <div className="absolute inset-0 bg-opacity-70 bg-blue-600"></div>
              <HeroContent title={heroImageSlider[currentSlide].title} />
            </div>
          </div>

          <div
            id="hero-schedule"
            className="text-center text-white bg-[#1b75bc] py-2"
          >
            <p>Schedule a demo to learn more</p>
            <a href="tel:8557130255">
              <p>
                <strong>855-713-0255</strong>
              </p>
            </a>
          </div>
        </header>
      </section>

      {/* DESKTOP HEADER */}
      {/* <section>
      <header>
        <nav>
          <div className="flex items-center">
            <div
              id="info"
              className="w-1/2 py-3 text-center bg-[#1b75bc] text-[#e6f0f8]"
            >
              MORE INFO
            </div>
            <div
              id="login"
              className="w-1/2 py-3 text-center bg-[#808285] text-[#e6f0f8]"
            >
              PARTICIPANT LOGIN
            </div>
          </div>

          <div id="hero" className="hero-wrapper">
            <div id="hero-bg"> */}
      {/* background image slider here  */}
      {/* <Image
                src="https://allhealthchoice.com/wp-content/uploads/2021/06/newlogo.png"
                alt="all-health choice logo"
                width={240}
                height={75.6}
              />
              <div id="mobile-menu"></div>
            </div>
          </div>
        </nav>
        </header>
      </section> */}

      {/* home page main content */}
      <main className="w-[min(100%-4em,850%)] bg-white mx-auto">
        <div className="mt-20">
          <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-10">
            <div className="w-full sm:w-1/2 mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="an image of a doctor holding a cellphone analyzing data"
                width={1920}
                height={1280}
                className="rounded-md shadow-md block mx-auto"
              />
            </div>
            <p className="text-[1.2rem] lg:text-[1.8rem] py-4 my-12 text-gray-800 lg:max-w-[40%]">
              AllHealth CHOICE is a data driven population health management
              company that evokes change behaviors and improves health outcomes
              resulting in overall reduced healthcare expenses.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center lg:flex-row-reverse lg:gap-16">
            <div>
              <Image
                src="https://allhealthchoice.com/wp-content/uploads/2023/05/membs.jpg"
                alt=" several images of the All Health Choice MyCharlie app displayed on cell phones"
                width={500}
                height={234}
                className="block mx-auto"
              />
            </div>

            <div className="lg:max-w-[40%] mt-12">
              <p className="text-[1.2rem] pb-6 text-gray-800">
                AllHealth CHOICE (AHC) values innovation and understands the
                benefits that a data centric approach can bring to the care
                management of total populations.{" "}
              </p>

              <ul className="list-disc px-8 text-gray-800">
                <li className="py-1">
                  Bringing a human touch to digital solutions
                </li>
                <li className="py-1">
                  The latest in healthcare claims and pharmacy analytics
                </li>
                <li className="py-1">
                  Mobile app technology and remote monitoring medical devices
                </li>
                <li className="py-1">24/7 health coach coordination</li>
              </ul>

              <p className="py-6 text-[1.2rem] text-gray-800">
                We believe in the power of our technology to improve outcomes,
                boost member productivity, and reduce overall claims spend.
              </p>
            </div>
          </div>
        </div>
      </main>

      <section>
        <footer className="bg-[#1b75bc] mt-12 text-center text-[#e6f0f8]">
          <div className="py-12 flex flex-col justify-center items-center lg:flex-row lg:justify-around">
            <div>
              <div>
                <Image
                  src="https://allhealthchoice.com/wp-content/uploads/2021/06/AllHealth.wewhiteb-small.png"
                  alt="all-health choice logo in white"
                  width={300}
                  height={75}
                  className="block mx-auto"
                />
              </div>

              <address className="not-italic mt-10 ml-3 leading-loose">
                <a href="email:info@allhealthchoice.com">
                  info@allhealthchoice.com
                </a>
                <p>
                  Office: <a href="tel:4049960086">404.996.0086</a>
                </p>
                <p>
                  Toll Free: <a href="tel:8557130255">855.713.0255</a>
                </p>
              </address>
            </div>

            <div className="mt-10 text-lg flex flex-col leading-loose">
              <a
                href="https://allhealthchoice.com/privacy-statement/"
                target="_blank"
              >
                Privacy Policy
              </a>
              <a href="#">Member Login</a>
            </div>

            <div className="mt-10">
              <Image
                src="https://allhealthchoice.com/wp-content/uploads/2021/06/hitrust-whitelogo.png"
                alt="hi trust csf certified white logo"
                width={115}
                height={58.25}
                className="block mx-auto"
              />
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
