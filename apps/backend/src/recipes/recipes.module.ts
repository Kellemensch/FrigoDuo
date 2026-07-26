import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RecipesController } from './recipes.controller';

@Module({
  providers: [RecipesService],
  imports: [PrismaModule],
  controllers: [RecipesController],
})
export class RecipesModule {}
