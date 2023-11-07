import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateKnightDto {
  @IsString({
    message: `I'm sorry, my lady😘 but it's called name, and it's a string.`,
  })
  @MinLength(3, { message: 'Please more 3 characters' })
  readonly name: string;

  @IsString({
    message: `I'm sorry, my lady😘 but it's called constelation, and it's a string.`,
  })
  @MinLength(3, { message: 'Please more 3 characters' })
  readonly constelation: string;
}
