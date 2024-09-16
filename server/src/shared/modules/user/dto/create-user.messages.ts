export const CreateUserMessages = {
  name: {
    invalidFormat: 'Name must be a string',
    lengthField: 'Name must be between 2 and 15 characters',
  },
  email: {
    invalidFormat: 'email must be a valid address',
  },
  password: {
    invalidFormat: 'Password must be a string',
    lengthField: 'Password must be between 6 and 20 characters',
  },
  type: {
    invalid: 'Invalid user type',
  },
  avatarUrl: {
    invalidFormat: 'Avatar URL must be a string',
  },
} as const;
