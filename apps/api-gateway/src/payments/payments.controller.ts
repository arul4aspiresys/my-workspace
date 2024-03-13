import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { MakePaymentDto } from '@my-workspace/shared/dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) {}

  @Post('pay')
  makePayment(@Body(ValidationPipe) makePaymentDto: MakePaymentDto) {
    return this.paymentService.makePayment(makePaymentDto);
  }
}