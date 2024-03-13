import { Injectable } from '@nestjs/common';
import { User } from '@my-workspace/shared/entities';

@Injectable()
export class UsersRepository {
  private readonly users: User[] = [];

  save(user: User) {
    this.users.push({ ...user, id: this.users.length + 1 });
  }

  findOne(id: number) {
    return this.users.find((u) => u.id === id) || null;
  }
}