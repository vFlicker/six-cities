import { ComponentType } from 'react';

type DefaultPropsType<T> = Partial<T> | ((props: Partial<T>) => Partial<T>);

function resolveDefaultProps<T>(
  defaultProps: DefaultPropsType<T>,
  props: Partial<T>,
): Partial<T> {
  return typeof defaultProps === 'function'
    ? defaultProps(props)
    : defaultProps;
}

function withAttrs<T extends object>(
  defaultProps: DefaultPropsType<T>,
  Component: ComponentType<T>,
): ComponentType<
  Omit<T, keyof ReturnType<typeof resolveDefaultProps<T>>> & Partial<T>
> {
  return (props: Partial<T>) => {
    const resolvedDefaultProps = resolveDefaultProps(defaultProps, props);
    const combinedProps = { ...resolvedDefaultProps, ...props } as T;
    return <Component {...combinedProps} />;
  };
}

export { withAttrs };
