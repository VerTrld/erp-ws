import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { ProductModule } from './product/product.module';
import { PurchaseModule } from './purchase/purchase.module';
import { ItemModule } from './item/item.module';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [PersonModule, ProductModule, PurchaseModule, ItemModule, SaleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
