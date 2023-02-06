import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const formcheck = (name, email, message) => {
    const test =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email && test.test(email)) {
      if (name && message) {
        return true;
      } else false;
    }
  };
  return (
    <div>
      <div className="text-3xl font-bold flex items-center justify-center">
        Contact us
      </div>
      <div>
        <div className="flex flex-col  items-center justify-center w-full  my-10 px-20 ">
          <div className="border h-12 text-lg rounded-full w-full md:w-3/5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id=""
              className="w-full rounded-full px-4 h-full outline-none "
            />
          </div>

          <div className="border h-10 my-5 w-full md:w-3/5 rounded-full">
            <input
              className="w-full rounded-full px-4 h-full outline-none "
              type="text"
              name="name"
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="w-full md:w-3/5">
            <textarea
              type="text"
              name="name"
              id=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-56 border p-5 text-lg rounded-lg outline-none"
              placeholder="Message"
            />
          </div>

          <div>
            <div className="w-32 h-12 flex items-center justify-center px-3 py-1 rounded-full bg-green-500 cursor-pointer">
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
