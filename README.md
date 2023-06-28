# Picpay SDK

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)

Created to help when generating payments through Picpay for your application.

## Support

The project is under development, anything can be calling me on the link or Discord below:

My Discord: snowzinhx

My server: [Discord](https://discord.gg/UNZ5jMQdTR)

## Installation

```bash
  npm install @snowzinhx/picpay-sdk

  or

  pnpm install @snowzinhx/picpay-sdk

  or

  yarn add @snowzinhx/picpay-sdk
```

## Demonstration

#### Generating a new payment intention:

```
    const { Picpay } = require('@snowzinhx/picpay-sdk');
    const picpay = new Picpay('your_picpay_token'); //to get your token go to: https://painel-empresas.picpay.com/integracoes

    const newPayment = {
    referenceId: YOUR_REFERENCE_ID,
    callbackUrl: 'http://www.yourstore.com.br/callback',
    value: 20.23,
    expiresAt: '2023-06-30T16:00:00-03:00',
    buyer: {
        firstName: 'John',
        lastName: 'Doe',
        document: '123.456.789-10',
        email: 'john@doe.com',
        phone: '+55 27 12345-6789',
    },
    };

    picpay
        .request(newPayment)
        .then(res=> console.log(res))
        .catch(err=> console.log(err))
```

Output:

```
{
  referenceId: '1',
  paymentUrl: 'https://app.picpay.com/checkout/NjQ5OWMxMzg...4MjZmMzBj',
  qrcode: {
    content: '00020101021226860014COM.PICPAY.P2B0164https://app.picpay.com/checkout/NjQ5OWMxMzgwYjY4NzkwOGQ4MjZmMzBj...6f30c6304C4C4',
    base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQC...WXMAAA74O1fZEAZDi957Kp13GrLnQMBvE1+/v79+wOg4J/TbwDgLcECMgQLyBAs...wT6QAAAABJRU5ErkJggg=='
  },
  expiresAt: '2023-06-30T16:00:00-03:00'
}
```

#### Querying the status of a payment:

```
    picpay
        .status(YOUR_REFERENCE_ID)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

```

Output:

```
    {
        referenceId: '1',
        status: 'created',
        createdAt: '2023-06-26T16:47:52.000000Z',
        updatedAt: '2023-06-26T16:47:52.000000Z',
        value: 20.23,
        summary: { paid: 0, authorized: 0, refunded: 0 }
    }
```

#### Canceling/refunding an order:

```
    picpay
        .cancel(YOUR_REFERENCE_ID)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
```

Output:

```
    {
        referenceId: '1',
        cancellationId: '6499c40e...38cdcb'
    }
```

## Interfaces

#### Payment request

```
    interface IPaymentRequest {
        referenceId: number; // Unique identifier for your order.
        callbackUrl: string; // Url to which PicPay will return the payment status.
        returnUrl?: string; // Url to which the customer will be redirected after payment.
        value: number; // Payment amount in reais.
        expiresAt: string; // When the payment order will expire. ISO 8601 format.
        buyer: {
            firstName?: string; // Buyer's first name.
            lastName?: string; // Buyer's last name.
            document: string; // Buyer's CPF
            email?: string; // Buyer's email
            phone?: string; // buyer's phone number
        };
    }

```

## Reference

This application was developed following the API documentation on the Picpay website. **There you will have more detailed and complete information about the use of the API, so always consult.**

- [Picpay - API Reference](https://studio.picpay.com/produtos/e-commerce/checkout/resources/api-reference)

## License MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

- [License MIT](https://lbesson.mit-license.org/)
