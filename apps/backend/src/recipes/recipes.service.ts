import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRecipeDto } from './dto/CreateRecipeDto.dto';
import { UpdateRecipeDto } from './dto/UpdateRecipeDto.dto';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async getRecipes() {
    return this.prisma.recipe.findMany();
  }

  async getRecipe(id: number) {
    return this.prisma.recipe.findFirst({ where: { id } });
  }

  async createRecipe(recipe: CreateRecipeDto) {
    return this.prisma.recipe.create({ data: recipe });
  }

  async modifyRecipe(id: number, recipe: UpdateRecipeDto) {
    return this.prisma.recipe.update({ where: { id }, data: recipe });
  }

  async deleteRecipe(id: number) {
    return this.prisma.recipe.delete({ where: { id } });
  }
}
