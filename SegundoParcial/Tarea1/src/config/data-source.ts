import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [__dirname + '/../entities/*.entity.{ts,js}'],
  synchronize: true,
  logging: true,
});
