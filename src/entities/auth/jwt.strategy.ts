import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

import { UserService } from '../users/users.service';
import { AdminsService } from '../admins/admins.service';

export interface JwtPayload {
  username: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UserService,
    private readonly adminsService: AdminsService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'yourSecretKey', // Use the same key as in AuthModule
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.usersService.findOneByUsername(payload.username);
    if (user) {
      return user;
    }

    const admin = await this.adminsService.findOneByUsername(payload.username);
    if (admin) {
      return admin;
    }

    return null;
  }
}
