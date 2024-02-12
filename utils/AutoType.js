import Typewriter from "typewriter-effect";

const AutoType = () => {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
        strings: [
          "Md Kayesh",
          "Front-End-Developer",
          "Web Designer",
          "Freelancer",
        ],
        wrapperClassName: "text-gradient",
        cursorClassName: "Typewriter__cursor text-primary",
      }}
    />
  );
};

export default AutoType;
