import { AddressModule } from './address/address.module';
import { ClientController } from './Client/client.controller';
import { ClientService } from './Client/client.service';
import { ClientModule } from './Client/client.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    AddressModule,
    ClientModule,],
  controllers: [
    ClientController,],
  providers: [
    ClientService,],
})
export class AppModule { }
