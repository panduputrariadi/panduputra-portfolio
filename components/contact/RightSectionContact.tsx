import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const RightSectionContact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [alertVisible, setAlertVisible] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tbnduob",
        "template_dokof08",
        form.current || "",
        "bSulBcyhpQrcn4EA_"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setAlertVisible(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <motion.form
        className="ml-auo space-y-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          name="to_name"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          name="from_name"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          name="subject"
        />
        <textarea
          placeholder="Message"
          rows={6}
          className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
          name="message"
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
        />
      </motion.form>
      {alertVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-blue-700 border border-blue-700 text-white px-4 py-3 rounded relative top-4"
          role="alert"
        >
          <span className="block sm:inline">Your message has been sent!</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-white"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => setAlertVisible(false)}
            >
              <title>Close</title>
              <path
                fillRule="evenodd"
                d="M2.646 2.646a.5.5 0 0 1 .708 0L10 9.293l6.646-6.647a.5.5 0 0 1 .708.708L10.707 10l6.647 6.646a.5.5 0 0 1-.708.708L10 10.707l-6.646 6.647a.5.5 0 0 1-.708-.708L9.293 10 2.646 3.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </motion.div>
      )}
    </div>
  );
};

export default RightSectionContact;
