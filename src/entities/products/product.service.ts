import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productsRepository.findOneBy({ id });
  }

  create(product: Product): Promise<Product> {
    return this.productsRepository.save(product);
  }

  update(id: number, product: Partial<Product>): Promise<UpdateResult> {
    return this.productsRepository.update(id, product);
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
