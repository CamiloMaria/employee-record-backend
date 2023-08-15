import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({
    example: 'John Felipe Mendez Gonzales',
  })
  readonly completeName: string;

  @ApiProperty({
    example: 'x000',
  })
  readonly extension: string;

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
