import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/CreateCategoryDto.dto';
import { UpdateCategoryDto } from './dto/UpdateCategoryDto.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  getCategories() {
    return this.prisma.category.findMany();
  }

  getCategory(id: number) {
    return this.prisma.category.findFirst({ where: { id } });
  }

  createCategory(category: CreateCategoryDto) {
    return this.prisma.category.create({ data: category });
  }

  modifyCategory(id: number, category: UpdateCategoryDto) {
    return this.prisma.category.update({ where: { id }, data: category });
  }

  deleteCategory(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
