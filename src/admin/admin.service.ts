import { Injectable, NotFoundException } from '@nestjs/common';
import { Admin, AdminDocument } from 'src/schemas/admin.schema';
import { CreateAdminDto } from 'src/dto/admin/create-admin.dto';
import { UpdateAdminDTO } from 'src/dto/admin/update-admin.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name)
    private readonly adminModel: Model<AdminDocument>,
  ) {}

  async getAllAdmins(): Promise<Admin[]> {
    return this.adminModel.find().exec();
  }

  async getAdminById(id: string): Promise<Admin> {
    return this.adminModel.findOne({ _id: id }).exec();
  }

  async createAdmin(createdAdminDto: CreateAdminDto): Promise<Admin> {
    const { username, password, role } = createdAdminDto;

    // Hashear la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new this.adminModel({
      username,
      password: hashedPassword, // Almacena la contraseña hasheada
      role,
      created_at: new Date(),
    });

    return newAdmin.save();
  }

  async updateAdmin(
    id: string,
    updatedAdminDto: UpdateAdminDTO,
  ): Promise<Admin> {
    const existingAdmin = await this.adminModel.findById(id);

    if (!existingAdmin) {
      throw new NotFoundException('Admin not found');
    }

    if (updatedAdminDto.password) {
      // Hashear la nueva contraseña antes de actualizarla
      const hashedPassword = await bcrypt.hash(updatedAdminDto.password, 10);
      existingAdmin.password = hashedPassword;
    }

    // Solo copiar las propiedades actualizadas de updatedAdminDto
    for (const [key, value] of Object.entries(updatedAdminDto)) {
      if (key !== 'password') {
        existingAdmin[key] = value;
      }
    }

    const updatedAdmin = await existingAdmin.save();

    return updatedAdmin;
  }

  async deleteAdmin(id: string): Promise<Admin> {
    return this.adminModel.findOneAndDelete({ _id: id }).exec();
  }
}
