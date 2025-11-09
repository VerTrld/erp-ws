import { ApiProperty } from '@nestjs/swagger';

export class Sale {
  @ApiProperty()
  customerId: number;
  @ApiProperty()
  createdAt: Date;
}
