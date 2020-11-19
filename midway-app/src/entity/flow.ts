import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IFlow } from '../interfaces';

@Entity()
export class Flow implements IFlow {
  @PrimaryGeneratedColumn()
  flowId: string;

  @Column()
  gid: string;

  @Column()
  uid: string;

  @Column()
  isLike: boolean;

  @Column({ default: Date.now() })
  date?: Date;
}
