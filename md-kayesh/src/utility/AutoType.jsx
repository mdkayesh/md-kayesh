import Typewriter from "typewriter-effect";

const AutoType = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Md Kayesh",
          "UX/UI Designer",
          "Front-End-Developer",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        wrapperClassName: "text-gradient",
        cursorClassName: "Typewriter__cursor text-primary",
      }}
    />
  );
};

export default AutoType;
