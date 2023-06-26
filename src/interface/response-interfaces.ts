export interface ICancelResponse {
  referenceId: string;
  cancellationId: string;
}

export interface IPaymentResponse {
  referenceId: string;
  paymentUrl: string;
  expiresAt: string;
  qrcode: {
    content: string;
    base64: string;
  };
}
export interface IStatusResponse {
  referenceId: string;
  status: string;
  summary: {
    paid: number;
    authorized: number;
    refunded: number;
  };
}
