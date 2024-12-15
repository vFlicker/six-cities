import { ClassConstructor } from 'class-transformer';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'Match' })
class MatchConstraint<T> implements ValidatorConstraintInterface {
  validate(value: unknown, args: ValidationArguments): boolean {
    const [propertyFn] = args.constraints as Array<(o: T) => unknown>;
    return propertyFn(args.object as T) === value;
  }

  defaultMessage(args: ValidationArguments): string {
    const [propertyFn] = args.constraints as Array<(o: T) => unknown>;
    const propertyName = propertyFn.toString().split('.')[1];
    return `${propertyName} and ${args.property} do not match`;
  }
}

export const Match = <T>(
  _type: ClassConstructor<T>,
  property: (o: T) => unknown,
  validationOptions?: ValidationOptions,
): PropertyDecorator => {
  return (object: object, propertyName: string | symbol): void => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName.toString(),
      options: validationOptions,
      constraints: [property],
      validator: MatchConstraint,
    });
  };
};
