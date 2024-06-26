import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy';
import { WsJwtStrategy } from './strategy/ws-jwt.strategy';

// TODO: saperate auth and signin, signout logic
@Module({
  imports: [JwtModule.register({}), UserModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, WsJwtStrategy],
})
export class AuthModule {}
