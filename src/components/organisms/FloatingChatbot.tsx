"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatResponse {
  keywords: string[];
  response: string;
}

// Predefined insurance FAQ responses with hardcoded questions and answers
const chatResponses: ChatResponse[] = [
  // Greetings
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "good day", "morning", "afternoon", "evening"],
    response: "Good morning! How are you? I'm here to help you with your insurance needs. You can ask me about motor insurance, health insurance, home insurance, or get a quote!"
  },
  
  // Motor Insurance
  {
    keywords: ["motor", "car", "vehicle", "auto", "bike", "motorcycle", "two wheeler", "four wheeler"],
    response: "🚗 Motor Insurance Coverage:\n\n• Comprehensive coverage for cars & bikes\n• Third-party liability protection\n• Zero depreciation add-on available\n• 24/7 roadside assistance\n• Quick claim settlement\n\nPremium starts from ₹2,500/year. Would you like a personalized quote?"
  },
  
  // Health Insurance
  {
    keywords: ["health", "medical", "hospital", "doctor", "illness", "surgery"],
    response: "🏥 Health Insurance Benefits:\n\n• Cashless hospitalization\n• Pre & post-operative care\n• Critical illness coverage\n• Family floater options\n• No claim bonus\n\nPlans start from ₹5,000/year for individuals. Interested in family coverage?"
  },
  
  // Home Insurance
  {
    keywords: ["home", "house", "property", "fire", "theft", "burglary"],
    response: "🏠 Home Insurance Protection:\n\n• Fire & natural calamity coverage\n• Theft & burglary protection\n• Structure & contents coverage\n• Temporary accommodation\n• Public liability\n\nCoverage starts from ₹3,000/year. Need a home assessment?"
  },
  
  // Travel Insurance
  {
    keywords: ["travel", "trip", "vacation", "abroad", "international", "domestic"],
    response: "✈️ Travel Insurance Coverage:\n\n• Medical emergencies abroad\n• Trip cancellation/delay\n• Baggage loss protection\n• Passport loss assistance\n• 24/7 global support\n\nDomestic: ₹500/trip | International: ₹1,500/trip"
  },
  
  // Life Insurance
  {
    keywords: ["life", "term", "endowment", "family", "death", "maturity"],
    response: "👨‍👩‍👧‍👦 Life Insurance Plans:\n\n• Term life insurance\n• Endowment policies\n• Money-back plans\n• Child education plans\n• Pension plans\n\nTerm plans from ₹500/month for ₹50 lakh cover. Planning for your family's future?"
  },
  
  // Pricing & Quotes
  {
    keywords: ["quote", "price", "cost", "premium", "rate", "how much", "charges"],
    response: "💰 Get Your Personalized Quote:\n\n📞 Call: +91 8111923644\n📧 Email: kvaidyans2023@gmail.com\n📝 Fill our contact form above\n\nOur experts will provide the best rates within 24 hours. Free consultation available!"
  },
  
  // Contact Information
  {
    keywords: ["contact", "phone", "call", "office", "address", "location", "visit"],
    response: "📞 Contact K Vaidyan Insurance:\n\n☎️ Phone: +91 8111923644\n📧 Email: kvaidyans2023@gmail.com\n📍 Address: Chenankkara Junction, Thevalakkara, Kerala 690524\n\n🕒 Office Hours: 9 AM - 6 PM (Mon-Sat)\n\nFree consultation available!"
  },
  
  // Claims Process
  {
    keywords: ["claim", "accident", "damage", "repair", "settlement", "cashless"],
    response: "🛡️ Easy Claim Process:\n\n1️⃣ Call 24/7 helpline: +91 8111923644\n2️⃣ Submit required documents\n3️⃣ Our team will assist you\n4️⃣ Quick settlement (7-15 days)\n\n📧 Email: kvaidyans2023@gmail.com with policy number"
  },
  
  // Services
  {
    keywords: ["services", "what do you offer", "products", "insurance types"],
    response: "🏢 Our Insurance Services:\n\n🚗 Motor Insurance\n🏥 Health Insurance\n🏠 Home Insurance\n✈️ Travel Insurance\n👨‍👩‍👧‍👦 Life Insurance\n🐄 Cattle & Dairy Farm\n🏪 Shopkeeper's Insurance\n🚢 Marine Insurance\n\nWhich service interests you?"
  },
  
  // Thanks & Goodbye
  {
    keywords: ["thank", "thanks", "bye", "goodbye", "see you", "later"],
    response: "You're most welcome! 😊\n\nFeel free to reach out anytime:\n📞 +91 8111923644\n📧 kvaidyans2023@gmail.com\n\nHave a great day and stay protected! 🛡️"
  }
];

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi! I'm your insurance assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const findBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const response of chatResponses) {
      if (response.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return response.response;
      }
    }
    
    return "I'd be happy to help! Here are some things you can ask me about:\n\n🚗 Motor Insurance\n🏥 Health Insurance\n🏠 Home Insurance\n✈️ Travel Insurance\n👨‍👩‍👧‍👦 Life Insurance\n💰 Get Quote\n📞 Contact Info\n\nOr call us directly at +91 8111923644 for personalized assistance!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBotResponse(userMessage.text),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6" ref={chatRef}>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 h-[500px] w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl backdrop-blur-sm md:w-96"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-accent to-accent-strong p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Insurance Assistant</h3>
                  <p className="text-xs text-white/80">How can we help you?</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
                aria-label="Close chat"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex h-[340px] flex-col overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      message.isBot
                        ? "bg-gray-100 text-gray-800"
                        : "bg-accent text-white"
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    <p className={`mt-1 text-xs ${
                      message.isBot ? "text-gray-500" : "text-white/70"
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl bg-gray-100 px-4 py-2">
                    <div className="flex items-center gap-1">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                      </div>
                      <span className="ml-2 text-xs text-gray-500">Typing...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-100 p-4">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white transition-all hover:bg-accent-strong disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        onClick={toggleChat}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-strong text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Notification Badge (Optional) */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
          1
        </div>
      )}
    </div>
  );
}