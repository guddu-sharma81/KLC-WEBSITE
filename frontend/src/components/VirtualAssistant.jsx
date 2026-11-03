import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function VirtualAssistant({ onOpenBooking, onOpenEmergency }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Namaste! I am the KLC Hospital Virtual Assistant. How can I assist you with your healthcare today?'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    "Book an Appointment",
    "Emergency Ambulance",
    "Insurance & TPA",
    "Visiting Hours"
  ];

  const handleSend = (userQuery) => {
    const query = userQuery || inputText;
    if (!query.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInputText('');

    setTimeout(() => {
      let botResponse = "Thank you for reaching out. Our patient care coordinators are ready to help you.";
      const lower = query.toLowerCase();

      if (lower.includes('appointment') || lower.includes('book') || lower.includes('doctor')) {
        botResponse = "You can book an instant OPD appointment with our Super Specialists online right now. Would you like me to open the booking scheduler?";
      } else if (lower.includes('emergency') || lower.includes('ambulance') || lower.includes('trauma')) {
        botResponse = `Emergency Trauma is active 24x7! Call our rapid hotline immediately at ${HOSPITAL_INFO.emergencyNumber} or direct ambulance at ${HOSPITAL_INFO.ambulanceDirect}.`;
      } else if (lower.includes('insurance') || lower.includes('cashless') || lower.includes('tpa') || lower.includes('claim')) {
        botResponse = "KLC Hospital offers cashless hospitalization across 45+ TPAs and private health insurers including Star Health, HDFC ERGO, ICICI Lombard, and Care Health.";
      } else if (lower.includes('hour') || lower.includes('time') || lower.includes('timing') || lower.includes('visit')) {
        botResponse = "General OPD operates from 8:00 AM to 8:00 PM daily. Emergency & Trauma ICU services operate 24 hours continuously.";
      } else {
        botResponse = `For personalized medical advice or specialist appointment booking, please select a department or call our toll-free line at ${HOSPITAL_INFO.tollFree}.`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 450);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button 
        className="fixed bottom-4 right-4 sm:bottom-7 sm:right-7 w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#005a52] to-[#008277] text-white flex items-center justify-center shadow-2xl border-2 border-[#d4af37] z-50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open KLC Virtual Health Assistant"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full"></span>
        {isOpen ? <X size={22} className="sm:w-6 sm:h-6" /> : <Bot size={24} className="sm:w-7 sm:h-7" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed bottom-19 right-3 sm:bottom-28 sm:right-7 w-[380px] max-w-[calc(100vw-1.5rem)] h-[490px] sm:h-[520px] bg-white rounded-3xl shadow-2xl border-2 border-[#d4af37]/40 flex flex-col z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#001f1c] to-[#003b35] text-white px-5 py-4 flex items-center justify-between border-b border-[#d4af37]/35">
              <div className="flex items-center gap-2.5">
                <Bot size={22} className="text-[#f8df8c]" />
                <div>
                  <h4 className="text-sm font-bold text-white">KLC Virtual Care Assistant</h4>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Online & Ready</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="p-4 sm:p-5 grow overflow-y-auto flex flex-col gap-3 bg-[#f6faf9]">
              {messages.map((m, idx) => (
                <motion.div 
                  key={idx} 
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    m.sender === 'bot' 
                      ? 'bg-white text-slate-800 border border-slate-200 self-start rounded-bl-none shadow-sm' 
                      : 'bg-[#008277] text-white self-end rounded-br-none shadow-sm'
                  }`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {m.text}
                </motion.div>
              ))}

              {/* Quick Prompts */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {quickPrompts.map((prompt, pIdx) => (
                  <button 
                    key={pIdx} 
                    className="text-[11px] font-semibold bg-white border border-[#008277]/30 text-[#008277] hover:bg-[#008277] hover:text-white px-3 py-1.5 rounded-full transition-all cursor-pointer shadow-2xs"
                    onClick={() => {
                      if (prompt === "Book an Appointment") {
                        onOpenBooking();
                        setIsOpen(false);
                      } else if (prompt === "Emergency Ambulance") {
                        onOpenEmergency();
                        setIsOpen(false);
                      } else {
                        handleSend(prompt);
                      }
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <form 
              className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <input 
                type="text" 
                placeholder="Ask a health question..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="grow text-xs sm:text-sm px-4 py-2.5 rounded-full border border-slate-200 outline-none focus:border-[#008277]"
              />
              <motion.button 
                type="submit" 
                className="w-10 h-10 rounded-full bg-[#008277] text-white flex items-center justify-center shrink-0 cursor-pointer shadow-md hover:bg-[#006e65]"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                aria-label="Send Message"
              >
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
