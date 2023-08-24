import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({
    example: 'John Felipe Mendez Gonzales',
  })
  readonly completeName: string;

  @ApiProperty({
    example: '0000',
  })
  readonly extension: number;

  @ApiProperty({
    example: 'jonDoe@gmail.com',
  })
  readonly email: string;

  @ApiProperty({
    example: 'Sales',
  })
  readonly department: string;

  @ApiProperty({
    example: 'SC0',
  })
  readonly officeCode: string;
}
