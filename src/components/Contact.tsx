const Contact = () => {
  return (
    <section className="py-20 px-6 bg-white" id="contact">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border px-4 py-2 rounded"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
