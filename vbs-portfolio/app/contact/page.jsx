import { FaPhoneAlt, FaAddressBook, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Contact <span className="text-accent">Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4 mt-28">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl mb-6 text-center lg:text-left">
            Contact <span className="text-accent">Details</span>
          </h1>
          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="mr-2" />
              <a href="tel:+919409753894" className="text-lg">
                +91 94097 53894
              </a>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="mr-2" />
              <a href="mailto:brijuvadgama@gmail.com" className="text-lg">
                brijuvadgama@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaAddressBook className="mr-2" />
              <p className="text-lg">Rajkot, Gujarat</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl mb-6 text-center lg:text-left">
            Send a <span className="text-accent">Message</span>
          </h1>

          <div className="contact-form rounded-lg shadow-lg px-4 py-2">
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Enter Your Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Enter Your Message"
                rows="6"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 hover:transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
