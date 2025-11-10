import { ApiProperty } from '@nestjs/swagger';
import { ItemNature } from '@prisma/client';

export class Item {
  @ApiProperty()
  productId: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  nature: ItemNature;

  @ApiProperty()
  purchaseId?: number;

  @ApiProperty()
  saleId?: number;
}
