import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  const toggleClass = theme ? "bg-gray-900 text-white" : "bg-white text-black";
  return (
    <footer className={`${toggleClass} py-4 text-center`}>
      <div className="font-bold ">
        Made with{" "}
        <span role="img" aria-label="heart" className="text-red-600">
          ❤️
        </span>{" "}
        by Nitya Somani
        <a
          href="https://www.linkedin.com/in/nitya-somani"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-blue-700 m-4"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
