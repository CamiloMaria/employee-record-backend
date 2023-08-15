import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    EmployeeModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://Camio:icalriox321@cluster0.yqtoj8y.mongodb.net/extension-finder?retryWrites=true&w=majority',
    ),
    AdminModule,
  ],
})
export class AppModule {}
