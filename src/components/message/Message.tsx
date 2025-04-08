"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Bot, MoreVertical, X, Send } from "lucide-react";
import { Button } from "../ui/button";

type Message = {
  id: number;
  text: string;
  isUser: boolean;
};
const Message = () => {
  const [showChatTooltip, setShowChatTooltip] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "I'm looking for a wireless headset. Any recommendations?",
      isUser: true,
    },
    {
      id: 2,
      text: "👋 We have a great selection of wireless headsets. For what purpose do you mostly need it—gaming, music, or calls?",
      isUser: false,
    },
    {
      id: 3,
      text: "Mostly for calls and some music. I'd like good sound quality and a comfortable fit.",
      isUser: true,
    },
    {
      id: 4,
      text: "Got it! For calls and music, I'd recommend our ProSound 360 headset. It has noise-canceling features and soft ear cushions for long wear. Plus, it has up to 20 hours of battery life on a single charge! Would you like to know the price?",
      isUser: false,
    },
    {
      id: 5,
      text: "Yes, please. What's the price?",
      isUser: true,
    },
    {
      id: 6,
      text: "The ProSound 360 is currently $89.99. We also have a 15% discount running this week. Would you like to place an order or explore other models?",
      isUser: false,
    },
    {
      id: 7,
      text: "That sounds good. Are there any models with a foldable design?",
      isUser: true,
    },
    {
      id: 8,
      text: "Absolutely! Our FlexTone X2 has a foldable design, great for travel. It also features dual microphones and touch controls. Would you like a comparison between this and the ProSound 360?",
      isUser: false,
    },
    {
      id: 9,
      text: "Yes, a comparison would be helpful.",
      isUser: true,
    },
    {
      id: 10,
      text: "Here’s a quick comparison: ProSound 360 - better for long calls and comfort; FlexTone X2 - more portable with similar sound quality. Both have noise-canceling. Price-wise, FlexTone X2 is $10 cheaper. Which one feels like a better fit for you?",
      isUser: false,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      isUser: true,
    };
    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Thank you for your interest! The ProSound 360 is priced at $129.99. Would you like me to add it to your cart?",
        isUser: false,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='fixed bottom-6 right-6 z-50'>
        <div className='relative'>
          {showChatTooltip && (
            <div className='absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-3 w-48 text-sm'>
              Chat with us! We&apos;re online and ready to help.
              <div className='absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white'></div>
            </div>
          )}
          <button
            onClick={toggleChat}
            className='transition-colors cursor-pointer'
            onMouseEnter={() => setShowChatTooltip(true)}
            onMouseLeave={() => setShowChatTooltip(false)}
          >
            <svg
              width='110'
              height='110'
              viewBox='0 0 110 110'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_d_304_18)'>
                <rect
                  x='15'
                  y='5'
                  width='80'
                  height='80'
                  rx='40'
                  fill='#FF6C0A'
                  shape-rendering='crispEdges'
                />
                <path
                  d='M73.1818 38.6361C73.1818 32.1091 67.8906 26.8179 61.3636 26.8179C57.5765 26.8179 54.2055 28.6039 52.0427 31.3764C61.2674 31.7331 68.6363 39.324 68.6363 48.6361C68.6363 48.8366 68.6329 49.0364 68.6261 49.2353L69.2302 49.3969C70.9872 49.867 72.5946 48.2597 72.1245 46.5027L71.8929 45.6372C71.7058 44.938 71.8183 44.1993 72.119 43.541C72.8014 42.0469 73.1818 40.3859 73.1818 38.6361Z'
                  fill='white'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M65.909 48.6361C65.909 56.6693 59.3968 63.1815 51.3636 63.1815C49.1172 63.1815 46.9898 62.6723 45.0904 61.763C44.4376 61.4504 43.698 61.3407 42.9988 61.5278L40.7697 62.1242C39.0127 62.5943 37.4053 60.9869 37.8754 59.23L38.4719 57.0008C38.6589 56.3016 38.5492 55.562 38.2367 54.9092C37.3273 53.0099 36.8181 50.8824 36.8181 48.6361C36.8181 40.6028 43.3303 34.0906 51.3636 34.0906C59.3968 34.0906 65.909 40.6028 65.909 48.6361ZM44.9999 50.4542C46.0041 50.4542 46.8181 49.6402 46.8181 48.6361C46.8181 47.6319 46.0041 46.8179 44.9999 46.8179C43.9958 46.8179 43.1818 47.6319 43.1818 48.6361C43.1818 49.6402 43.9958 50.4542 44.9999 50.4542ZM51.3636 50.4542C52.3677 50.4542 53.1818 49.6402 53.1818 48.6361C53.1818 47.6319 52.3677 46.8179 51.3636 46.8179C50.3594 46.8179 49.5454 47.6319 49.5454 48.6361C49.5454 49.6402 50.3594 50.4542 51.3636 50.4542ZM57.7272 50.4542C58.7314 50.4542 59.5454 49.6402 59.5454 48.6361C59.5454 47.6319 58.7314 46.8179 57.7272 46.8179C56.7231 46.8179 55.909 47.6319 55.909 48.6361C55.909 49.6402 56.7231 50.4542 57.7272 50.4542Z'
                  fill='white'
                />
              </g>
              <defs>
                <filter
                  id='filter0_d_304_18'
                  x='-1'
                  y='-11'
                  width='112'
                  height='121'
                  filterUnits='userSpaceOnUse'
                  color-interpolation-filters='sRGB'
                >
                  <feFlood flood-opacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='10' />
                  <feGaussianBlur stdDeviation='7.5' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.391667 0 0 0 0 0.169396 0 0 0 0 0.0212153 0 0 0 0.18 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_304_18'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_304_18'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      {/* // message box */}
      <>
        {isOpen && (
          <div className='z-999 fixed bottom-[135px] right-4 md:right-8 w-full max-w-md rounded-lg overflow-hidden shadow-lg bg-[#FFF0E6] border border-[#FFD0B0]'>
            {/* Header */}
            <div className='bg-[#FFBB85] p-3 flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='bg-[#FF6B00] p-1.5 rounded-full'>
                  <Bot className='h-5 w-5 text-white' />
                </div>
                <span className='font-medium text-lg text-black'>Chatbot</span>
              </div>
              <div className='flex items-center gap-2'>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full'
                >
                  <MoreVertical className='h-6 w-6' />
                </Button>
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-8 w-8 rounded-full'
                  onClick={toggleChat}
                >
                  <X className='h-6 w-6' />
                </Button>
              </div>
            </div>

            {/* Chat messages */}
            <div className='h-96 overflow-y-auto p-3 bg-[#FFF0E6]'>
              <div className='flex flex-col gap-6'>
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
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input area */}
            <div className='p-3 border-t border-[#FFD0B0] bg-[#FFF0E6]'>
              <div className='flex items-center gap-2'>
                <input
                  type='text'
                  placeholder='Your message...'
                  className='flex-1 p-3 rounded-full border border-[#FFD0B0] bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B00]'
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Button
                  onClick={handleSendMessage}
                  className='bg-transparent hover:bg-transparent p-2 cursor-pointer'
                >
                  <Send className='h-9 w-9 text-[#FF6B00]' />
                </Button>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Message;
