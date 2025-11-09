import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from 'generated/prisma/client';

@Injectable()
export class ProductService {
  constructor(private prismaClient: PrismaClient) {}

  async create(createProductDto: CreateProductDto) {
    const createProduct = await this.prismaClient.product.create({
      data: {
        ...createProductDto,
      },
    });

    return createProduct;
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
