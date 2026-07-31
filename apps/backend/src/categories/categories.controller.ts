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
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/CreateCategoryDto.dto';
import { UpdateCategoryDto } from './dto/UpdateCategoryDto.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly CategoriesService: CategoriesService) {}

  @Get()
  getCategories() {
    return this.CategoriesService.getCategories();
  }

  @Get(':id')
  getCategory(@Body('id', ParseIntPipe) id: number) {
    return this.CategoriesService.getCategory(id);
  }

  @Post()
  createCategory(@Body() category: CreateCategoryDto) {
    return this.CategoriesService.createCategory(category);
  }

  @Patch(':id')
  modifyCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() category: UpdateCategoryDto,
  ) {
    return this.CategoriesService.modifyCategory(id, category);
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.CategoriesService.deleteCategory(id);
  }
}
