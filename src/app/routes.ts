import { Routes } from '@nestjs/core';
import { UsersModule } from 'src/users/users.module';

export const routes: Routes = [
  {
    path: '/user',
    module: UsersModule,
  },
];
