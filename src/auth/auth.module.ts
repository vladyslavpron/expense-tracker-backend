import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { RefreshStrategy } from './strategies/refresh.strategy';
import { AccessStrategy } from './strategies/access.strategy';
import { TokensService } from './tokens.service';

@Module({
  imports: [JwtModule.register({}), forwardRef(() => UsersModule)],
  providers: [AuthService, TokensService, AccessStrategy, RefreshStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
