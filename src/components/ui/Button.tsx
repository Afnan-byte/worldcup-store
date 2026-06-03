import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseClass = 'btn';
  const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'outline' ? 'btn-outline' : '';
  const sizeClass = size === 'sm' ? 'text-sm py-2 px-4' : size === 'lg' ? 'text-lg py-3 px-8' : '';
  const widthClass = fullWidth ? 'w-full' : '';
  
  // Note: we are using inline styles for size class overrides because we are avoiding tailwind, 
  // but let's define them properly or just rely on btn classes defined in globals.css.
  const styleStr = [baseClass, variantClass, widthClass, className].filter(Boolean).join(' ');

  return (
    <button className={styleStr} {...props}>
      {children}
    </button>
  );
}
