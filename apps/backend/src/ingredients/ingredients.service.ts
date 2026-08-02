import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIngredientDto } from './dto/CreateIngredientDto.dto';
import { UpdateIngredientDto } from './dto/UpdateIngredientDto.dto';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}

  getIngredients() {
    return this.prisma.ingredient.findMany();
  }

  getIngredient(id: number) {
    return this.prisma.ingredient.findFirst({ where: { id } });
  }

  async createIngredient(ingredient: CreateIngredientDto) {
    const name = ingredient.name.trim().toLowerCase();
    const existingIngredient = await this.prisma.ingredient.findUnique({
      where: { name: name },
    });
    if (existingIngredient) {
      throw new ConflictException('The ingredient already exists');
    }

    if (ingredient.categoryId) {
      const category = await this.prisma.category.findUnique({
        where: { id: ingredient.categoryId },
      });
      if (!category) {
        throw new NotFoundException('The category was not found');
      }
    }

    ingredient.name = name;
    return this.prisma.ingredient.create({ data: ingredient });
  }

  async modifyIngredient(id: number, ingredient: UpdateIngredientDto) {
    const name = ingredient.name?.trim().toLowerCase();
    const existingIngredient = await this.prisma.ingredient.findUnique({
      where: { id: id },
    });

    if (!existingIngredient) {
      throw new NotFoundException('The ingredient was not found');
    }

    if (ingredient.categoryId) {
      const category = await this.prisma.category.findUnique({
        where: { id: ingredient.categoryId },
      });
      if (!category) {
        throw new NotFoundException('The category was not found');
      }
    }

    if (name) {
      const existingName = await this.prisma.ingredient.findUnique({
        where: { name: name, NOT: { id: id } },
      });
      if (existingName) {
        throw new ConflictException('This name of ingredient already exists');
      }
    }
    return this.prisma.ingredient.update({ where: { id }, data: ingredient });
  }

  deleteIngredient(id: number) {
    return this.prisma.ingredient.delete({ where: { id } });
  }
}
