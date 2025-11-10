import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaClient],
})
export class ProductModule {}
