import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop()
  completeName: string;

  @Prop()
  extension: number;

  @Prop()
  email: string;

  @Prop()
  department: string;

  @Prop()
  officeCode: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
