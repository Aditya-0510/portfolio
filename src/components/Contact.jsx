import React, { useState } from "react";
import { Mail, User, MessageSquare, Send, AtSign, Loader } from "lucide-react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("https://my-portfolio-yfpq.onrender.com/contact", formData);
      console.log(response.data);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Get In Touch</h2>

        <div className="bg-gray-900 rounded-lg shadow-xl p-8 md:p-10 border border-gray-700">
          {submitted ? (
            <p className="text-center text-green-400 text-lg">✅ Thank you! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Your name"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 relative">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                  Subject
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div className="mt-6 relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-500" size={20} />
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all duration-300 transform focus:outline-none focus:ring-2 ${
                    loading
                      ? "bg-blue-500 text-white cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white"
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
