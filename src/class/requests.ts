import { IPaymentRequest } from '../interface/request/payment-request';
import { IPaymentResponse } from '../interface/response/payment-response';

class Requests {
  private URL = 'https://appws.picpay.com/ecommerce/public/payments';
  constructor(private picpayToken: string) {}
  request(params: IPaymentRequest): Promise<IPaymentResponse> {
    return new Promise((resolve, reject) => {
      fetch(this.URL, {
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
          expiresAt: '2023-04-30T16:00:00-03:00',
          buyer: {
            firstName: 'João',
            lastName: 'Da Silva',
            document: '0',
            email: 'teste@picpay.com',
            phone: '+55 27 12345-6789',
          },
        }),
      });
    });
  }
  cancel() {}
  status() {}
}
