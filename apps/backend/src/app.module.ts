import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesController } from './recipes/recipes.controller';
import { RecipesModule } from './recipes/recipes.module';
import { PrismaModule } from './prisma/prisma.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { UnitsModule } from './units/units.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [RecipesModule, PrismaModule, IngredientsModule, UnitsModule, CategoriesModule],
})
export class AppModule {}
