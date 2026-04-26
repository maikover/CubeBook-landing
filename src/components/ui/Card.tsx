import { HTMLAttributes, forwardRef } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'feature' | 'flat';
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'neumorphic',
      feature: 'neumorphic hover:shadow-neumorphic-hover hover:-translate-y-2',
      flat: ''
    };

    return (
      <div
        ref={ref}
        className={`bg-background rounded-card p-8 ${variants[variant]} transition-all duration-300 ease-out ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
