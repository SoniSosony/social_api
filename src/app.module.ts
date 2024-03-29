import { Module } from '@nestjs/common';
import { AuthModule } from './api/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RegisterModule } from './api/register/register.module';
import { UserModule } from './api/user/users.module';
import { FriendshipModule } from './api/friendship/friendship.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    RegisterModule,
    UserModule,
    FriendshipModule,
  ],
})
export class AppModule {}
