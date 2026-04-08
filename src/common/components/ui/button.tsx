import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/common/utils/cn';

type ButtonVariant = 'primary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClassMap: Record<ButtonVariant, string> = {
  primary: 'btn btn-primary',
  ghost: 'btn btn-ghost',
};

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps): JSX.Element => {
  return <button className={cn(variantClassMap[variant], className)} {...props} />;
};
