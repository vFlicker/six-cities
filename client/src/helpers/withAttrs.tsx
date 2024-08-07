import { ComponentType } from 'react';

function withAttrs<T extends object>(
  Component: ComponentType<T>,
  defaultProps: Partial<T>,
): ComponentType<Omit<T, keyof typeof defaultProps> & Partial<T>> {
  return (props) => {
    const combinedProps = { ...defaultProps, ...props } as T;
    return <Component {...combinedProps} />;
  };
}

export { withAttrs };
