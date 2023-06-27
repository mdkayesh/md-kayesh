"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "./styles";
import { fadeIn, zoomIn } from "@/utils/Animation";

const ContactForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_frb17pb",
        "template_zr6yhws",
        {
          from_name: formData.name,
          to_name: "Md Kayesh",
          subject: formData.subject,
          message: formData.message,
        },
        "VgAu1zKUE9WxiI_U1"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setPopUp(true);

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        () => {
          alert("something went wrong");
          setLoading(false);
          setSuccess(false);
          setPopUp(true);
        }
      );
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit} ref={formRef}>
        <div className="flex flex-col gap-x-4 gap-y-0 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <label htmlFor="name" className={`${styles.label}`}>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              className={`${styles.input}`}
              onChange={handleChange}
              required
              placeholder="Your name..."
            />
            <hr className="w-0 border-primary transition-all duration-300" />
          </div>
          <div className="w-full lg:w-1/2">
            <label htmlFor="email" className={`${styles.label}`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              className={styles.input}
              onChange={handleChange}
              required
              placeholder="Your email..."
            />
            <hr className="w-0 border-primary transition-all duration-300" />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="subject" className={`${styles.label}`}>
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            className={styles.input}
            onChange={handleChange}
            required
            placeholder="Subject..."
          />
          <hr className="w-0 border-primary transition-all duration-300" />
        </div>

        <div className="w-full">
          <label htmlFor="message" className={`${styles.label}`}>
            Message
          </label>
          <textarea
            rows={"5"}
            name="message"
            id="message"
            value={formData.message}
            className={`${styles.input} border focus-within:border-primary`}
            onChange={handleChange}
            required
            placeholder="Message..."
          />
        </div>
        <div className="mt-4 flex justify-end">
          <motion.button
            type="submit"
            className={`${styles.button} hover:text-primary hover:scale-110`}
            whileTap={{ scale: 0.9 }}
          >
            {loading ? "Sending" : "Send"}
          </motion.button>
        </div>
      </form>

      {/* popup */}
      <div
        className={`popUp ${
          popUp ? "visible opacity-100" : "invisible opacity-0"
        } flex justify-start items-end fixed top-0 left-0 w-full h-full z-10`}
      >
        <div
          className={`${
            popUp ? "visible opacity-100" : "invisible opacity-0"
          } w-full h-full fixed bg-[#00000075] top-0 left-0 z-10 transition-opacity duration-500`}
        ></div>
        <AnimatePresence mode="wait">
          {popUp && (
            <motion.div
              drag
              dragConstraints={{
                top: -125,
                right: 125,
                bottom: 125,
                left: -125,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ cursor: "grab" }}
              className="relative z-20"
            >
              <div className="animate-rotating">
                <div className="popUp-bubble text-center animate-flying w-[220px] h-[220px] bg-gradient-to-tr from-secondary to-transparent bg-transparent rounded-full text-white flex justify-center items-center flex-col p-4 relative shadow-inner">
                  {success ? (
                    <p>
                      Thank you, I will get back to you as soon as possible.
                    </p>
                  ) : (
                    <p>Something went wrong.</p>
                  )}

                  <button
                    type="button"
                    onClick={() => setPopUp(false)}
                    className={`${styles.button} absolute bottom-3 left-1/2 -translate-x-1/2`}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ContactForm;
