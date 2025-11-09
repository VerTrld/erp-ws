import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaClient } from 'generated/prisma/client';

@Injectable()
export class SaleService {
  constructor(private prismaClient: PrismaClient) {}

  async create(createSaleDto: CreateSaleDto) {
    const createSale = await this.prismaClient.sale.create({
      data: {
        ...createSaleDto,
      },
    });

    return createSale;
  }

  findAll() {
    return `This action returns all sale`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sale`;
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}
