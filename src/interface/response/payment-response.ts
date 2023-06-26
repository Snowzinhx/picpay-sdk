export interface IPaymentResponse {
  referenceId: string;
  paymentUrl: string;
  expiresAt: string;
  qrcode: {
    content: string;
    base64: string;
  };
}
