import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Zap, ArrowRight, MessageCircle, Globe, Calendar, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    organization: '', 
    email: '', 
    phone: '', 
    message: '',
    inquiryType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', organization: '', email: '', phone: '', message: '', inquiryType: '' });
    }, 4000);
  };

  const contactInfo = [
    { icon: MapPin, title: 'Visit Us', details: ['Nairobi, Kenya'], subtext: 'East Africa\'s research hub', color: 'amber' },
    { icon: Mail, title: 'Email Us', details: ['info@vantagevoicesgroup.org'], href: 'mailto:info@vantagevoicesgroup.org', subtext: 'We reply within 24 hours', color: 'blue' },
    { icon: Phone, title: 'Call Us', details: ['+254 727 764 164', '+254 721 767 750'], href: 'tel:+254727764164', subtext: 'Mon-Fri, 8am-5pm', color: 'emerald' },
    { icon: Clock, title: 'Office Hours', details: ['Mon – Fri: 8:00 AM – 5:00 PM', 'Saturday: By appointment'], subtext: 'Closed on Sundays', color: 'purple' },
  ];

  const inquiryTypes = [
    { value: 'research', label: 'Research & Analytics', icon: Users },
    { value: 'consulting', label: 'Consulting Services', icon: MessageCircle },
    { value: 'partnership', label: 'Partnership Opportunity', icon: Globe },
    { value: 'other', label: 'General Inquiry', icon: Mail },
  ];

  const faqs = [
    { q: 'How quickly do you respond?', a: 'We typically respond to all inquiries within 24 hours on business days.' },
    { q: 'Do you work with international clients?', a: 'Yes, we work with clients globally, with a focus on African markets.' },
    { q: 'What is your typical project timeline?', a: 'Project timelines vary based on scope. We\'ll provide a detailed timeline during consultation.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to turn your data into decisions? Our team is here to help you unlock actionable insights.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
            
            {/* Contact Info Panel */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-amber-500" />
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="group bg-slate-50 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`inline-flex p-3 bg-${info.color}-100 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <info.icon className={`h-5 w-5 text-${info.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-800 mb-1">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            info.href ? (
                              <a key={idx} href={info.href} className="block text-slate-600 hover:text-amber-600 transition text-sm">
                                {detail}
                              </a>
                            ) : (
                              <p key={idx} className="text-slate-600 text-sm">{detail}</p>
                            )
                          ))}
                          <p className="text-slate-400 text-xs mt-1">{info.subtext}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Connect Panel */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Schedule a Consultation</h3>
                <p className="text-white/80 text-sm mb-4">Let's discuss how we can help with your research needs.</p>
                <button className="inline-flex items-center gap-2 bg-white text-slate-800 font-semibold px-5 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Book a meeting
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Contact Form Panel */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-3"></div>
                  <p className="text-slate-500 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="inline-flex p-4 bg-emerald-100 rounded-full mb-4 animate-in zoom-in duration-500">
                      <CheckCircle className="h-14 w-14 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500 mb-6">Thank you for reaching out. Our team will respond within 24 hours.</p>
                    <div className="inline-flex items-center gap-2 text-amber-600 text-sm">
                      <Zap className="w-4 h-4" />
                      We look forward to working with you
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                        <input
                          type="text" name="name" value={formData.name} onChange={handleChange} required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Organization</label>
                        <input
                          type="text" name="organization" value={formData.organization} onChange={handleChange}
                          placeholder="Your organization name"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                        <input
                          type="email" name="email" value={formData.email} onChange={handleChange} required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                        <input
                          type="tel" name="phone" value={formData.phone} onChange={handleChange}
                          placeholder="+254 XXX XXX XXX"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Inquiry Type *</label>
                      <select
                        name="inquiryType" value={formData.inquiryType} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all bg-white"
                      >
                        <option value="">Select an option</option>
                        {inquiryTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                      <textarea
                        name="message" value={formData.message} onChange={handleChange} required rows={5}
                        placeholder="Tell us about your project, research needs, or any questions you have..."
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 resize-none transition-all"
                      />
                    </div>

                    <button
                      type="submit" disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3.5 px-6 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2 text-base"
                    >
                      {isSubmitting ? (
                        <><span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span> Sending Message...</>
                      ) : (
                        <><Send className="h-4 w-4" /> Send Message</>
                      )}
                    </button>

                    <p className="text-center text-slate-400 text-xs mt-4">
                      By submitting this form, you agree to our privacy policy. We respect your data.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">FAQs</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-bold text-slate-800 mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-12 h-12 text-amber-400 mx-auto mb-3" />
                  <h3 className="text-xl font-bold">Our Location</h3>
                  <p className="text-slate-300 mt-2">Nairobi, Kenya</p>
                  <p className="text-slate-400 text-sm mt-1">Serving clients across Africa and globally</p>
                </div>
              </div>
              <div className="p-6 text-center border-t border-slate-100">
                <p className="text-slate-600">
                  📍 Based in Nairobi's research hub — Conveniently located for meetings and collaboration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Transform Your Data into Decisions?</h2>
            <p className="text-slate-300 mb-6">Start a conversation with our team today.</p>
            <Link 
              to="/what-we-do" 
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300"
            >
              Explore our services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;