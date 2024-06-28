import Heading from "./Heading";
import Section from "./Section";
import City from "../assets/Features/City.jpeg";
import Connect from "../assets/Features/Connect.jpeg";
import Gps from "../assets/Features/Gps.jpeg";
import Map from "../assets/Features/Map.jpeg";
import hero4 from "../assets/Features/hero4.jpg";
import Weather from "../assets/Features/Weather.jpeg";
import Advertisements from "../assets/Features/Advertisements.jpeg";
import "./CSS/Features.css";
import FeaturesMobile from "./design/FeaturesMobile";
import Text1 from "./Text1";

const Features = () => {
  return (
    <Section
      sectionlines
      className="py-10 lg:py-16 xl:pb-20 xl:pt-[8rem]"
      customPaddings
    >
      <Text1 text="Your personal guiding app" />
      <div id="features">
        <div className="hidden lg:flex lg:h-screen lg:w-full lg:items-center lg:justify-center lg:px-[8rem] lg:pb-[8rem] xl:px-[13rem] xl:pb-[13rem] xl:pt-[4rem]">
          <div className=" lg:grid h-full w-full lg:grid-cols-10 lg:grid-rows-4 lg:gap-4">
            <div className="card z-2 relative col-span-4 row-span-3 rounded-xl overflow-hidden border-indigo-500 border-2 flex items-center">
              <img src={hero4} alt="Rename" className="opacity-70 blur-[2px]" />
              <span className="absolute inset-0 flex items-center justify-center first-content">
                <h2 className="text-white lg:text-lg xl:text-2xl font-bold">
                  Community Driven Area Renaming
                </h2>
              </span>
              <span className="second-content inset-0 absolute flex items-center justify-center">
                <h2 className="text-white lg:text-lg xl:text-2xl font-bold">
                  Description
                </h2>
              </span>
            </div>
            <div className="card relative z-2 col-span-4 row-span-1 rounded-xl overflow-hidden border-indigo-500 border-2 flex items-center">
              <img src={Map} alt="Map" className="opacity-75" />
              <div className="first-content absolute inset-0 flex items-center justify-center">
                <h2 className="text-white lg:text-lg xl:text-2xl font-bold">
                  Dynamic Map Interface
                </h2>
              </div>
              <div className="second-content absolute inset-0 flex items-center justify-center">
                <h2 className="text-white lg:text-lg xl:text-2xl font-bold">
                  Dynamic Map Interface
                </h2>
              </div>
            </div>

            <div className="card z-2 relative col-span-2 row-span-1 rounded-xl overflow-hidden border-indigo-500 border-2 flex items-center">
              <img src={Gps} alt="Gps" className="opacity-70 blur-[2px]" />
              <div className="first-content absolute inset-0 flex items-center justify-center">
                <h2 className="text-white lg:text-sm xl:text-xl font-bold">
                  Hidden Landmarks
                </h2>
              </div>
              <div className="second-content absolute inset-0 flex items-center justify-center">
                <h2 className="text-white lg:text-sm xl:text-xl font-bold">
                  Hidden Landmarks
                </h2>
              </div>
            </div>
            <div className="card z-2 relative col-span-3 row-span-2 rounded-xl overflow-hidden border-indigo-500 border-2 flex items-center">
              <img
                src={Connect}
                alt="Connect"
                className="opacity-70 blur-[2px]"
              />
              <div className="first-content absolute inset-0 flex items-center justify-center">
                <h2 className="text-white lg:text-lg xl:text-2xl font-bold">
                  Volunteer
                </h2>
              </div>
              <div className="second-content absolute inset-0 flex items-center justify-center">
                <h2 className="text-white lg:text-lg xl:text-2xl font-bold">
                  Volunteer
                </h2>
              </div>
            </div>
            <div className="card z-2 relative col-span-3 row-span-2 rounded-xl overflow-hidden border-indigo-500 border-2 flex items-center">
              <img
                src={Advertisements}
                alt="Advertisements"
                className="blur-[2px]"
              />
              <div className="first-content absolute inset-0 flex items-center justify-center">
                <h2 className="text-white lg:text-sm xl:text-2xl font-bold">
                  Broadening Local Businesses
                </h2>
              </div>
              <div className="second-content absolute inset-0 flex items-center justify-center">
                <h2 className="text-white lg:text-sm xl:text-2xl font-bold">
                  Broadening Local Businesses
                </h2>
              </div>
            </div>
            <div className="card z-2 relative col-span-4 row-span-1 overflow-hidden rounded-xl border-indigo-500 border-2 flex items-center">
              <img src={City} alt="City" className="blur-[2px]" />
              <div className="first-content absolute inset-0 flex items-center justify-center">
                <h2 className="text-white lg:text-lg xl:text-2xl font-bold">
                  6
                </h2>
              </div>
              <div className="second-content absolute inset-0 flex items-center justify-center">
                <h2 className="text-white lg:text-sm xl:text-2xl font-bold">
                  6
                </h2>
              </div>
            </div>
            <div className="card z-2 relative col-span-6 row-span-1 overflow-hidden rounded-xl border-indigo-500 border-2 flex items-center">
              <img src={Weather} alt="Weather" className="blur-[2px]" />
              <div className="first-content absolute inset-0 flex items-center justify-center">
                <h2 className="text-white lg:text-lg xl:text-2xl font-bold">
                  Weather Updates
                </h2>
              </div>
              <div className="second-content absolute inset-0 flex items-center justify-center">
                <h2 className="text-white lg:text-lg xl:text-2xl font-bold">
                  Weather Updates
                </h2>
              </div>
            </div>
          </div>
        </div>

        <FeaturesMobile />
      </div>

      <Text1 text="Making the city smart" />
    </Section>
  );
};

export default Features;
