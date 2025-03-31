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
  @IsNotEmpty({ message: 'Please, insert a URL.' })
  @IsUrl({}, { message: 'Please, insert a valid URL.' })
  originalUrl: string;

  @IsOptional()
  @IsString()
  @Length(4, 10, {
    message: 'Slug must be between 4 and 10 characters.',
  })
  @Validate(UniqueSlugValidator)
  slug?: string;
}
