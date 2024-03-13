import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { MakePaymentDto } from '@my-workspace/shared/dto';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject('PAYMENT_MICROSERVICE') private readonly paymentClient: ClientKafka
  ) {}

  makePayment(makePaymentDto: MakePaymentDto) {
    this.paymentClient.emit('process_payment', JSON.stringify(makePaymentDto));
  }
}