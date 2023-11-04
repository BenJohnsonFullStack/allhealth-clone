import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section>
        <nav>
          <div id="info">MORE INFO</div>
          <div id="login">PARTICIPANT LOGIN</div>
          <div id="hero" className="hero-wrapper">
            <Image
              src="https://allhealthchoice.com/wp-content/uploads/2021/06/newlogo.png"
              alt="all-health choice logo"
              className="w-1/2"
            />
          </div>
        </nav>
      </section>

      {/* home page main content */}
      <main className="w-[min(100%-2em,15em)] bg-white mx-auto">
        <div className="bg-blue-700 w-full h-8 mx-auto"></div>
      </main>
    </>
  );
}
