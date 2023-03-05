export type NotifyPayload = {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
};
