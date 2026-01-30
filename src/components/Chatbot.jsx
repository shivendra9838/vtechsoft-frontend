import { useState, useEffect, useRef } from "react";
import { chatbotAPI } from "../api/config";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Welcome message when chatbot opens
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: "Hello! 👋 Welcome to VTECHSOFT! I'm here to help you with any questions about our services, technology solutions, or how we can assist your business. What would you like to know?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await chatbotAPI.sendMessage(inputValue, sessionId);
      
      const botResponse = {
        id: Date.now() + 1,
        text: response.response,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error('Chatbot error:', error);
      
      // Fallback to local responses when backend is unavailable
      const fallbackResponse = generateLocalBotResponse(inputValue);
      
      const botResponse = {
        id: Date.now() + 1,
        text: fallbackResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const generateLocalBotResponse = (message) => {
    const msg = message.toLowerCase();
    
    // Owner/Developer information
    if (msg.includes('who made') || msg.includes('who develop') || msg.includes('who created') || msg.includes('owner') || msg.includes('made this') || msg.includes('developed by')) {
      return "VTECHSOFT Technology was founded by Vivek Shukla, who is the owner and visionary behind our company. The website and technical development were led by Shivendra Tiwari, our talented developer who brought this digital platform to life. Together, they've created a comprehensive technology solution to serve businesses worldwide!";
    }
    
    if (msg.includes('vivek') || msg.includes('shukla')) {
      return "Vivek Shukla is the founder and owner of VTECHSOFT Technology. With his vision and leadership, he has guided the company to become a leading technology solutions provider. Vivek oversees business strategy and ensures we deliver exceptional value to all our clients.";
    }
    
    if (msg.includes('shivendra') || msg.includes('tiwari')) {
      return "Shivendra Tiwari is our lead developer who created and developed this amazing website! He's responsible for the technical architecture, frontend design, and backend systems that power VTECHSOFT's digital presence. Shivendra's expertise in modern web technologies ensures our platform runs smoothly and efficiently.";
    }
    
    // Service-related responses
    if (msg.includes("web development") || msg.includes("website")) {
      return "We offer comprehensive web development services including React, Vue, Angular, and custom solutions. Our team builds scalable, responsive applications tailored to your business needs. Would you like to know more about our web development process?";
    }
    
    if (msg.includes("mobile") || msg.includes("app")) {
      return "Our mobile app development covers both iOS and Android platforms using React Native and Flutter. We create high-performance, user-friendly mobile applications. What type of mobile app are you looking to develop?";
    }
    
    if (msg.includes("cloud") || msg.includes("aws") || msg.includes("azure")) {
      return "We provide cloud architecture and migration services for AWS, Azure, and Google Cloud. Our experts help businesses optimize cloud infrastructure for scalability and cost-efficiency. Which cloud platform interests you?";
    }
    
    if (msg.includes("ai") || msg.includes("machine learning")) {
      return "Our AI/ML services include predictive analytics, natural language processing, computer vision, and custom ML model development. We help businesses leverage AI for automation and insights. What AI solution are you exploring?";
    }
    
    if (msg.includes("devops") || msg.includes("deployment")) {
      return "Our DevOps services include CI/CD pipeline setup, containerization with Docker, Kubernetes orchestration, and infrastructure as code. We streamline your development and deployment processes. What DevOps challenges are you facing?";
    }
    
    if (msg.includes("ui") || msg.includes("ux") || msg.includes("design")) {
      return "Our UI/UX team creates intuitive, beautiful interfaces that delight users. We offer user research, wireframing, prototyping, and design system development. What kind of design project do you have in mind?";
    }
    
    // Pricing and contact responses
    if (msg.includes("price") || msg.includes("cost") || msg.includes("how much")) {
      return "Our pricing varies based on project scope and requirements. We offer flexible engagement models from fixed-price projects to dedicated teams. For a detailed quote, please share your project requirements or schedule a consultation with our team.";
    }
    
    if (msg.includes("contact") || msg.includes("talk") || msg.includes("speak")) {
      return "You can reach us through our contact form, email us at info@vtechsoft.com, or call us at +91-XXXXXXXXXX. Our team is available Monday-Friday, 9 AM to 6 PM IST. Would you like me to direct you to our contact page?";
    }
    
    // Company information
    if (msg.includes("about") || msg.includes("company") || msg.includes("who")) {
      return "VTECHSOFT Technology is a leading software development company specializing in web, mobile, cloud, and AI solutions. Founded by Vivek Shukla and developed by Shivendra Tiwari, we've helped 100+ businesses transform digitally with our innovative technology solutions. Learn more about our journey and team on our About page!";
    }
    
    if (msg.includes("experience") || msg.includes("years") || msg.includes("since")) {
      return "With over 8 years of experience in software development, we've successfully delivered 500+ projects across various industries. Our team of 50+ experts brings deep domain knowledge and technical excellence to every project.";
    }
    
    // Technical responses
    if (msg.includes("technology") || msg.includes("tech stack") || msg.includes("tools")) {
      return "We work with modern technologies including React, Vue, Angular, Node.js, Python, Java, AWS, Azure, Docker, Kubernetes, TensorFlow, and more. We choose the right technology stack based on your specific requirements and business goals.";
    }
    
    // Process and timeline
    if (msg.includes("process") || msg.includes("how") || msg.includes("timeline")) {
      return "Our development process includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Testing, 4) Deployment & Support. Typical project timelines range from 2-12 weeks depending on complexity. Would you like details about any specific phase?";
    }
    
    // Default responses
    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
      return "Hello! 👋 How can I help you with VTECHSOFT's services today? Are you looking for web development, mobile apps, cloud solutions, or something else?";
    }
    
    if (msg.includes("thank") || msg.includes("thanks")) {
      return "You're welcome! 😊 Is there anything else I can help you with regarding our services or technology solutions?";
    }
    
    if (msg.includes("bye") || msg.includes("goodbye")) {
      return "Thank you for chatting with us! Feel free to reach out anytime through our contact page or email. Have a great day! 🌟";
    }
    
    // Catch-all response
    return "I'd be happy to help you with information about our web development, mobile apps, cloud services, AI/ML solutions, DevOps, or UI/UX design. You can also ask about our pricing, process, company information, or our founder Vivek Shukla and developer Shivendra Tiwari!";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const clearChat = () => {
    setMessages([]);
    try {
      chatbotAPI.clearHistory(sessionId);
    } catch (error) {
      console.error('Error clearing chat:', error);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#2dd4bf] to-[#00c9b7] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat with us"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0f2942] to-[#1e4a6f] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2dd4bf] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0f2942]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">VTECHSOFT Assistant</h3>
                <p className="text-xs text-slate-300">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="text-white/80 hover:text-white transition-colors p-1"
                title="Clear chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-[#2dd4bf] to-[#00c9b7] text-white"
                      : "bg-white border border-slate-200 text-slate-700"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === "user" ? "text-white/80" : "text-slate-500"
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] focus:border-transparent text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping || inputValue.trim() === ""}
                className="px-4 py-3 bg-gradient-to-r from-[#2dd4bf] to-[#00c9b7] text-white rounded-xl hover:from-[#00c9b7] hover:to-[#2dd4bf] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-slate-500">
                Powered by VTECHSOFT AI • Available 24/7
              </p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-500">Online</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
