import { IsNumber, IsString } from 'class-validator';

export class UpdateIngredientDto {
  @IsString()
  name?: string;

  @IsNumber()
  categoryId?: number;
}
