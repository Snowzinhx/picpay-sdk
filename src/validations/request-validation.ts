import { IPaymentRequest } from './../interface/request-interfaces';

export default async function (params: IPaymentRequest): Promise<boolean> {
  const { referenceId, callbackUrl, returnUrl, value, expiresAt, buyer } =
    params;
  if (!referenceId || typeof referenceId !== 'number') return false;
  if (!callbackUrl || typeof callbackUrl !== 'string') return false;
  if (!returnUrl || typeof returnUrl !== 'string') return false;
  if (!value || typeof value !== 'number') return false;
  if (!expiresAt || typeof expiresAt !== 'string') return false;
  if (!buyer || typeof buyer !== 'object') return false;
  return true;
}
