import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { PrismaClient } from 'generated/prisma/client';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService, PrismaClient],
})
export class PurchaseModule {}
