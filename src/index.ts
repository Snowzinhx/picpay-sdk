import { IPaymentRequest } from './interface/request-interfaces';
import {
  IPaymentResponse,
  IStatusResponse,
  ICancelResponse,
} from './interface/response-interfaces';

export class Picpay {
  private PAYURL = 'https://appws.picpay.com/ecommerce/public/payments';
  constructor(private picpayToken: string) {}
  request(params: IPaymentRequest): Promise<IPaymentResponse> {
    return new Promise((resolve, reject) => {
      fetch(this.PAYURL, {
        headers: {
          'Content-Type': 'application/json',
          'x-picpay-token': this.picpayToken,
        },
        method: 'post',
        body: JSON.stringify({
          referenceId: params.referenceId,
          callbackUrl: params.callbackUrl,
          returnUrl: params.returnUrl,
          value: params.value,
          expiresAt: params.expiresAt,
          buyer: {
            firstName: params.buyer.firstName,
            lastName: params.buyer.lastName,
            document: params.buyer.document,
            email: params.buyer.email,
            phone: params.buyer.phone,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  status(referenceId: string): Promise<IStatusResponse> {
    return new Promise((resolve, reject) => {
      fetch(
        `https://appws.picpay.com/ecommerce/public/payments/${referenceId}/status`,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-picpay-token': this.picpayToken,
          },
          method: 'get',
        }
      )
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  cancel(referenceId: string): Promise<ICancelResponse> {
    return new Promise((resolve, reject) => {
      fetch(
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
      )
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}
