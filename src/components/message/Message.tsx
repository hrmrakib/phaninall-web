"use client";

import Link from "next/link";
import React, { useState } from "react";

const Message = () => {
  const [showChatTooltip, setShowChatTooltip] = useState(false);
  const messengerUrl = "https://m.me/username";
  return (
    <div className='fixed bottom-6 right-6 z-50'>
      <div className='relative'>
        {showChatTooltip && (
          <div className='absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-3 w-48 text-sm'>
            Chat with us! We&apos;re online and ready to help.
            <div className='absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white'></div>
          </div>
        )}
        <Link
          href={messengerUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='transition-colors'
          onMouseEnter={() => setShowChatTooltip(true)}
          onMouseLeave={() => setShowChatTooltip(false)}
          // onClick={() => alert("Chat functionality would open here")}
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
                fill-rule='evenodd'
                clip-rule='evenodd'
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
        </Link>
      </div>
    </div>
  );
};

export default Message;
