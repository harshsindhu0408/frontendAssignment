import React from 'react';

const Loading = () => {
  const spinnerStyle = {
    width: '11.2px',
    height: '11.2px',
    borderRadius: '50%',
    boxShadow: '28px 0px 0 0 rgba(71, 75, 255, 0.2), 22.7px 16.5px 0 0 rgba(71, 75, 255, 0.4), 8.68px 26.6px 0 0 rgba(71, 75, 255, 0.6), -8.68px 26.6px 0 0 rgba(71, 75, 255, 0.8), -22.7px 16.5px 0 0 #474bff',
    animation: 'spinner 1s infinite linear',
  };

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
      <div style={spinnerStyle}></div>
      <style>
        {`
          @keyframes spinner {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
