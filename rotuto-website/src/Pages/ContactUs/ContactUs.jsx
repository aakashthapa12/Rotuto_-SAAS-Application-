import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import swal from "sweetalert";
import axios from "axios";

const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    EmailOrMobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = () => {
    if (
      data.name.trim() === "" ||
      data.EmailOrMobile.trim() === "" ||
      data.message.trim() === ""
    ) {
      swal({
        title: "Warning",
        text: "Fill all mandatory fields",
        icon: "error",
        button: "Close",
        dangerMode: true,
      });
      return;
    }
    setLoading(true);

    axios
      .post(`/api/v1/contactrequest/new/`, data)
      .then((res) => {
        swal({
          title: "Added",
          text: "Contact Requests added successfully!",
          icon: "success",
          button: "ok",
        });
        setLoading(false);
        // Reset form fields after successful submission
        setData({
          name: "",
          EmailOrMobile: "",
          message: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        const message = err.response?.data?.message || "Something went wrong!";
        swal({
          title: "Warning",
          text: message,
          icon: "error",
          button: "Retry",
          dangerMode: true,
        });
      });
  };

  return (
    <section className="my-8 mx-8 lg:mx-32">
      <div className="bg-white rounded-3xl py-8 px-4 lg:px-12 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-center text-center mb-4">
            <div>
              <h2 className="text-3xl font-bold mb-3 max-sm:text-xl">
                Contact Us
              </h2>
              <p className="text-xl">Last Updated: April 24, 2024</p>
            </div>
          </div>
          <div className="lg:mt-16 mt-8 mb-8 flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 lg:mr-5 mb-6 lg:mb-0">
              <div className="text-lg">
                <p className="font-semibold text-xl md:text-3xl md:mb-10">
                  Get in Touch
                </p>
                <p className="mt-2">
                  We're here to help! Whether you have questions about our AI
                  Agents, need technical support, or want to explore how Rotuto
                  can benefit your business, we're just a message away.
                </p>
                <p className="mt-2">
                  Fill out the form below, and our team will get back to you as
                  soon as possible. We typically respond within one business
                  day.
                </p>
                <p className="mt-2">
                  <strong>What to expect:</strong>
                </p>
                <ul className="mt-2 list-disc list-inside md:ml-4 ml-2">
                  <li>
                    Quick response: We aim to reply to all inquiries within 24
                    hours on business days.
                  </li>
                  <li>
                    Personalized assistance: Our team will carefully review your
                    message and provide tailored support.
                  </li>
                  <li>
                    No obligation: Whether you're a current client or just
                    exploring options, we're happy to help.
                  </li>
                </ul>
                <p className="mt-2">
                  <strong>Other ways to reach us:</strong>
                </p>
                <div className="mt-4 flex md:flex-row flex-col">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2" />
                    <span className="md:mr-16">hello@rotuto.com</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-2" />
                    <span>+91 8977004787 (Mon-Fri, 9 AM - 6 PM IST)</span>
                  </div>
                </div>
                <p className="mt-4">
                  We appreciate your interest in Rotuto and look forward to
                  assisting you!
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 my-auto">
              <div className="text-lg">
                <div className="mb-4">
                  <label className="block font-semibold mb-1" htmlFor="name">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-2 border-gray-300 rounded-lg p-2"
                    value={data.name}
                    onChange={handleChange}
                    maxLength={25}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-semibold mb-1"
                    htmlFor="EmailOrMobile"
                  >
                    Email/mobile:
                  </label>
                  <input
                    type="text"
                    id="EmailOrMobile"
                    className="w-full border-2 border-gray-300 rounded-lg p-2"
                    value={data.EmailOrMobile}
                    onChange={handleChange}
                    maxLength={25}
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-semibold mb-1" htmlFor="message">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    className="w-full border-2 border-gray-300 rounded-lg p-2"
                    value={data.message}
                    onChange={handleChange}
                    maxLength={500}
                    rows="4"
                  />
                </div>
                <div className="text-xs mb-4">
                  By Clicking Submit, you agree to our{" "}
                  <a
                    className="text-blue-600 cursor-pointer"
                    href="/terms-conditions"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    className="text-blue-600 cursor-pointer"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </a>{" "}
                  .
                </div>
                <button
                  className="bg-black text-white w-full p-2 rounded-lg font-semibold"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
