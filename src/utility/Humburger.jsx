// eslint-disable-next-line react/prop-types
const Humburger = ({ show, onclick }) => {
  return (
    <div
      className={`humberger flex flex-col items-end justify-between gap-1 h-4 w-6 lg:hidden cursor-pointer relative`}
      onClick={onclick}
    >
      <div
        className={`w-full h-[2px] bg-primary rounded origin-center transition-all ${
          show ? "-rotate-45 absolute top-1/2 -translate-y-1/2 left-0" : ""
        }`}
      ></div>
      <div
        className={`w-full h-[2px] bg-primary rounded ${
          show ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div
        className={`h-[2px] bg-primary rounded origin-center transition-all ${
          show
            ? "w-full rotate-45 absolute top-1/2 -translate-y-1/2 right-0"
            : "w-3/4"
        }`}
      ></div>
    </div>
  );
};

export default Humburger;
