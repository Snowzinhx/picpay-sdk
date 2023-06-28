import { IPaymentRequest } from './interface/request-interfaces';
import {
  IPaymentResponse,
  IStatusResponse,
  ICancelResponse,
} from './interface/response-interfaces';
import requestValidation from './validation/request-validation';

export class Picpay {
  private PAYURL = 'https://appws.picpay.com/ecommerce/public/payments';
  constructor(private picpayToken: string) {}
  async request(
    params: IPaymentRequest
  ): Promise<IPaymentResponse | undefined> {
    try {
      const validation = await requestValidation(params);
      if (validation === true) {
        try {
          const res = await fetch(this.PAYURL, {
            headers: {
              'Content-Type': 'application/json',
              'x-picpay-token': this.picpayToken,
            },
            method: 'post',
            body: JSON.stringify({
              referenceId: params.referenceId,
              callbackUrl: params.callbackUrl,
              value: params.value,
              returnUrl: params.returnUrl,
              expiresAt: params.expiresAt,
              buyer: {
                firstName: params.buyer.firstName,
                lastName: params.buyer.lastName,
                document: params.buyer.document,
                email: params.buyer.email,
                phone: params.buyer.phone,
              },
            }),
          });
          return await res.json();
        } catch (error) {
          throw error;
        }
      }
    } catch (error) {
      throw error;
    }
  }
  async status(referenceId: string): Promise<IStatusResponse | undefined> {
    try {
      if (!referenceId || typeof referenceId !== 'string')
        throw new Error(
          'The "referenceId" parameter must be provided and be of type string'
        );
      try {
        const res = await fetch(
          `https://appws.picpay.com/ecommerce/public/payments/${referenceId}/status`,
          {
            headers: {
              'Content-Type': 'application/json',
              'x-picpay-token': this.picpayToken,
            },
            method: 'get',
          }
        );
        return res.json();
      } catch (error) {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
  async cancel(referenceId: string): Promise<ICancelResponse> {
    try {
      if (!referenceId || typeof referenceId !== 'string')
        throw new Error(
          'The "referenceId" parameter must be provided and be of type string'
        );
      try {
        const res = await fetch(
          `https://appws.picpay.com/ecommerce/public/payments/${referenceId}/cancellations`,
          {
            headers: {
              'Content-Type': 'application/json',
              'x-picpay-token': this.picpayToken,
            },
            method: 'post',
            body: JSON.stringify({
              authorizationId: '5ffc8f61404bae05532d82da',
            }),
          }
        );
        return res.json();
      } catch (error) {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
}
