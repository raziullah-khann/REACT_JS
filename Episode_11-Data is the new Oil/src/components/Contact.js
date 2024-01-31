import React, { useState } from "react";
import LoaderPage from "./Loader/Loader";

const Contact = () => {
  const [loader, setLoader] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center my-6 py-10">
        <h1 className="text-5xl">Contact US Page</h1>
        {!loader && <LoaderPage />}
        <iframe
        className={"py-8 w-5/12"}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113760.10913411966!2d72.83150023433582!3d20.38048255618539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ce2c01246603%3A0xca6d49eb7baace15!2sVapi%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1705728231526!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          width="600"
          height="450"
          referrerPolicy={"no-referrer-when-downgrade"}
          onLoad={() => setLoader(true)}
          style={{ opacity: loader ? 1 : 0, border: "0" }}
        ></iframe>
        <h1>This is my current Location</h1>
      </div>
    </>
  );
};

export default Contact;
