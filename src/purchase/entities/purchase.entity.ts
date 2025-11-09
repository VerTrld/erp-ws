import { ApiProperty } from '@nestjs/swagger';

export class Purchase {
  @ApiProperty()
  supplierId: number;
  @ApiProperty()
  createdAt: Date;
}
