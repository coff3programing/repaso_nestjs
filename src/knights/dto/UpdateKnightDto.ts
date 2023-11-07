import { IsString, IsOptional, IsUUID } from 'class-validator';

export class UpdateKnightDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly constelation?: string;
}
