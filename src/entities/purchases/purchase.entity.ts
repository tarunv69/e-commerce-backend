import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Product } from '../products/product.entity';
import { Admin } from '../admins/admin.entity';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.purchases)
  user: User;

  @ManyToOne(() => Product, (product) => product.purchases)
  product: Product;

  @ManyToOne(() => Admin, (admin) => admin.purchases)
  admin: Admin;

  @Column('int')
  quantity: number;

  @Column('decimal')
  totalPrice: number;

  @Column()
  purchaseDate: Date;
}
