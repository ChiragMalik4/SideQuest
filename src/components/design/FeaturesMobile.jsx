import City from "../../assets/Features/City.jpeg";
import Connect from "../../assets/Features/Connect.jpeg";
import Gps from "../../assets/Features/Gps.jpeg";
import Map from "../../assets/Features/Map.jpeg";
import hero4 from "../../assets/Features/hero4.jpg";
import Weather from "../../assets/Features/Weather.jpeg";
import Advertisements from "../../assets/Features/Advertisements.jpeg";

const FeaturesMobile = () => {
  return (
    <div className="lg:hidden h-full w-full p-12">
      <div className="relative h-full w-full rounded-xl overflow-hidden border-gray-500 border-2 flex items-center justify-center mb-8">
        <img src={hero4} alt="Rename" className="opacity-70 blur-[2px]" />
        <span className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-center text-lg font-bold">
            Community Driven Area Renaming
          </h2>
        </span>
      </div>
      <div className="relative h-full w-full rounded-xl overflow-hidden border-gray-500 border-2 flex items-center justify-center mb-8">
        <img src={Map} alt="Map" className="opacity-70 blur-[2px]" />
        <span className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-center text-xl font-bold">
            Dynamic Map Interface
          </h2>
        </span>
      </div>
      <div className="flex">
        <div className="relative h-full w-full rounded-xl overflow-hidden border-gray-500 border-2 flex items-center justify-center mb-8 mr-4">
          <img src={Gps} alt="Gps" className="opacity-70 blur-[2px]" />
          <span className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-center text-xl font-bold">
              Landmarks
            </h2>
          </span>
        </div>
        <div className="relative h-full w-full rounded-xl overflow-hidden border-gray-500 border-2 flex items-center justify-center mb-8">
          <img src={Connect} alt="Connect" className="opacity-70 blur-[2px]" />
          <span className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-center text-xl font-bold">
              Volunteer
            </h2>
          </span>
        </div>
      </div>
      <div className="relative h-full w-full rounded-xl overflow-hidden border-gray-500 border-2 flex items-center justify-center mb-8">
        <img
          src={Advertisements}
          alt="Advertisements"
          className="opacity-70 blur-[2px]"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-center text-xl font-bold">
            Broadening Local Businesses
          </h2>
        </span>
      </div>

      <div className="relative h-full w-full rounded-xl overflow-hidden border-gray-500 border-2 flex items-center justify-center mb-8">
        <img src={City} alt="City" className="opacity-70 blur-[2px]" />
        <span className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-center text-xl font-bold">
            Landmark Filter
          </h2>
        </span>
      </div>
      <div className="relative h-full w-full rounded-xl overflow-hidden border-gray-500 border-2 flex items-center justify-center mb-8">
        <img src={Weather} alt="Weather" className="opacity-70 blur-[2px]" />
        <span className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-center text-xl font-bold">
            Weather Updates
          </h2>
        </span>
      </div>
    </div>
  );
};

export default FeaturesMobile;
