export interface Url {
  id: string;
  slug: string;
  originalUrl: string;
  visits: number;
  createdAt: string;
}

export interface CreateUrlDto {
  url: string;
}
