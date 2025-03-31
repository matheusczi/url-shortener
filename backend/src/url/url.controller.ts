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

  @Get('')
  async findAll() {
    return this.urlService.findAll();
  }

  @Post('shorten')
  async shorten(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.shortenUrl(createUrlDto);
  }

  @Get(':slug/info')
  async getUrlInfo(@Param('slug') slug: string) {
    const url = await this.urlService.findBySlug(slug, false);
    if (!url) throw new NotFoundException('URL not found');
    return url;
  }

  @Get(':slug')
  async redirect(@Param('slug') slug: string, @Res() res: Response) {
    const url = await this.urlService.findBySlug(slug);
    if (!url) throw new NotFoundException('URL not found');
    res.redirect(url.originalUrl);
  }
}
