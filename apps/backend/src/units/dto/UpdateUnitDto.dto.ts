import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUnitDto {
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  symbol?: string;
}
