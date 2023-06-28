import { IPaymentRequest } from '../interface/request-interfaces';

export default async (params: IPaymentRequest): Promise<boolean> => {
  const { referenceId, callbackUrl, value, expiresAt, buyer } = params;
  if (!referenceId || typeof referenceId !== 'number')
    throw new Error(
      'The "referenceId" parameter must be provided and be of type number'
    );
  if (!callbackUrl || typeof callbackUrl !== 'string')
    throw new Error(
      'The "callbackUrl" parameter must be provided and be of type string'
    );
  if (!value || typeof value !== 'number')
    throw new Error(
      'The "value" parameter must be provided and be of type number'
    );
  if (!expiresAt || typeof expiresAt !== 'string')
    throw new Error(
      'The "expiresAt" parameter must be provided and be of type string'
    );
  if (!buyer || typeof buyer !== 'object')
    throw new Error('Buyer details must be provided.');
  return true;
};
