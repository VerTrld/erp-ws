import { ApiProperty } from '@nestjs/swagger';
import { PersonRole } from 'generated/prisma/enums';

export class Person {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  email?: string;

  @ApiProperty({ required: false })
  phone?: string;

  @ApiProperty()
  role: PersonRole;
}
