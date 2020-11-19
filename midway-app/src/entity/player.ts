import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IPlayer } from '../interfaces';

@Entity()
export class Player implements IPlayer {
  @PrimaryGeneratedColumn()
  uid?: number;

  @Column()
  name: string;

  @Column({ default: 'Let us go to school.' })
  description?: string;

  @Column()
  age: number;

  @Column({ default: 'Frontend Engineer' })
  job?: string;
}
