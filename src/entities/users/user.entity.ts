import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Cart } from '../cart/cart.entity';
import { Purchase } from '../purchases/purchase.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string; // Store hashed passwords

  @Column()
  email: string;

  @OneToOne(() => Cart, (cart) => cart.user)
  @JoinColumn()
  cart: Cart;

  @OneToMany(() => Purchase, (purchase) => purchase.user)
  purchases: Purchase[];
}
