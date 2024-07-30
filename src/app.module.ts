import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities/admins/admin.entity';
import { User } from './entities/users/user.entity';
import { Cart } from './entities/cart/cart.entity';
import { Purchase } from './entities/purchases/purchase.entity';
import { Product } from './entities/products/product.entity';
import { AdminsModule } from './entities/admins/admins.module';
import { UserModule } from './entities/users/users.module';
import { CartModule } from './entities/cart/cart.module';
import { PurchasesModule } from './entities/purchases/purchases.module';
import { ProductsModule } from './entities/products/products.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { S3Service } from './uploads/s3.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'demo-postgres.cp884kg0if7u.ap-south-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'adminPGS',
      database: 'postgres',
      entities: [Admin, User, Cart, Purchase, Product],
      synchronize: true,
    }),
    AdminsModule,
    UserModule,
    CartModule,
    PurchasesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService, S3Service],
})
export class AppModule {}
