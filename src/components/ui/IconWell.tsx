import { HTMLAttributes, forwardRef } from 'react';

export interface IconWellProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'inset' | 'inset-deep' | 'extruded';
  color?: 'default' | 'accent' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const IconWell = forwardRef<HTMLDivElement, IconWellProps>(
  ({ className = '', variant = 'inset', color = 'default', size = 'md', children, ...props }, ref) => {
    const shadowVariants = {
      inset: 'shadow-[4px_4px_0px_0px_#000]',
      'inset-deep': 'shadow-[6px_6px_0px_0px_#000]',
      extruded: 'shadow-[8px_8px_0px_0px_#000]'
    };

    const sizes = {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16'
    };

    const colorVariants = {
      default: 'bg-white',
      accent: 'bg-neo-accent',
      secondary: 'bg-neo-secondary'
    };

    return (
      <div
        ref={ref}
        className={`${sizes[size]} border-4 border-black ${shadowVariants[variant]} flex items-center justify-center ${colorVariants[color]} duration-200 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

IconWell.displayName = 'IconWell';

export default IconWell;
