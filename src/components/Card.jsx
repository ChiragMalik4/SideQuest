export const Card = ({ img, title, desc }) => {
  return (
    <div className="group relative h-[400px] w-[300px] bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-400 p-1 rounded-lg cursor-pointer">
      <div className="flex flex-col justify-center items-center h-full w-full bg-[#130333] rounded-lg overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-[50%] lg:group-hover:blur-[5px] lg:group-hover:opacity-50"
        />
        <h2 className="font-bold text-xl lg:text-[1.5rem] mb-2 lg:group-hover:blur-[5px]">
          {title}
        </h2>

        <span
          className="lg:absolute cursor-pointer lg:opacity-0 lg:group-hover:opacity-100 px-2 lg:px-4 text-sm lg:text-lg text-gray-200 font-bold text-center
        lg:translate-y-[50px] lg:group-hover:translate-y-0 duration-700"
        >
          {desc}
        </span>
      </div>
    </div>
  );
};

export const Comingsoon = ({ title }) => {
  return (
    <div className="h-[400px] w-[300px] bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-400 p-1 rounded-lg">
      <div className="flex flex-col justify-center items-center h-full w-full bg-n-8 rounded-lg overflow-hidden">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
      </div>
    </div>
  );
};
