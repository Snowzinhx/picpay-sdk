import { ICancelRequest } from './request-interfaces';
export interface ICancelResponse {
  referenceId: string;
  cancellationId: string;
}
interface ErrorsArray {
  field: string;
  message: string;
}

export interface ErrorsResponse {
  message: string;
  errors?: Array<ErrorsArray>;
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

export interface IStatusResponse extends ICancelRequest {
  stauts: string;
}
