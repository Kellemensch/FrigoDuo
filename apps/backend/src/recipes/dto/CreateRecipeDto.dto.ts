import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  ingredients: {
    ingredientId: number;
    quantity: number;
    unitId?: number;
  }[];
}
