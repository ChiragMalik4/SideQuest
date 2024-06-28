import Section from "./Section";
import pattern2 from "../assets/Patterns/pattern2.png";
import contacts from "../constants/Contacts.js";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src={pattern2} alt="" className="mb-8" />
      </div>
      <Section crosses className="!px-0 !py-10" id="contact">
        <div
          className="container flex sm:justify-between justify-center
        items-center gap-10 max-sm:flex-col"
        >
          <p className="caption text-n-4 lg:block">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
          <ul className="flex gap-5 lg:gap-8 flex-wrap">
            {contacts.map((item) => (
              <>
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="group relative flex items-center justify-center w-10 h-10 bg-n-8
                lg:hover:translate-y-3 lg:transition-all lg:duration-500"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`${item.id == 0 ? "bg-white rounded-full" : ""}`}
                    height={42}
                    width={42}
                  />
                  <span class="absolute z-1 opacity-0 lg:group-hover:opacity-100 lg:group-hover:text-white lg:group-hover:text-sm lg:group-hover:font-bold lg:group-hover:-translate-y-10 lg:duration-700">
                    {item.title}
                  </span>
                </a>
              </>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
};

export default Footer;
