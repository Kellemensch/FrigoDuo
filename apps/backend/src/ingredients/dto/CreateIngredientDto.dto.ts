import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  categoryId?: number;
}
