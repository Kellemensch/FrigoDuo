import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRecipeDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
