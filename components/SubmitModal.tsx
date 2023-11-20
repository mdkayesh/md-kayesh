import Button from "@/utils/Button";
import gsap from "gsap";
import { SetStateAction, Dispatch, useEffect, useRef } from "react";

type submitModalProps = {
  isOpen: boolean;
  success: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const SubmitModal = ({ isOpen, setIsOpen, success }: submitModalProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        const tl = gsap.timeline();

        tl.to(ref.current, {
          opacity: 1,
          visibility: "visible",
          scale: 1,
        });

        tl.from(".innerModal", {
          y: 100,
          opacity: 0,
          ease: "back",
        });

        tl.from(".innerModal h1", {
          letterSpacing: "20px",
          opacity: 0,
        });

        tl.from(".innerModal .text", {
          y: 100,
          opacity: 0,
        });

        tl.from(".innerModal .button", {
          scale: 1.5,
          opacity: 0,
        });
      } else {
        gsap.from(ref.current, {
          visibility: "visible",
          opacity: 0,
          ease: "expo.inOut",
        });
      }
    }, ref);

    return () => {
      ctx.revert();
    };
  }, [isOpen]);

  return (
    <div
      className="submitModal invisible fixed left-0 top-0 z-50 flex h-full w-full scale-0 items-center justify-center opacity-0 backdrop-blur-sm"
      ref={ref}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="innerModal flex h-1/2 w-[90%] max-w-lg flex-col items-center justify-center rounded-lg border border-gray-800 bg-bg_secondary text-center shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {success ? (
          <>
            <div className="overflow-hidden">
              <h1 className="text-5xl font-semibold text-heading_color md:text-6xl">
                Thank You
              </h1>
            </div>

            <div className="overflow-hidden">
              <p className="text mt-4 text-lg">I will get back to you soon.</p>
            </div>
          </>
        ) : (
          <h1 className="text-4xl text-text_color">Something went wrong</h1>
        )}

        <div className="button">
          <Button
            type="button"
            tag="button"
            className="mt-6"
            onClick={() => setIsOpen(false)}
          >
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;
