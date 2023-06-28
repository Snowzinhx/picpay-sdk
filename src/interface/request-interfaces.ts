export interface IPaymentRequest {
  referenceId: number;
  callbackUrl: string;
  returnUrl?: string;
  value: number;
  expiresAt: string;
  buyer: {
    firstName: string;
    lastName: string;
    document: string;
    email?: string;
    phone?: string;
  };
}
