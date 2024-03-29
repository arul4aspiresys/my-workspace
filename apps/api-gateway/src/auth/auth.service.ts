import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateUserDto } from '@my-workspace/shared/dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka
  ) {}

  createUser(createUserDto: CreateUserDto) {
    this.authClient.emit('create_user', JSON.stringify(createUserDto));
  }
}