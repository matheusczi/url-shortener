import 'dotenv/config';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'url_shortener',
  entities: [__dirname + '/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/database/migrations/*.{ts,js}'],
  synchronize: false,
});

export default AppDataSource;
