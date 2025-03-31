import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './url.entity';
import { UniqueSlugValidator } from './validators/unique-slug.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Url])],
  providers: [UrlService, UniqueSlugValidator],
  controllers: [UrlController],
  exports: [UrlService],
})
export class UrlModule {}
