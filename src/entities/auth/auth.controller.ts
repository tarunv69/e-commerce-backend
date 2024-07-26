import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );
    if (user) {
      return this.authService.login(user);
    }

    const admin = await this.authService.validateAdmin(
      loginDto.username,
      loginDto.password,
    );
    if (admin) {
      return this.authService.login(admin);
    }

    throw new UnauthorizedException();
  }
}
