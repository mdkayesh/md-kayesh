import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 py-16">
      <div className="flex items-center justify-center">
        <a
          href="https://github.com/KayesKhanAkash/md-kayesh/tree/version-3"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-primary"
        >
          Designed & Built by{" "}
          <span className="text-gradient font-semibold">Md Kayesh</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
