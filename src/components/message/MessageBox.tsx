// "use client";

// import type React from "react";

// import { useState, useRef, useEffect } from "react";
// import { Bot, MoreVertical, X, Send } from "lucide-react";
// import { Button } from "@/components/ui/button";

// type Message = {
//   id: number;
//   text: string;
//   isUser: boolean;
// };

// export default function ChatbotInterface() {
//   const [isOpen, setIsOpen] = useState(true);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: 1,
//       text: "I'm looking for a wireless headset. Any recommendations?",
//       isUser: true,
//     },
//     {
//       id: 2,
//       text: "👋 We have a great selection of wireless headsets. For what purpose do you mostly need it—gaming, music, or calls?",
//       isUser: false,
//     },
//     {
//       id: 3,
//       text: "Mostly for calls and some music. I'd like good sound quality and a comfortable fit.",
//       isUser: true,
//     },
//     {
//       id: 4,
//       text: "Got it! For calls and music, I'd recommend our ProSound 360 headset. It has noise-canceling features and soft ear cushions for long wear. Plus, it has up to 20 hours of battery life on a single charge! Would you like to know the price?",
//       isUser: false,
//     },
//   ]);
//   const [newMessage, setNewMessage] = useState("");
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const handleSendMessage = () => {
//     if (newMessage.trim() === "") return;

//     // Add user message
//     const userMessage: Message = {
//       id: messages.length + 1,
//       text: newMessage,
//       isUser: true,
//     };
//     setMessages([...messages, userMessage]);
//     setNewMessage("");

//     // Simulate bot response after a short delay
//     setTimeout(() => {
//       const botResponse: Message = {
//         id: messages.length + 2,
//         text: "Thank you for your interest! The ProSound 360 is priced at $129.99. Would you like me to add it to your cart?",
//         isUser: false,
//       };
//       setMessages((prev) => [...prev, botResponse]);
//     }, 1000);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   useEffect(() => {
//     // Scroll to bottom when messages change
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className='fixed bottom-20 right-4 md:right-8 md:pl-7 w-[90%] max-w-[90%] rounded-lg overflow-hidden shadow-lg bg-[#FFF0E6] border-4 border-[#FFD0B0 border-red-500'>
//           {/* Header */}
//           <div className='bg-[#FFBB85] p-3 flex items-center justify-between'>
//             <div className='flex items-center gap-2'>
//               <div className='bg-[#FF6B00] p-1.5 rounded-full'>
//                 <Bot className='h-5 w-5 text-white' />
//               </div>
//               <span className='font-medium text-black'>Chatbot</span>
//             </div>
//             <div className='flex items-center gap-2'>
//               <Button
//                 variant='ghost'
//                 size='icon'
//                 className='h-8 w-8 rounded-full'
//               >
//                 <MoreVertical className='h-5 w-5' />
//               </Button>
//               <Button
//                 variant='ghost'
//                 size='icon'
//                 className='h-8 w-8 rounded-full'
//                 onClick={toggleChat}
//               >
//                 <X className='h-5 w-5' />
//               </Button>
//             </div>
//           </div>

//           {/* Chat messages */}
//           <div className='h-96 overflow-y-auto p-3 bg-[#FFF0E6]'>
//             <div className='flex flex-col gap-3'>
//               {messages.map((message) => (
//                 <div
//                   key={message.id}
//                   className={`flex ${
//                     message.isUser ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   {!message.isUser && (
//                     <div className='mr-2 bg-[#FF6B00] p-1.5 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0'>
//                       <Bot className='h-5 w-5 text-white' />
//                     </div>
//                   )}
//                   <div
//                     className={`max-w-[80%] p-3 rounded-lg ${
//                       message.isUser
//                         ? "bg-white text-black"
//                         : "bg-[#FF6B00] text-white"
//                     }`}
//                   >
//                     <p className='text-sm'>{message.text}</p>
//                   </div>
//                 </div>
//               ))}
//               <div ref={messagesEndRef} />
//             </div>
//           </div>

//           {/* Input area */}
//           <div className='p-3 border-t border-[#FFD0B0] bg-[#FFF0E6]'>
//             <div className='flex items-center gap-2'>
//               <input
//                 type='text'
//                 placeholder='Your message...'
//                 className='flex-1 p-3 rounded-full border border-[#FFD0B0] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00]'
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 onKeyDown={handleKeyDown}
//               />
//               <Button
//                 onClick={handleSendMessage}
//                 className='bg-transparent hover:bg-transparent p-2'
//               >
//                 <Send className='h-6 w-6 text-[#FF6B00]' />
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Chat button */}
//       <button
//         onClick={toggleChat}
//         className='fixed bottom-4 right-4 md:right-8 bg-[#FF6B00] text-white p-4 rounded-full shadow-lg hover:bg-[#E55A00] transition-colors'
//       >
//         <div className='relative'>
//           {/* <Bot className='h-6 w-6' /> */}
//           {!isOpen && (
//             <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
//               1
//             </span>
//           )}
//         </div>
//       </button>
//     </>
//   );
// }

