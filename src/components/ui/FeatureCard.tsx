import { HTMLAttributes, forwardRef } from 'react';
import IconWell from './IconWell';

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon, title, description, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000] duration-200 ${className}`}
        {...props}
      >
        <div className="mb-6">
          <IconWell variant="inset-deep" size="lg" color="accent">
            {icon}
          </IconWell>
        </div>
        <h3 className="font-space font-black text-2xl uppercase tracking-tighter mb-3">
          {title}
        </h3>
        <p className="font-space font-bold text-base leading-relaxed">
          {description}
        </p>
      </div>
    );
  }
);

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;
