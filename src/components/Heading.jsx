const Heading = ({ className, title, boundary, id }) => {
  return (
    <div
      id={id}
      className={`${className} max-w-{50rem} mx-auto mb-12 lg:mb-20`}
    >
      {title && (
        <div
          className={` ${
            boundary &&
            "bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-400 p-1 rounded-md"
          }`}
        >
          {boundary ? (
            <div className="flex h-full w-full bg-black p-2 rounded-md">
              <h2 className="h3 font-bold uppercase">{title}</h2>
            </div>
          ) : (
            <h2 className="h1 font-bold uppercase">{title}</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default Heading;
