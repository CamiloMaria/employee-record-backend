import { Injectable } from '@nestjs/common';
import { Admin, AdminDocument } from 'src/schemas/admin.schema';
import { CreateAdminDto } from 'src/dto/admin/create-admin.dto';
import { UpdateAdminDTO } from 'src/dto/admin/update-admin.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

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
    return this.adminModel.create(createdAdminDto);
  }

  async updateAdmin(
    id: string,
    updatedAdminDto: UpdateAdminDTO,
  ): Promise<Admin> {
    return this.adminModel.findOneAndUpdate({ _id: id }, updatedAdminDto, {
      new: true,
    });
  }

  async deleteAdmin(id: string): Promise<Admin> {
    return this.adminModel.findOneAndDelete({ _id: id }).exec();
  }
}
