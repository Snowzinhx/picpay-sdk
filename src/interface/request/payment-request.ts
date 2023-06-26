interface IBuyer {
  buyer: {
    firstName: string;
    lastName: string;
    document: string;
    email: string;
    phone: string;
  };
}
export interface IPaymentRequest extends IBuyer {
  referenceId: number;
  callbackUrl: string;
  returnUrl?: string;
  value: number;
  expiresAt: string;
}
