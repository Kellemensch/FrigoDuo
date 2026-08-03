import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRecipeDto } from './dto/CreateRecipeDto.dto';
import { UpdateRecipeDto } from './dto/UpdateRecipeDto.dto';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  getRecipes() {
    return this.prisma.recipe.findMany({
      include: { recipeIngredients: true },
    });
  }

  getRecipe(id: number) {
    return this.prisma.recipe.findFirst({
      where: { id },
      include: {
        recipeIngredients: { include: { ingredient: true, unit: true } },
      },
    });
  }

  async createRecipe(recipe: CreateRecipeDto) {
    const name = recipe.name.trim().toLowerCase();
    /*
		 const existingRecipe = await this.prisma.recipe.findUnique({
      where: { name: name },
    });
    if (existingRecipe) {
      throw new ConflictException('The recipe already exists');
    }
    */

    for (let i = 0; i < recipe.ingredients.length; i++) {
      const ingredient = recipe.ingredients[i];
      const existingIngredient = await this.prisma.ingredient.findUnique({
        where: { id: ingredient.ingredientId },
      });
      if (!existingIngredient) {
        throw new NotFoundException(
          `The ingredient with ingredientId ${ingredient.ingredientId} was not found`,
        );
      }

      if (ingredient.unitId) {
        const existingUnit = await this.prisma.unit.findUnique({
          where: { id: ingredient.unitId },
        });
        if (!existingUnit) {
          throw new NotFoundException(
            `The unit with unitId ${ingredient.unitId} was not found`,
          );
        }
      }
    }
    await this.prisma.$transaction(async (tx) => {
      const recipeCreated = await tx.recipe.create({ data: { name: name } });
      const recipeId = recipeCreated.id;

      const recipeIngredients = recipe.ingredients.map((ingredient) => ({
        recipeId: recipeId,
        ingredientId: ingredient.ingredientId,
        quantity: ingredient.quantity,
        unitId: ingredient.unitId,
      }));

      await tx.recipeIngredient.createMany({ data: recipeIngredients });

      return recipeCreated;
    });
    return this.prisma.recipe.create({ data: recipe });
  }

  modifyRecipe(id: number, recipe: UpdateRecipeDto) {
    return this.prisma.recipe.update({ where: { id }, data: recipe });
  }

  deleteRecipe(id: number) {
    return this.prisma.recipe.delete({ where: { id } });
  }
}