"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Bot, MoreVertical, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";

type Message = {
  id: number;
  text: string;
  isUser: boolean;
};

export default function ChatbotInterface() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const generateResponse = async (userMessage: string) => {
    setIsLoading(true);
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAAqfA0f2nbOjMPPKKGR_qQh2K3Ag3X2w0",
        method: "post",
        data: {
          contents: [
            {
              parts: [
                {
                  text: `You are a helpful customer support assistant. Respond to the user's query in a friendly and professional manner. Keep responses concise but helpful.
              
              User: ${userMessage}`,
                },
              ],
            },
          ],
        },
      });

      const botResponse = response.data.candidates[0].content.parts[0].text;
      return botResponse;
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      return "I'm sorry, I encountered an error processing your request. Please try again later.";
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      isUser: true,
    };
    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Get bot response
    const botResponse = await generateResponse(newMessage);

    const botMessage: Message = {
      id: messages.length + 2,
      text: botResponse,
      isUser: false,
    };
    setMessages((prev) => [...prev, botMessage]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=''>
      {isOpen && (
        <div className=''>
          <div className='fixed bottom-20 md:right-8  w-full max-w-md rounded-lg overflow-hidden shadow-lg bg-[#FFF0E6] border border-[#FFD0B0]'>
            {/* {/ Header /} */}
            <div className='bg-[#FFBB85] p-3 flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='bg-[#FF6B00] p-1.5 rounded-full'>
                  <Bot className='h-5 w-5 text-white' />
                </div>
                <span className='font-medium text-black'>Chatbot</span>
              </div>
              <div className='flex items-center gap-2'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full'
                >
                  <MoreVertical className='h-5 w-5' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full'
                  onClick={toggleChat}
                >
                  <X className='h-5 w-5' />
                </Button>
              </div>
            </div>

            <div className='h-96 overflow-y-auto p-3 bg-[#FFF0E6]'>
              <div className='flex flex-col gap-3'>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    {!message.isUser && (
                      <div className='mr-2 bg-[#FF6B00] p-1.5 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0'>
                        <Bot className='h-5 w-5 text-white' />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isUser
                          ? "bg-white text-black"
                          : "bg-[#FF6B00] text-white"
                      }`}
                    >
                      <p className='text-sm'>{message.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className='flex justify-start'>
                    <div className='mr-2 bg-[#FF6B00] p-1.5 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0'>
                      <Bot className='h-5 w-5 text-white' />
                    </div>
                    <div className='max-w-[80%] p-3 rounded-lg bg-[#FF6B00] text-white'>
                      <div className='flex gap-1'>
                        <div className='w-2 h-2 rounded-full bg-white animate-bounce'></div>
                        <div
                          className='w-2 h-2 rounded-full bg-white animate-bounce'
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className='w-2 h-2 rounded-full bg-white animate-bounce'
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* {/ Input area /} */}
            <div className='p-3 border-t border-[#FFD0B0] bg-[#FFF0E6]'>
              <div className='flex items-center gap-2'>
                <input
                  type='text'
                  placeholder='Your message...'
                  className='flex-1 p-3 rounded-full border border-[#FFD0B0] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00]'
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  className='bg-transparent hover:bg-transparent p-2'
                  disabled={isLoading}
                >
                  <Send className='h-6 w-6 text-[#FF6B00]' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {/ Chat button /} */}
      <button
        onClick={toggleChat}
        className='fixed bottom-4 right-4 md:right-8 bg-[#FF6B00] text-white p-4 rounded-full shadow-lg hover:bg-[#E55A00] transition-colors'
      >
        <div className='relative'>
          {!isOpen && (
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
              1
            </span>
          )}
          <Bot className='h-6 w-6' />
        </div>
      </button>
    </div>
  );
}
