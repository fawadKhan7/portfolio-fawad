"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "../../lib/utils";
import ScrollReveal from "@/components/ScrollReveal";
import { InputField } from "@/components/FormFields/InputField";
import { TextArea } from "@/components/FormFields/TextArea";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { Typewriter } from "@/components/Typewriter";
import Globe from "@/components/Globe";

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
    <div className="min-h-screen py-16 relative">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-6">
            Get In Touch
          </h1>
          
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Form and Connect sections */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <InputField
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <InputField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:bg-zinc-200 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center font-medium">Message sent successfully! I'll get back to you soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center font-medium">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>

            {/* Contact Info and Social */}
            <div className="grid grid-cols-1 gap-6">
              {/* Follow Me Section - Now includes all contact methods */}
              <div className="bg-zinc-900/70 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/40 shadow-2xl">
                <h3 className="text-lg font-bold text-white mb-4">Let's Connect</h3>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:fawadanwar.dev@gmail.com"
                    className="flex items-center gap-3 p-3 bg-zinc-800/60 hover:bg-zinc-700/60 rounded-lg transition-all duration-300 hover:scale-[1.02] border border-zinc-600/30 flex-1"
                  >
                    <IconMail className="h-5 w-5 text-blue-400" />
                    <span className="text-white text-sm font-medium">Mail Me</span>
                  </a>
                  <a
                    href="https://github.com/fawadKhan7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-zinc-800/60 hover:bg-zinc-700/60 rounded-lg transition-all duration-300 hover:scale-[1.02] border border-zinc-600/30 flex-1"
                  >
                    <IconBrandGithub className="h-5 w-5 text-white" />
                    <span className="text-white text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fawad-anwar-b9a11a328"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-zinc-800/60 hover:bg-zinc-700/60 rounded-lg transition-all duration-300 hover:scale-[1.02] border border-zinc-600/30 flex-1"
                  >
                    <IconBrandLinkedin className="h-5 w-5 text-blue-400" />
                    <span className="text-white text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Globe */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-lg mx-auto">
              <div className="aspect-square w-full">
                <Globe className="w-full h-full" />
              </div>
              
              {/* Globe Description */}
              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold text-white mb-3">
                  Building Worldwide Connections
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mx-auto">
                  Creating digital solutions that span continents. Every project connects 
                  innovation with opportunity, bringing ideas to life globally.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Reach;
