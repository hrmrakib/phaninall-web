import { MessageCircle } from "lucide-react";
import React, { useState } from "react";

const Message = () => {
  const [showChatTooltip, setShowChatTooltip] = useState(false);

  return (
    <div className='fixed bottom-6 right-6 z-50'>
      <div className='relative'>
        {showChatTooltip && (
          <div className='absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-3 w-48 text-sm'>
            Chat with us! We&apos;re online and ready to help.
            <div className='absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white'></div>
          </div>
        )}
        <button
          className='bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 shadow-lg transition-colors'
          onMouseEnter={() => setShowChatTooltip(true)}
          onMouseLeave={() => setShowChatTooltip(false)}
          onClick={() => alert("Chat functionality would open here")}
        >
          <MessageCircle className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
};

export default Message;
