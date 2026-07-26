import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/CreateRecipeDto.dto';
import { UpdateRecipeDto } from './dto/UpdateRecipeDto.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  getRecipes() {
    return this.recipesService.getRecipes();
  }

  @Get(':id')
  getRecipe(@Param('id', ParseIntPipe) id: number) {
    return this.recipesService.getRecipe(id);
  }

  @Post()
  createRecipe(@Body() recipe: CreateRecipeDto) {
    return this.recipesService.createRecipe(recipe);
  }

  @Patch(':id')
  modifyRecipe(
    @Param('id', ParseIntPipe) id: number,
    @Body() recipe: UpdateRecipeDto,
  ) {
    return this.recipesService.modifyRecipe(id, recipe);
  }

  @Delete(':id')
  deleteRecipe(@Param('id', ParseIntPipe) id: number) {
    return this.recipesService.deleteRecipe(id);
  }
}
