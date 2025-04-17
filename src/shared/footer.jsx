import { t } from "i18next";
import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import Wrapper from "../layout/wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="bg-gray-100 text-center py-8 mt-28">
        <div className="flex justify-center items-center gap-2">
          <h2 className="text-xl font-semibold mb-2">{t("switcher1")}</h2>
          <span>⟷</span>
          <h2 className="text-xl font-semibold mb-2">{t("footer1")}</h2>
        </div>
        <p className="text-gray-600 max-w-xl mx-auto px-4">{t("footer2")}</p>

        <div className="mt-4 text-gray-700">
          Developed by <span className="font-medium">Jamshidbek</span> —
          Frontend Developer
        </div>

        <div className="flex justify-center gap-4 mt-4 text-gray-600 text-xl">
          <a
            href="https://github.com/Jamshidbek9777"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/jamshidbek04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/Jamshidbek_Rasulov"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition-colors"
          >
            <FaTelegram />
          </a>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
