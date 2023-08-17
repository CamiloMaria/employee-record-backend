import { Injectable } from '@nestjs/common';
import { Admin, AdminDocument } from 'src/schemas/admin.schema';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Admin.name) private readonly adminModel: Model<AdminDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<Admin> | null {
    const admin = await this.adminModel.findOne({ username });

    if (admin && (await bcrypt.compare(password, admin.password))) {
      return admin;
    }
    return null;
  }

  async login(admin: Admin) {
    const payload = { username: admin.username, role: admin.role };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
