import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({});
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-5"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a cybersecurity project in mind? Let's discuss how I can help secure your organization against today's evolving threats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg p-8 border border-gray-600">
            <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
            
            {submitStatus.success && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-md text-green-400">
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="Security Assessment">Security Assessment</option>
                  <option value="Penetration Testing">Penetration Testing</option>
                  <option value="Security Architecture">Security Architecture</option>
                  <option value="Incident Response">Incident Response</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-md font-medium flex items-center justify-center transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg p-8 border border-gray-600">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-gray-700 rounded-md text-cyan-400 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Email Address</h4>
                    <a href="mailto:prashararin@proton.me" className="text-white hover:text-cyan-400 transition-colors">
                      prashararin@proton.me
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-gray-700 rounded-md text-cyan-400 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Phone Number</h4>
                    <a href="tel:+917009224116" className="text-white hover:text-cyan-400 transition-colors">
                      +91 (700) 922 4116
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-gray-700 rounded-md text-cyan-400 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Location</h4>
                    <h4 className="text-white">
                      Una,Himachal Pradesh,India<br />
                      <p className="text-sm font-medium text-gray-400 mb-1">Available for remote work worldwide</p>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg p-8 border border-gray-600">
              <h3 className="text-xl font-bold text-white mb-4">Emergency Response</h3>
              <p className="text-gray-400 mb-6">
                Experiencing a security incident? Get priority emergency assistance with my rapid response service.
              </p>
              <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
                Learn more about emergency response <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;