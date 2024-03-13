import { CreateUserDto } from '@my-workspace/shared/dto';
import { User } from '@my-workspace/shared/entities';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from './user.repository';

@Injectable()
export class AppService {
  constructor(private readonly usersRepository: UsersRepository) {}

  createUser(data: CreateUserDto): void {
    this.usersRepository.save(data);
  }

  getUser(id: number): User {
    return this.usersRepository.findOne(id);
  }
}