import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Res,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller('api/v1/url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  async shorten(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.shortenUrl(createUrlDto);
  }

  @Get(':slug')
  async getUrlInfo(@Param('slug') slug: string) {
    const url = await this.urlService.findBySlug(slug, false);
    if (!url) throw new NotFoundException('URL not found');
    return url;
  }
}
