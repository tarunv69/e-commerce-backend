import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AdminsService } from './admins.service';
import { Admin } from './admin.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('admins')
@UseGuards(JwtAuthGuard)
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get()
  findAll(): Promise<Admin[]> {
    return this.adminsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Admin> {
    return this.adminsService.findOne(id);
  }

  @Post()
  create(@Body() admin: Admin): Promise<Admin> {
    return this.adminsService.create(admin);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.adminsService.remove(id);
  }
}
