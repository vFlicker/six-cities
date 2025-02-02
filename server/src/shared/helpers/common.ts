import {
  ClassConstructor,
  Expose,
  ExposeOptions,
  plainToInstance,
  Transform,
  TransformFnParams,
} from 'class-transformer';

export function generateRandomValue(
  min: number,
  max: number,
  numAfterDigit: number = 0,
): number {
  return +(Math.random() * (max - min) + min).toFixed(numAfterDigit);
}

export function generateRandomValues(
  min: number,
  max: number,
  count: number,
): number[] {
  return Array.from({ length: count }, () => generateRandomValue(min, max));
}

export function getRandomItems<T>(items: T[]): T[] {
  const startPosition = generateRandomValue(0, items.length - 1);
  const endPosition =
    startPosition + generateRandomValue(startPosition, items.length);
  return items.slice(startPosition, endPosition);
}

export function getRandomItem<T>(items: T[]): T {
  return items[generateRandomValue(0, items.length - 1)];
}

export function getRandomBoolean(): boolean {
  return Math.random() > 0.5;
}

export function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : '';
}

export function fillDTO<T, V>(someDto: ClassConstructor<T>, plainObject: V): T {
  return plainToInstance(someDto, plainObject, {
    excludeExtraneousValues: true,
  });
}

export function ExposeId(options?: ExposeOptions): PropertyDecorator {
  return (target: object, propertyKey: string | symbol) => {
    Transform(
      (params: TransformFnParams) =>
        params.obj[options?.name ? options.name : propertyKey],
    )(target, propertyKey);
    Expose(options)(target, propertyKey);
  };
}

export function getFullServerPath(host: string, port: number): string {
  return `http://${host}:${port}`;
}
