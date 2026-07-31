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
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/CreateIngredientDto.dto';
import { UpdateIngredientDto } from './dto/UpdateIngredientDto.dto';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  getIngredients() {
    return this.ingredientsService.getIngredients();
  }

  @Get(':id')
  getIngredient(@Body('id', ParseIntPipe) id: number) {
    return this.ingredientsService.getIngredient(id);
  }

  @Post()
  createIngredient(@Body() ingredient: CreateIngredientDto) {
    return this.ingredientsService.createIngredient(ingredient);
  }

  @Patch(':id')
  modifyIngredient(
    @Param('id', ParseIntPipe) id: number,
    @Body() ingredient: UpdateIngredientDto,
  ) {
    return this.ingredientsService.modifyIngredient(id, ingredient);
  }

  @Delete(':id')
  deleteIngredient(@Param('id', ParseIntPipe) id: number) {
    return this.ingredientsService.deleteIngredient(id);
  }
}
