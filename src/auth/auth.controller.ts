import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiResponse, ApiOperation, ApiBody } from '@nestjs/swagger';
import { Admin } from 'src/schemas/admin.schema';
import { LoginData } from 'src/dto/auth/login.dto';

@ApiTags('login')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({ summary: 'Inicia sesion' })
  @ApiBody({ type: LoginData })
  @ApiResponse({
    status: 201,
    description: 'Se inicio correctamente la sesion',
    type: Admin,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async login(@Body() loginData: { username: string; password: string }) {
    const admin = await this.authService.validateUser(
      loginData.username,
      loginData.password,
    );

    if (admin) {
      return this.authService.login(admin);
    } else {
      return { message: 'Authentication failed' };
    }
  }
}
