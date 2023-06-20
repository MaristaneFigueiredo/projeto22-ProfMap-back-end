import { RequestError } from '@/protocols';

export function RequestError(status: number, statusText: string): RequestError {
  return {
    name: 'RequestError',
    data: null,
    status,
    statusText,
    message: 'No result for this search!',
  };
}
