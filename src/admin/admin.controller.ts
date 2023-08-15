import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiTags, ApiParam, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CreateAdminDto } from 'src/dto/admin/create-admin.dto';
import { UpdateAdminDTO } from 'src/dto/admin/update-admin.dto';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get()
  @ApiOperation({ summary: 'Obtiene todos los administradores' })
  @ApiResponse({
    status: 200,
    description: 'Lista de administradores',
    type: [CreateAdminDto],
  })
  async getAllAdmins() {
    return this.adminService.getAllAdmins();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtiene un admin por su id' })
  @ApiParam({
    name: 'id',
    description: 'Id del admin',
    type: String,
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Admin encontrado',
    type: CreateAdminDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Admin no encontrado',
  })
  async getAdminById(@Param('id') id: string) {
    const admin = this.adminService.getAdminById(id);
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }
    return admin;
  }

  @Post()
  @ApiOperation({ summary: 'Crea un nuevo admin' })
  @ApiResponse({
    status: 201,
    description: 'Admin creado exitosamente',
    type: CreateAdminDto,
  })
  async createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.createAdmin(createAdminDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualiza un admin' })
  @ApiParam({
    name: 'id',
    description: 'Id del admin',
    type: String,
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Admin actualizado exitosamente',
    type: UpdateAdminDTO,
  })
  @ApiResponse({
    status: 404,
    description: 'Admin no encontrado',
  })
  async updateAdmin(
    @Param('id') id: string,
    @Body() updatedAdminDto: UpdateAdminDTO,
  ) {
    return this.adminService.updateAdmin(id, updatedAdminDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un admin' })
  @ApiParam({
    name: 'id',
    description: 'Id del admin',
    type: String,
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Admin eliminado exitosamente',
    type: CreateAdminDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Admin no encontrado',
  })
  async deleteAdmin(@Param('id') id: string) {
    return this.adminService.deleteAdmin(id);
  }
}
