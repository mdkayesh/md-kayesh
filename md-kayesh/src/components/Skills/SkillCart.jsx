// eslint-disable-next-line react/prop-types
const SkillCart = ({ lavel, experience }) => {
  return (
    <div className="skill-cart absolute z-10 p-3 -left-[30%] -top-[100%] bg-secondary w-32 opacity-0 invisible transition-opacity duration-500 text-[9px] rounded-br-3xl shadow-sm shadow-primary md:-left-[150%]">
      <h6 className="text-left">lavel</h6>
      <div className="flex gap-1 items-center">
        <div className="lavel w-full h-1 bg-gray-500 overflow-hidden rounded-full">
          <div
            className="bg-primary h-full"
            style={{ width: `${lavel}` }}
          ></div>
        </div>
        <span>10</span>
      </div>

      <h6 className="text-left">Experience</h6>
      <div className="flex gap-1 items-center">
        <div className="lavel w-full h-1 bg-gray-500 overflow-hidden rounded-full">
          <div
            className="bg-tertiary h-full"
            style={{ width: `${experience}` }}
          ></div>
        </div>
        <span>10</span>
      </div>
    </div>
  );
};

export default SkillCart;
