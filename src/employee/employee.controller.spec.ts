import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { NotFoundException } from '@nestjs/common';
import { EmployeeModule } from './employee.module';
import { CreateEmployeeDto } from 'src/dto/employee/create-employee.dto';

describe('EmployeeController', () => {
  let employeeController: EmployeeController;
  let employeeService: EmployeeService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [EmployeeModule],
    }).compile();

    employeeService = moduleRef.get<EmployeeService>(EmployeeService);
    employeeController = moduleRef.get<EmployeeController>(EmployeeController);
  });

  describe('createEmployee', () => {
    it('should create a new employee', () => {
      const newEmployee: CreateEmployeeDto = {
        name: 'John',
        lastName: 'Doe',
        extension: '123',
        email: 'john@gmail.com',
        department: 'Sales',
        officeCode: 'CD01',
      };

      const createdEmployee = employeeController.createEmployee(newEmployee);

      expect(createdEmployee).toEqual(newEmployee);
      expect(employeeService.getAllEmployees()).toContainEqual(newEmployee);
    });
  });

  describe('getEmployeeById', () => {
    it('should return null if employee is not found', () => {
      const nonExistingId = '999';

      expect(() =>
        employeeController.getEmployeeById(nonExistingId),
      ).toThrowError(NotFoundException);
    });
  });
});
