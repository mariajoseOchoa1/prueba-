import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const ButtonSecondary = ({ children, className = '', size }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-secondary
        hover:bg-secondary-darker
        rounded
        text-white
    `}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
