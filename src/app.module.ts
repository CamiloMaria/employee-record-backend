import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvKeys } from './shared/const-values';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EmployeeModule,
    AuthModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get(EnvKeys.MONGODB_URI)
      }),
      inject: [ConfigService]
    }),
    AdminModule,
  ],
})
export class AppModule {}
