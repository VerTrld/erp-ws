import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaClient } from 'generated/prisma/client';

@Injectable()
export class PersonService {
  constructor(private prismaClient: PrismaClient) {}

  async create(createPersonDto: CreatePersonDto) {
    const createPerson = await this.prismaClient.person.create({
      data: {
        ...createPersonDto,
      },
    });

    return createPerson;
  }

  async findAll() {
    const data = await this.prismaClient.person.findMany();
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
