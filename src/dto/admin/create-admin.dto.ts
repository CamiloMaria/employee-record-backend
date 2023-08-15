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

  @ApiProperty({
    example: '2021-01-01T00:00:00.000Z',
  })
  readonly created_at: Date;
}
