import React from 'react';

export const Button = ({ className, title }) => {
  return (
    <div className={className}>
      <button>
        {title}
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5001 1L6.1001 2.5L13.5001 10L6.1001 17.5L7.5001 19L16.5001 10L7.5001 1Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};
