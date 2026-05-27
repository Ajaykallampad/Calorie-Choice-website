"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Phone, Loader2 } from "lucide-react";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const BroccoliIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 10v10" />
    <path d="M12 14a4 4 0 0 0 4-4 3 3 0 0 0-4-2 3 3 0 0 0-4 2 4 4 0 0 0 4 4z" />
    <path d="M16 10a3 3 0 0 1 3-3 3 3 0 0 0-4-2" />
    <path d="M8 10a3 3 0 0 0-3-3 3 3 0 0 1 4-2" />
  </svg>
);

export function ContactUs() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState("submitting");
    const timestamp = new Date().toISOString();

    try {
      const googleScriptUrl: string = "https://script.google.com/macros/s/AKfycbzrH4SG77GCAHyZ2BY3Gn22UL26RgAELPHyZ6Lx3qVTnr2N6obdSI0zEXr0wUtqkKiv/exec";
      if (googleScriptUrl && googleScriptUrl !== "YOUR_GOOGLE_SCRIPT_WEB_APP_URL") {
        await fetch(googleScriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ ...formData, timestamp }),
        });
      }

      const serviceId: string = "service_yz6s4c1";
      const templateId: string = "template_exrohsu";
      const publicKey: string = "kfdav5HDDBVq76RX5";

      if (serviceId && serviceId !== "YOUR_SERVICE_ID") {
        await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: formData.name,
              phone: formData.phone,
              reply_to: formData.email,
              message: formData.message,
              to_email: "caloriechoice@gmail.com",
              timestamp: timestamp,
            },
          }),
        });
      }
      
      // Simulate network request to allow user to see the loading animation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitState("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
      
      setTimeout(() => setSubmitState("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitState("idle");
    }
  };

  return (
    <section className={`relative overflow-hidden py-32 bg-[#FAFBF7] ${jakarta.className}`} id="contact-us">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <motion.div
          animate={{ x: [-20, 40, -20], y: [-20, 30, -20], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-20 w-[40rem] h-[40rem] bg-[#3D1A78] rounded-full mix-blend-multiply filter blur-[150px] opacity-20"
        />
        <motion.div
          animate={{ x: [20, -40, 20], y: [20, -50, 20], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 -right-20 w-[45rem] h-[45rem] bg-[#9DC82A] rounded-full mix-blend-multiply filter blur-[150px] opacity-20"
        />
        <motion.div
          animate={{ x: [0, 50, 0], y: [50, 0, 50], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 left-1/3 w-[35rem] h-[35rem] bg-[#7AB419] rounded-full mix-blend-multiply filter blur-[120px] opacity-15"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE — Minimal Premium Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full flex flex-col justify-center items-start lg:pr-12"
          >
            {/* Subtle Decorative Background Blob */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-96 h-96 bg-gradient-to-tr from-[#3D1A78]/5 to-[#7AB419]/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Top Badge */}
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-[#3D1A78]/10 border border-[#3D1A78]/20 backdrop-blur-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D1A78]">
                Contact Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className={`${outfit.className} text-4xl lg:text-5xl font-bold text-[#3D1A78] mb-6 leading-[1.1]`}>
              Let’s Talk Nutrition
            </h2>

            {/* Supporting Text */}
            <p className="text-[#5B2EA0]/70 text-lg leading-relaxed max-w-md mb-12">
              We’re here to help you build healthier eating habits, personalized nutrition plans, and smarter food choices.
            </p>

            {/* Contact Stack */}
            <div className="space-y-4 w-full max-w-sm">
              
              {/* Email */}
              <a href="mailto:caloriechoice@gmail.com" className="group flex items-center p-4 rounded-2xl hover:bg-white/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(61,26,120,0.04)] hover:translate-x-1 border-2 border-transparent hover:border-[#3D1A78]/30">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 text-[#5B2EA0] shadow-sm border border-white group-hover:text-[#7AB419] group-hover:shadow-md transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="ml-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-[#3D1A78] font-medium text-base">caloriechoice@gmail.com</p>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/calorie_choice/" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 rounded-2xl hover:bg-white/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(61,26,120,0.04)] hover:translate-x-1 border-2 border-transparent hover:border-[#3D1A78]/30">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 text-[#5B2EA0] shadow-sm border border-white group-hover:text-pink-500 group-hover:shadow-md transition-all duration-300">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="ml-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Instagram</p>
                  <p className="text-[#3D1A78] font-medium text-base">@calorie_choice</p>
                  <p className="text-[11.5px] font-medium text-[#5B2EA0]/60 mt-0.5">Click here</p>
                </div>
              </a>

              {/* Location */}
              <div className="group flex items-center p-4 rounded-2xl hover:bg-white/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(61,26,120,0.04)] hover:translate-x-1 border-2 border-transparent hover:border-[#3D1A78]/30 cursor-default">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 text-[#5B2EA0] shadow-sm border border-white group-hover:text-[#7AB419] group-hover:shadow-md transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="ml-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-[#3D1A78] font-medium text-base">Palakkad, Kerala</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE — Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Form Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#3D1A78]/20 via-transparent to-[#7AB419]/20 rounded-[40px] blur-xl opacity-70 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="relative bg-white/50 backdrop-blur-2xl p-8 lg:p-12 rounded-[32px] border border-white/80 shadow-[0_20px_60px_-15px_rgba(61,26,120,0.1)] overflow-hidden">
              
              <div className="mb-8">
                <h3 className={`${outfit.className} text-3xl font-extrabold text-[#3D1A78] mb-2 leading-tight`}>
                  For enquiry or order, leave a message
                </h3>
                <p className="text-[#5B2EA0]/80 font-medium">
                  We’ll get back to you with personalized nutrition support.
                </p>
              </div>
              
              <div className="space-y-6">
                
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="block w-full px-5 py-4 bg-white/60 border-2 rounded-2xl text-[#3D1A78] outline-none transition-all duration-300 peer placeholder-transparent focus:bg-white shadow-sm"
                    style={{
                      borderColor: focusedField === 'name' ? '#7AB419' : 'rgba(255,255,255,0.8)',
                      boxShadow: focusedField === 'name' ? '0 0 20px rgba(122,180,25,0.15)' : 'none'
                    }}
                    placeholder="Name"
                  />
                  <label 
                    htmlFor="name" 
                    className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                      formData.name || focusedField === 'name' 
                      ? '-top-3 text-xs bg-gradient-to-b from-[#F9FBF6] to-white px-2 text-[#7AB419] font-bold rounded-md shadow-sm border border-gray-100' 
                      : 'top-4 text-[#5B2EA0]/60 font-medium'
                    }`}
                  >
                    Full Name
                  </label>
                </div>

                {/* Grid for Phone and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Field */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="block w-full px-5 py-4 bg-white/60 border-2 rounded-2xl text-[#3D1A78] outline-none transition-all duration-300 peer placeholder-transparent focus:bg-white shadow-sm"
                      style={{
                        borderColor: focusedField === 'phone' ? '#7AB419' : 'rgba(255,255,255,0.8)',
                        boxShadow: focusedField === 'phone' ? '0 0 20px rgba(122,180,25,0.15)' : 'none'
                      }}
                      placeholder="Phone"
                    />
                    <label 
                      htmlFor="phone" 
                      className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                        formData.phone || focusedField === 'phone' 
                        ? '-top-3 text-xs bg-gradient-to-b from-[#F9FBF6] to-white px-2 text-[#7AB419] font-bold rounded-md shadow-sm border border-gray-100' 
                        : 'top-4 text-[#5B2EA0]/60 font-medium'
                      }`}
                    >
                      Phone Number
                    </label>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="block w-full px-5 py-4 bg-white/60 border-2 rounded-2xl text-[#3D1A78] outline-none transition-all duration-300 peer placeholder-transparent focus:bg-white shadow-sm"
                      style={{
                        borderColor: focusedField === 'email' ? '#7AB419' : 'rgba(255,255,255,0.8)',
                        boxShadow: focusedField === 'email' ? '0 0 20px rgba(122,180,25,0.15)' : 'none'
                      }}
                      placeholder="Email"
                    />
                    <label 
                      htmlFor="email" 
                      className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                        formData.email || focusedField === 'email' 
                        ? '-top-3 text-xs bg-gradient-to-b from-[#F9FBF6] to-white px-2 text-[#7AB419] font-bold rounded-md shadow-sm border border-gray-100' 
                        : 'top-4 text-[#5B2EA0]/60 font-medium'
                      }`}
                    >
                      Email Address (Optional)
                    </label>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="block w-full px-5 py-5 bg-white/60 border-2 rounded-2xl text-[#3D1A78] outline-none transition-all duration-300 peer placeholder-transparent focus:bg-white resize-none min-h-[160px] shadow-sm"
                    style={{
                      borderColor: focusedField === 'message' ? '#7AB419' : 'rgba(255,255,255,0.8)',
                      boxShadow: focusedField === 'message' ? '0 0 20px rgba(122,180,25,0.15)' : 'none'
                    }}
                    placeholder="Message"
                  />
                  <label 
                    htmlFor="message" 
                    className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                      formData.message || focusedField === 'message' 
                      ? '-top-3 text-xs bg-gradient-to-b from-[#F9FBF6] to-white px-2 text-[#7AB419] font-bold rounded-md shadow-sm border border-gray-100' 
                      : 'top-5 text-[#5B2EA0]/60 font-medium'
                    }`}
                  >
                    Your Message
                  </label>
                </div>

                {/* Advanced Submit Button */}
                <div className="relative mt-8 flex justify-center h-16">
                  
                  <motion.button
                    layout
                    type="submit"
                    disabled={submitState !== "idle"}
                    className="relative overflow-hidden bg-gradient-to-r from-[#3D1A78] to-[#5B2EA0] border border-[#7AB419] text-white font-bold text-lg shadow-lg flex items-center justify-center z-10"
                    animate={
                      submitState === "idle" ? { width: "100%", borderRadius: 16 } :
                      submitState === "submitting" ? { width: 64, borderRadius: 32 } :
                      { width: "100%", borderRadius: 16 }
                    }
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <AnimatePresence mode="wait">
                      {submitState === "idle" && (
                        <motion.div 
                          key="idle" 
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: 1 }} 
                          exit={{ opacity: 0 }} 
                          className="flex items-center gap-3 relative w-full justify-center group"
                        >
                          {/* Animated shine sweep */}
                          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                          <span>Send Message</span>
                          <Send className="w-5 h-5 text-[#7AB419] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </motion.div>
                      )}
                      
                      {submitState === "submitting" && (
                        <motion.div 
                          key="submitting" 
                          initial={{ opacity: 0, scale: 0 }} 
                          animate={{ opacity: 1, scale: 1 }} 
                          exit={{ opacity: 0, scale: 0 }} 
                          className="flex items-center justify-center"
                        >
                          <Loader2 className="w-6 h-6 animate-spin text-white" />
                        </motion.div>
                      )}
                      
                      {submitState === "success" && (
                        <motion.div 
                          key="success" 
                          initial={{ opacity: 0, y: 10 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          exit={{ opacity: 0 }} 
                          className="flex items-center gap-3 relative w-full justify-center text-[#7AB419]"
                        >
                          <CheckCircle2 className="w-6 h-6" />
                          <span>Message Sent Successfully!</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Success Particle Burst */}
                    {submitState === "success" && [...Array(12)].map((_, i) => {
                      const angle = (i * 30 * Math.PI) / 180;
                      return (
                        <motion.div
                          key={`particle-${i}`}
                          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                          animate={{ 
                            x: Math.cos(angle) * 120, 
                            y: Math.sin(angle) * 60, 
                            opacity: 0, 
                            scale: Math.random() * 1.5 + 0.5 
                          }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="absolute w-2 h-2 rounded-full bg-white/80 pointer-events-none"
                          style={{ top: "50%", left: "50%", marginTop: "-4px", marginLeft: "-4px" }}
                        />
                      );
                    })}
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}
