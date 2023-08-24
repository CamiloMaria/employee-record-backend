import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({
    example: 'admin',
  })
  readonly username: string;

  @ApiProperty({
    example: 'admin',
  })
  readonly password: string;

  @ApiProperty({
    example: 'subAdmin',
    enum: ['admin', 'subAdmin'],
  })
  readonly role: string;
}
