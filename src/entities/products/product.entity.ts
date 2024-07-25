import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

import { Admin } from '../admins/admin.entity';
import { Cart } from '../cart/cart.entity';
import { Purchase } from '../purchases/purchase.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal')
  price: number;

  @Column()
  imageUrl: string;

  @ManyToOne(() => Admin, (admin) => admin.products)
  admin: Admin;

  @OneToMany(() => Cart, (cart) => cart.product)
  carts: Cart[];

  @OneToMany(() => Purchase, (purchase) => purchase.product)
  purchases: Purchase[];
}
