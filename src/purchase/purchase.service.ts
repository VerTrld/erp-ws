import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PurchaseService {
  constructor(private prismaClient: PrismaClient) {}

  async create(createPurchaseDto: CreatePurchaseDto) {
    const createPurchase = await this.prismaClient.purchase.create({
      data: {
        ...createPurchaseDto,
      },
    });

    return createPurchase;
  }

  findAll() {
    return `This action returns all purchase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchase`;
  }

  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return `This action updates a #${id} purchase`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchase`;
  }
}
