import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-sm p-4 text-center text-white">
      Copyright © 2024 Subashini R. All Rights reserved.
      <div className="mt-2">
        <a
          href="https://www.linkedin.com/in/subashini-r-3516282b2"
          target="_blank"
          className="text-white hover:underline mx-2"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/subashinir05"
          target="_blank" 
          className="text-white hover:underline mx-2"
        >
          GitHub
        </a>
        <a
          href="mailto:subashinir05@gmail.com"
          className="text-white hover:underline mx-2"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default Footer;
