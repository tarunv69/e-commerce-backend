import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';

import { UserModule } from '../users/users.module';
import { AdminsModule } from '../admins/admins.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    AdminsModule,
    PassportModule,
    JwtModule.register({
      secret: 'yourSecretKey', // Change this to a secure key
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
