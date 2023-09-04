import { Injectable } from '@nestjs/common';
import { Employee, EmployeeDocument } from 'src/schemas/employee.schema';
import { CreateEmployeeDto } from 'src/dto/employee/create-employee.dto';
import { UpdateEmployeeDto } from 'src/dto/employee/update-employee.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<EmployeeDocument>,
  ) {}

  async getAllEmployees(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async getEmployeeById(id: string): Promise<Employee> {
    return this.employeeModel.findOne({ _id: id }).exec();
  }

  async createEmployee(
    createdEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return this.employeeModel.create(createdEmployeeDto);
  }

  async updateEmployee(
    id: string,
    updatedEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    return this.employeeModel.findOneAndUpdate(
      { _id: id },
      updatedEmployeeDto,
      {
        new: true,
      },
    );
  }

  async deleteEmployee(id: string): Promise<Employee> {
    return this.employeeModel.findOneAndDelete({ _id: id }).exec();
  }
}
