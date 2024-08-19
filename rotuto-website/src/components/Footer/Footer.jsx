import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [appname, setappname] = useState("Rotuto");
  const [logo, setLogo] = useState(null);
  const [copyrightMessage, setCopyRightMessage] = useState(
    " © 2023 - 2024 Neonflake Enterprises OPC Pvt Ltd. All Rights Reserved."
  );

  useEffect(() => {
    // Fetch the footer data from the API
    axios
      .get("/api/v1/users/settings")
      .then((response) => {
        setFooterData(response.data?.settings.socialMedia);
        setappname(response.data?.settings.appName);
        setCopyRightMessage(response.data?.settings.copyrightMessage);
        setLogo(response.data?.settings.logo.footerLogo);
      })
      .catch((error) => {
        console.error("There was an error fetching the footer data!", error);
      });
  }, []);

  return (
    <footer className="py-10 border-t shadow-lg">
      <div className="flex flex-col lg:flex-row lg:mx-28 mx-10">
        {/* Company Information */}
        <div className="flex flex-col items-start mb-8 sm:mx-16 lg:w-1/3">
          <div className="flex flex-row items-center">
            {logo ? (
              <img
                src={logo}
                alt="logo"
                className="w-40 h-auto"
              />
            ) : (
              <p className="text-2xl font-bold text-black">{appname}</p>
            )}
          </div>
          <div className="text-sm mb-1 text-black lg:w-full md:w-2/3">
            AI empowers you to select specific keywords that matter to you.
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-sm:-ml-9 md:px-14 gap-4 lg:gap-12 justify-center">
          {/* Links */}
          <div className="flex flex-col mx-10 sm:mx-0">
            <div className="text-xl font-bold mb-2.5 text-black">Links</div>
            <NavLink
              to="/"
              className="text-base text-black mb-1 hover:underline"
            >
              Home
            </NavLink>
            <NavLink
              to="/agent"
              className="text-base text-black mb-1 hover:underline"
            >
              Ai Agents
            </NavLink>
            {/* <NavLink
              to="/about-us"
              className="text-base text-black mb-1 hover:underline"
            >
              About
            </NavLink> */}
            <NavLink
              to="/pricing"
              className="text-base text-black mb-1 hover:underline"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/blogs"
              className="text-base text-black mb-1 hover:underline"
            >
              Blog
            </NavLink>
          </div>

          {/* Social Media */}
          <div className="flex flex-col mx-10 sm:mx-0">
            <div className="text-xl font-bold mb-2.5 text-black">
              Social Media
            </div>
            {footerData ? (
              <>
                <a
                  href={footerData.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-black mb-1 hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href={footerData.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-black mb-1 hover:underline"
                >
                  Facebook
                </a>
                <a
                  href={footerData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-black mb-1 hover:underline"
                >
                  Instagram
                </a>
                <a
                  href={footerData.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-black mb-1 hover:underline"
                >
                  Twitter
                </a>
                <a
                  href={footerData.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-black mb-1 hover:underline"
                >
                  YouTube
                </a>
              </>
            ) : (
              <p className="text-base text-gray-500 mb-1">
                Social media links not available
              </p>
            )}
          </div>

          {/* Legal */}
          <div className="flex flex-col mx-10 sm:mx-0">
            <div className="text-xl font-bold text-black mb-2.5">Legal</div>
            <NavLink
              to="/privacy-policy"
              className="text-base text-black mb-1 hover:underline"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms-conditions"
              className="text-base text-black mb-1 hover:underline"
            >
              Terms and Conditions
            </NavLink>
            <NavLink
              to="/support"
              className="text-base text-black mb-1 hover:underline"
            >
              Support
            </NavLink>
            <NavLink
              to="/contact-us"
              className="text-base text-black mb-1 hover:underline"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
      <hr className="bg-gray-900 w-2/3 mx-auto my-5 opacity-70" />
      <div className="text-black text-center max-sm:text-xs text-sm mb-4 max-sm:mx-6">
        <p>{copyrightMessage}</p>
      </div>
    </footer>
  );
};

export default Footer;
