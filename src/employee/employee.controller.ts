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
import { EmployeeService } from './employee.service';
import { ApiTags, ApiParam, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CreateEmployeeDto } from 'src/dto/employee/create-employee.dto';
import { UpdateEmployeeDto } from 'src/dto/employee/update-employee.dto';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  @ApiOperation({ summary: 'Obtiene todos los empleados' })
  @ApiResponse({
    status: 200,
    description: 'Lista de empleados',
    type: [CreateEmployeeDto],
  })
  async getAllEmployees() {
    return this.employeeService.getAllEmployees();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtiene un empleado por su id' })
  @ApiParam({
    name: 'id',
    description: 'Id del empleado',
    type: String,
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Empleado encontrado',
    type: CreateEmployeeDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Empleado no encontrado',
  })
  async getEmployeeById(@Param('id') id: string) {
    const employee = this.employeeService.getEmployeeById(id);
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    return employee;
  }

  @Post()
  @ApiOperation({ summary: 'Crea un nuevo empleado' })
  @ApiResponse({
    status: 201,
    description: 'Empleado creado exitosamente',
    type: CreateEmployeeDto,
  })
  async createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualiza un empleado' })
  @ApiParam({
    name: 'id',
    description: 'Id del empleado',
    type: String,
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Empleado actualizado exitosamente',
    type: UpdateEmployeeDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Empleado no encontrado',
  })
  async updateEmployee(
    @Param('id') id: string,
    @Body() updatedEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.updateEmployee(id, updatedEmployeeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un empleado' })
  @ApiParam({
    name: 'id',
    description: 'Id del empleado',
    type: String,
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Empleado eliminado exitosamente',
    type: CreateEmployeeDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Empleado no encontrado',
  })
  async deleteEmployee(@Param('id') id: string) {
    return this.employeeService.deleteEmployee(id);
  }
}
