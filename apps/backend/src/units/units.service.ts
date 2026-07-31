import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUnitDto } from './dto/CreateUnitDto.dto';
import { UpdateUnitDto } from './dto/UpdateUnitDto.dto';

@Injectable()
export class UnitsService {
  constructor(private prisma: PrismaService) {}

  getUnits() {
    return this.prisma.unit.findMany();
  }

  getUnit(id: number) {
    return this.prisma.unit.findFirst({ where: { id } });
  }

  createUnit(unit: CreateUnitDto) {
    return this.prisma.unit.create({ data: unit });
  }

  modifyUnit(id: number, unit: UpdateUnitDto) {
    return this.prisma.unit.update({ where: { id }, data: unit });
  }

  deleteUnit(id: number) {
    return this.prisma.unit.delete({ where: { id } });
  }
}
