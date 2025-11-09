import { PickType } from '@nestjs/swagger';
import { Sale } from '../entities/sale.entity';

export class CreateSaleDto extends PickType(Sale, [
  'customerId',
  'createdAt',
]) {}
