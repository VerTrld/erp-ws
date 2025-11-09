import { PickType } from '@nestjs/swagger';
import { Purchase } from '../entities/purchase.entity';

export class CreatePurchaseDto extends PickType(Purchase, [
  'supplierId',
  'createdAt',
]) {}
