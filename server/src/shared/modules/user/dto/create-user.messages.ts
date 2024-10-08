export const CreateUserMessages = {
  name: {
    invalidFormat: 'Name must be a string',
    lengthField: 'Name must be between 2 and 16 characters',
  },
  email: {
    invalidFormat: 'Email must be a valid address',
  },
  password: {
    invalidFormat: 'Password must be a string',
    lengthField: 'Password must be between 8 and 64 characters',
  },
  type: {
    invalid: 'Invalid user type',
  },
  avatarUrl: {
    invalidFormat: 'Avatar URL must be a string',
    maxLength: 'Max length for avatar URL is 255',
  },
};
