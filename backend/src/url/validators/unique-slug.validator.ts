import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { UrlService } from '../url.service';

@ValidatorConstraint({ name: 'uniqueSlug', async: true })
@Injectable()
export class UniqueSlugValidator implements ValidatorConstraintInterface {
  constructor(private urlService: UrlService) {}

  async validate(slug: string, args: ValidationArguments) {
    if (!slug) return true;
    const url = await this.urlService.findBySlug(slug, false);
    return !url;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Slug already exists';
  }
}
