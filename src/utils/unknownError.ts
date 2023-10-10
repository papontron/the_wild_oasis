export type ErrorWithMessage = {
  message: string;
};

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  } else {
    return 'An error ocurred, try again.';
  }
}
export function alertError({ message }: { message: string }) {
  alert(message);
}
