"use client";

import gsap from "gsap";
import { useState, FormEvent, ChangeEvent, useRef, useEffect } from "react";
import Button from "@/utils/Button";
import emailjs from "@emailjs/browser";
import SubmitModal from "../SubmitModal";
import { socialIcons } from "@/public/data/data";

const contactContent = {
  title: "Get In Touch With Me",
  text: "I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.",
};

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [popUp, setPopUp] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    const { email, message, name, subject } = formData;
    e.preventDefault();
    if (!email && !message && !name && !subject) return;
    setIsLoading(true);

    // here you can submit your data and make sure to setIsLoading to false

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: "Md Kayesh",
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
      )
      .then(
        () => {
          setIsLoading(false);
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
          setIsLoading(false);
          setSuccess(false);
        },
      );
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.form`,
          start: "top 80%",
        },
      });

      tl.from(".form", {
        opacity: 0,
        y: 100,
      });

      tl.from(["form input", "form textarea"], {
        opacity: 0,
        y: 100,
        stagger: 0.2,
      });

      tl.from(".or", {
        y: 20,
        opacity: 0,
      });

      tl.from(".social-icons", {
        y: 20,
        opacity: 0,
      });

      gsap.from(`.inner-contact span`, {
        backgroundPositionX: "200%",
        scale: 0.8,
        x: 100,
        stagger: 0.2,
        scrollTrigger: {
          trigger: `.contact_heading`,
          start: "top 80%",
        },
      });

      gsap.from(["h2", "p"], {
        opacity: 0,
        x: 100,
        stagger: 0.2,
        scrollTrigger: {
          trigger: `h2`,
          start: "top 80%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`contact overflow-hidden pt-[150px]`}
      id="contact"
      ref={ref}
    >
      <div className={`inner-contact flex flex-col gap-6 min-[900px]:flex-row`}>
        <div className="w-full flex-1">
          <h1 className={`contact_heading font-semibold`}>
            <span>Let’s Work</span> <br /> <span>Together</span>
          </h1>
          <h2 className="mt-10 text-4xl font-semibold">
            {contactContent.title}
          </h2>
          <p className="mt-6">{contactContent.text}</p>
        </div>

        {/* form */}
        <div className="rounded-lg bg-bg_secondary px-5 py-10 md:min-w-[350px] md:px-8">
          <form className="form" onSubmit={handleSubmit} ref={formRef}>
            {/* <h1 className="text-3xl font-semibold mb-6 stroke-text">Contact</h1> */}
            <input
              onChange={handleChange}
              required
              value={formData.name}
              data-cursor="-hidden invisible"
              type="text"
              name="name"
              id="name"
              className={`input`}
              placeholder="Enter your name"
            />
            <hr />
            <input
              onChange={handleChange}
              required
              value={formData.email}
              data-cursor="-hidden invisible"
              type="email"
              name="email"
              id="email"
              className={`input`}
              placeholder="Enter email address"
            />
            <hr />
            <input
              onChange={handleChange}
              required
              value={formData.subject}
              data-cursor="-hidden invisible"
              type="text"
              name="subject"
              id="subject"
              className={`input`}
              placeholder="Subject"
            />
            <hr />
            <textarea
              onChange={handleChange}
              required
              value={formData.message}
              data-cursor="-hidden invisible"
              name="message"
              id="message"
              cols={30}
              rows={7}
              className={`input`}
              placeholder="Write me a message"
            ></textarea>
            <hr />

            <Button tag="button" type="submit" className="mt-10 text-sm">
              {isLoading ? "Sending" : "Send"}
            </Button>
          </form>
          <div className="or my-4 flex w-full items-center justify-center gap-3">
            <hr className="block w-full border border-gray-600" />{" "}
            <span className="text-xl font-semibold">Or</span>
            <hr className="block w-full border border-gray-600" />
          </div>
          <ul className="social-icons flex items-center justify-center gap-4">
            {socialIcons.map((icon, index) => (
              <li key={index} className="text-xl md:text-2xl">
                <a
                  href={icon.url}
                  target="_blank"
                  className="block transition-all duration-300 hover:-translate-y-1 hover:text-primary"
                >
                  {icon.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* modal */}

      <SubmitModal isOpen={popUp} setIsOpen={setPopUp} success={success} />
    </section>
  );
};

export default Contact;
