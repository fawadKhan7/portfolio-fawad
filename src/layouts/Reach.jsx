"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "../../lib/utils";
import { Label } from "@/components/FormFields/Label";
import { InputField } from "@/components/FormFields/InputField";
import { TextArea } from "@/components/FormFields/TextArea";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { Spotlight } from "@/components/Spotlight";
import { Typewriter } from "@/components/Typewriter";

const Reach = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        "service_9goz685",
        'template_5yjgk99',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Fawad Khan',
        },
        'dTW6cbuIz7Ay8IjKW'
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[70vh] py-12 relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#3b82f6"
      />
      
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-10">
          <Typewriter
            words={[
              { text: "Get", className: "text-gray-800" },
              { text: "In", className: "text-blue-600" },
              { text: "Touch", className: "text-purple-600" },
            ]}
            className="text-center mb-6"
          />
          
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <InputField
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully! I'll get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Let's Connect</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <IconMail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <p className="text-gray-800 font-medium text-sm">fawadanwar.dev@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Me</h3>
              
              <div className="flex gap-3">
                <a
                  href="https://github.com/fawadKhan7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <IconBrandGithub className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fawad-anwar-b9a11a328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <IconBrandLinkedin className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reach;
