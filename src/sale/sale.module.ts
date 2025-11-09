import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { PrismaClient } from 'generated/prisma/client';

@Module({
  controllers: [SaleController],
  providers: [SaleService, PrismaClient],
})
export class SaleModule {}
