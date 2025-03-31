import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  Validate,
} from 'class-validator';
import { UniqueSlugValidator } from '../validators/unique-slug.validator';

export class CreateUrlDto {
  @IsNotEmpty()
  @IsUrl()
  originalUrl: string;

  @IsOptional()
  @IsString()
  @Length(4, 10)
  @Validate(UniqueSlugValidator)
  slug?: string;
}
