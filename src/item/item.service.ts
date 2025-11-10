import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ItemService {
  constructor(private prismaClient: PrismaClient) {}

  async create(createItemDto: CreateItemDto) {
    const createItem = await this.prismaClient.item.create({
      data: { ...createItemDto },
    });
    // Update stock
    if (createItemDto.nature === 'PURCHASE' && createItemDto.purchaseId) {
      // Increase stock
      await this.prismaClient.product.update({
        where: { id: createItemDto.productId },
        data: { stock: { increment: createItemDto.quantity } },
      });
    } else if (createItemDto.nature === 'SALE' && createItemDto.saleId) {
      // Decrease stock
      await this.prismaClient.product.update({
        where: { id: createItemDto.productId },
        data: { stock: { decrement: createItemDto.quantity } },
      });
    }

    return createItem;
  }

  findAll() {
    return `This action returns all item`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
