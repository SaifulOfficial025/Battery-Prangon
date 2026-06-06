import React from 'react';

const Button = ({
  children,
  text,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  ...props
}) => {
  // Base styling for the button
  const baseClasses = 'inline-flex items-center justify-center font-medium text-base transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  // Variant mappings
  const variants = {
    // Primary variant matching the reference red button
    primary: 'bg-[#C51C1C] hover:bg-[#A61414] text-white rounded-xl px-8 py-3 shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/15',
    // Secondary variant (e.g. gray bg)
    secondary: 'bg-[#f1f1f1] hover:bg-slate-200 text-slate-800 rounded-xl px-8 py-3',
    // Outline variant with border
    outline: 'border border-[#C51C1C] text-[#C51C1C] hover:bg-red-50 rounded-xl px-8 py-3',
    // Text variant without borders or backgrounds
    text: 'text-slate-700 hover:text-black hover:underline px-4 py-2',
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${selectedVariant} ${className}`}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;