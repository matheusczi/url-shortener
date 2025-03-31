import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from './url.entity';
import * as crypto from 'crypto';
import { CreateUrlDto } from './dto/create-url.dto';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private readonly urlRepository: Repository<Url>,
  ) {}

  async findAll(): Promise<Url[]> {
    return this.urlRepository.find();
  }

  async shortenUrl(createUrlDto: CreateUrlDto): Promise<Url> {
    let { slug, originalUrl } = createUrlDto;

    if (!slug) {
      slug = await this.generateUniqueSlug();
    }

    const url = this.urlRepository.create({ slug, originalUrl });
    return this.urlRepository.save(url);
  }

  private async generateUniqueSlug(): Promise<string> {
    let slug: string;
    let isUnique = false;

    while (!isUnique) {
      slug = crypto.randomBytes(4).toString('hex');
      const existingUrl = await this.findBySlug(slug, false);
      if (!existingUrl) {
        isUnique = true;
      }
    }

    return slug;
  }

  async findBySlug(
    slug: string,
    incrementVisits: boolean = true,
  ): Promise<Url | null> {
    const url = await this.urlRepository.findOne({ where: { slug } });
    if (url && incrementVisits) {
      url.visits += 1;
      await this.urlRepository.save(url);
    }
    return url;
  }
}
