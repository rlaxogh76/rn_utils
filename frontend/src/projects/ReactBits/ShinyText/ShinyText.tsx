import './ShinyText.css';

import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div className="w-screen align-center flex justify-center items-center">
      <div
        className={`text-[#b5b5b5a4] text-6xl h-auto bg-clip-text inline-block ${
          disabled ? '' : 'animate-shine'
        } ${className}`}
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          animationDuration: animationDuration,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ShinyText;
