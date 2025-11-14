import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-lg mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 outline-none"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 outline-none"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 outline-none"
            value={form.message}
            onChange={handleChange}
          />

          <button className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
