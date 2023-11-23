import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { routes } from './routes';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [UsersModule, RouterModule.register(routes)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
