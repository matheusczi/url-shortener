import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Url {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  slug: string;

  @Column()
  originalUrl: string;

  @Column({ default: 0 })
  visits: number;

  @CreateDateColumn()
  createdAt: Date;
}
