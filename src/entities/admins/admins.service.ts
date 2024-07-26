import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  findOne(id: number): Promise<Admin> {
    return this.adminRepository.findOneBy({ id });
  }

  create(admin: Admin): Promise<Admin> {
    return this.adminRepository.save(admin);
  }

  async remove(id: number): Promise<void> {
    await this.adminRepository.delete(id);
  }

  async findOneByUsername(username: string): Promise<Admin | undefined> {
    return this.adminRepository.findOne({ where: { username } });
  }
}
