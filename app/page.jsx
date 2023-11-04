import Image from "next/image";

export default function Home() {
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

          <div id="hero" className="hero-wrapper">
            <div id="hero-bg" className="flex justify-between">
              {/* background image slider here  */}
              <div className="w-60">
                <Image
                  src="https://allhealthchoice.com/wp-content/uploads/2021/06/newlogo.png"
                  alt="all-health choice logo in color"
                  width={500}
                  height={175}
                />
              </div>

              <div
                id="hamburger"
                className="p-1 w-[45px] h-[45px] bg-white border-solid border-[2px] border-[#1b75bc] cursor-pointer"
              >
                <Image
                  src="/menu-icon-square.svg"
                  alt="hamburger menu icon"
                  width={238}
                  height={127.8}
                />
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
      <main className="w-[min(100%-4em,75ch)] bg-white mx-auto">
        <div className="mt-20 mx-auto">
          <div className="w-full">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="an image of a doctor holding a cellphone analyzing data"
              width={1920}
              height={1280}
              className="rounded-md shadow-md"
            />
          </div>
          <p className="text-[1.2rem] py-6 text-gray-800">
            AllHealth CHOICE is a data driven population health management
            company that evokes change behaviors and improves health outcomes
            resulting in overall reduced healthcare expenses.
          </p>

          <div className="w-full mt-12">
            <Image
              src="https://allhealthchoice.com/wp-content/uploads/2023/05/membs.jpg"
              alt=" several images of the All Health Choice MyCharlie app displayed on cell phones"
              width={500}
              height={234}
            />
          </div>

          <div>
            <p className="text-[1.2rem] py-6 text-gray-800">
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
      </main>

      <section>
        <footer className="bg-[#1b75bc] mt-12 text-center text-[#e6f0f8]">
          <div className="py-12">
            <div>
              <Image
                src="https://allhealthchoice.com/wp-content/uploads/2021/06/AllHealth.wewhiteb-small.png"
                alt="all-health choice logo in white"
                width={300}
                height={75}
                className="block mx-auto mr-8"
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

            <div className="mt-10 text-lg flex flex-col leading-loose">
              <a href="https://allhealthchoice.com/privacy-statement/">
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
