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

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  async shorten(@Body('url') url: string) {
    return this.urlService.shortenUrl(url);
  }

  @Get(':slug')
  async redirect(@Param('slug') slug: string, @Res() res: Response) {
    const url = await this.urlService.findBySlug(slug);
    if (!url) throw new NotFoundException('URL not found');
    res.redirect(url.originalUrl);
  }
}
