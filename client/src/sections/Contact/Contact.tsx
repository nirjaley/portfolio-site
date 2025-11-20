import { useState } from "react";
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  theme: 'light' | 'dark';
}

const Contact: React.FC<ContactProps> = ({ theme = 'light' }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" className={`py-24 transition-colors duration-300 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-gray-900/50'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            theme === 'light' 
              ? 'bg-blue-100 text-blue-600' 
              : 'bg-blue-900/30 text-blue-400'
          }`}>
            Get In Touch
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Contact Me
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            theme === 'light' ? 'bg-gray-900' : 'bg-white'
          }`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Let's talk about your project
              </h3>
              <p className={`leading-relaxed ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Have a project in mind or want to discuss potential opportunities? 
                Feel free to reach out through the contact form or directly via email or phone.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${
                  theme === 'light' ? 'bg-blue-100 text-blue-600' : 'bg-blue-900/30 text-blue-400'
                }`}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`font-medium ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}>Email</h4>
                  <a 
                    href="mailto:your.email@example.com" 
                    className={`hover:underline ${
                      theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                    }`}
                  >
                    nirjalbyanjankar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${
                  theme === 'light' ? 'bg-blue-100 text-blue-600' : 'bg-blue-900/30 text-blue-400'
                }`}>
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`font-medium ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}>Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className={`hover:underline ${
                      theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                    }`}
                  >
                    +977 9849362904
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${
                  theme === 'light' ? 'bg-blue-100 text-blue-600' : 'bg-blue-900/30 text-blue-400'
                }`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`font-medium ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}>Location</h4>
                  <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl ${
            theme === 'light' 
              ? 'bg-white shadow-lg' 
              : 'bg-gray-800 shadow-xl'
          }`}>
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              Send me a message
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label htmlFor="name" className={`block text-sm font-medium ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 ${
                    theme === 'light'
                      ? 'bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:bg-white border border-gray-300'
                      : 'bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:bg-gray-800 border border-gray-600 text-white'
                  }`}
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className={`block text-sm font-medium ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 ${
                    theme === 'light'
                      ? 'bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:bg-white border border-gray-300'
                      : 'bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:bg-gray-800 border border-gray-600 text-white'
                  }`}
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className={`block text-sm font-medium ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message here..."
                  className={`w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 ${
                    theme === 'light'
                      ? 'bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:bg-white border border-gray-300'
                      : 'bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:bg-gray-800 border border-gray-600 text-white'
                  }`}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button 
                type="submit"
                className={`w-full py-4 px-6 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                  theme === 'light'
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                Send Message
                <span className="ml-2">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
