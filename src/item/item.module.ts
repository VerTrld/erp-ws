import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ItemController],
  providers: [ItemService, PrismaClient],
})
export class ItemModule {}
