import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from './url.entity';
import * as crypto from 'crypto';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private readonly urlRepository: Repository<Url>,
  ) {}

  async shortenUrl(originalUrl: string): Promise<Url> {
    let slug = crypto.randomBytes(4).toString('hex');
    while (await this.urlRepository.findOne({ where: { slug } })) {
      slug = crypto.randomBytes(4).toString('hex');
    }

    const url = this.urlRepository.create({ slug, originalUrl });
    return this.urlRepository.save(url);
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
