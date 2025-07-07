import rightArrow from "../assets/right-arrow-white.png";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-[6%] md:px-[12%] py-16 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center"
    >
      <h4 className="text-center mb-2 text-lg text-gray-500 font-ovo dark:text-white">Connect with me</h4>
      <h2 className="text-center text-4xl font-bold mb-4 font-ovo dark:text-white">Get In Touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-2 mb-12 text-gray-600 font-ovo dark:text-white">
        I'd love to hear from you! Whether it's a project, collab, or just a tech convo — drop me a message below.
      </p>

      <form className="max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 outline-none border border-gray-300 rounded-md bg-white focus:ring-2 ring-black transition duration-300"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 outline-none border border-gray-300 rounded-md bg-white focus:ring-2 ring-black transition duration-300"
            required
          />
        </div>

        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full p-4 outline-none border border-gray-300 rounded-md bg-white resize-none focus:ring-2 ring-black transition duration-300"
          required
        ></textarea>

        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="py-3 px-8 flex items-center gap-2 bg-gradient-to-r from-black to-gray-800 text-white rounded-full hover:scale-[1.02] transition duration-300"
          >
            Submit Now
            <img src={rightArrow} alt="Arrow icon" className="w-4" />
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
