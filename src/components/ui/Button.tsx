import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-bold text-sm uppercase tracking-widest border-4 border-black shadow-[4px_4px_0px_0px_#000] transition-all duration-100 ease-out focus-visible:outline-none focus-visible:ring-0 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-neo-accent text-neo-fg hover:bg-[rgba(255,107,107,0.9)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
      secondary: 'bg-neo-secondary text-neo-fg hover:bg-[rgba(255,217,61,0.9)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
      outline: 'bg-white text-neo-fg hover:bg-[rgba(255,255,255,0.9)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none'
    };

    const sizes = {
      sm: 'px-4 py-2',
      md: 'px-6 py-3',
      lg: 'px-8 py-4'
    };

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
