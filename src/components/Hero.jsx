import Section from "./Section";
import curve from "../assets/hero/curve.png";
import hero1 from "../assets/hero/hero1.jpg";
import heroBackground from "../assets/hero/hero-background.jpg";
import Button2 from "./Buttons/Button2";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      sectionlines
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div
          className="relative z-1 max-w-[62rem]
        mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]"
        >
          <h1 className="h1 mb-6">
            Explore Your Locality with
            <span className="inline-block relative">
              SideQuest
              <img
                src={curve}
                alt="curve"
                className="absolute top-full
              left-0 w-full xl:-mt-2"
              />
            </span>
          </h1>
          <p
            className="body-1 max-w-3xl mx-auto mb-6
          text-n-2 lg:mb-8"
          >
            Uncover the hidden gems and popular spots of any locality. With an
            intuitive map interface, effortlessly explore and experience the
            best your area has to offer.
          </p>
          <Button2>Get Started</Button2>
        </div>
        <div
          className="relative max-w-[23rem] mx-auto
        md:max-w-5xl mb-12 lg:mb-24 xl:mb-24"
        >
          <div className="relative z-1">
            <ScrollParallax>
              <div
                className="relative z-1 p-0.5 rounded-2xl
          bg-conic-gradient"
              >
                <div className="relative bg-n-8 rounded-[1rem]">
                  <div
                    className="rounded-b-[0.9rem] rounded-t-[0.9rem]
              overflow-hidden"
                  >
                    <img
                      src={hero1}
                      className="w-full"
                      width={1024}
                      height={490}
                      alt="HeroImg"
                    />
                  </div>
                </div>
              </div>
            </ScrollParallax>
          </div>

          <div className="absolute -top-[200%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[100%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>
        <ScrollParallax>
          <div className="relative z-10 mb-8 text-sm lg:text-lg lg:mb-24 text-center font-bold">
            <h5>Helping people explore their locality</h5>
          </div>
        </ScrollParallax>
      </div>
    </Section>
  );
};

export default Hero;
