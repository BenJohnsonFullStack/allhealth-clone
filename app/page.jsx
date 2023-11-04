import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* MOBILE HERO SECTION */}
      <section>
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
            <div id="hero-bg" className="flex justify-between">
              {/* background image slider here  */}
              <div className="w-60">
                <Image
                  src="https://allhealthchoice.com/wp-content/uploads/2021/06/newlogo.png"
                  alt="all-health choice logo"
                  width={500}
                  height={175}
                />
              </div>

              <div
                id="hamburger"
                className="p-1 w-[45px] h-[45px] bg-white border-solid border-[2px] border-[#1b75bc]"
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
        </nav>
      </section>

      {/* DESKTOP MENU SECTION */}
      {/* <section>
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
      </section> */}

      {/* home page main content */}
      <main className="w-[min(100%-2em,15em)] bg-white mx-auto">
        <div>Main Content</div>
      </main>
    </>
  );
}
