import {
  IPaymentRequest,
  IStatusRequest,
  ICancelRequest,
} from './interface/request-interfaces';
import {
  IPaymentResponse,
  IStatusResponse,
  ICancelResponse,
  ErrorsResponse,
} from './interface/response-interfaces';

export class Picpay {
  private PAYURL = 'https://appws.picpay.com/ecommerce/public/payments';
  constructor(private picpayToken: string) {}
  request(params: IPaymentRequest): Promise<IPaymentResponse | ErrorsResponse> {
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
        .then((data) => resolve(data as IPaymentResponse))
        .catch((err) => reject(err as ErrorsResponse));
    });
  }
  status(params: IStatusRequest): Promise<IStatusResponse | ErrorsResponse> {
    return new Promise((resolve, reject) => {
      fetch(
        `https://appws.picpay.com/ecommerce/public/payments/${params.referenceId}/cancellations`,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-picpay-token': this.picpayToken,
          },
          method: 'get',
        }
      )
        .then((res) => res.json())
        .then((data) => resolve(data as IStatusResponse))
        .catch((err) => reject(err as ErrorsResponse));
    });
  }
  cancel(params: ICancelRequest): Promise<ICancelResponse | ErrorsResponse> {
    return new Promise((resolve, reject) => {
      fetch(
        `https://appws.picpay.com/ecommerce/public/payments/${params.referenceId}/cancellations`,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-picpay-token': this.picpayToken,
          },
          method: 'post',
          body: JSON.stringify({
            authorizationId: params.authorizationId,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => resolve(data as ICancelResponse))
        .catch((err) => reject(err as ErrorsResponse));
    });
  }
}
