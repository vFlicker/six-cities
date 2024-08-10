import { ComponentType } from 'react';

function withAttrs<T extends object>(
  defaultProps: Partial<T>,
  Component: ComponentType<T>,
): ComponentType<Omit<T, keyof typeof defaultProps> & Partial<T>> {
  return (props) => {
    const combinedProps = { ...defaultProps, ...props } as T;
    return <Component {...combinedProps} />;
  };
}

export { withAttrs };
