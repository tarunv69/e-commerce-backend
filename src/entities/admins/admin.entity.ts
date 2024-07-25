import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../products/product.entity';
import { Purchase } from '../purchases/purchase.entity';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string; // Store hashed passwords

  @Column()
  email: string;

  @OneToMany(() => Product, (product) => product.admin)
  products: Product[];

  @OneToMany(() => Purchase, (purchase) => purchase.admin)
  purchases: Purchase[];
}
