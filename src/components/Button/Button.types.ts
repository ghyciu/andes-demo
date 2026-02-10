import { PropsWithChildren } from 'react';

interface Button extends PropsWithChildren {
  style?: React.CSSProperties;
  className?: string;
  href?: string;
}

export default Button;
