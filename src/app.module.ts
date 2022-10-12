import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { AddressModule } from './address/address.module';
import { ClientModule } from './Client/client.module';
import { Module } from '@nestjs/common';


@Module({
  imports: [
    AuthModule,
    PrismaModule,
    AddressModule,
    ClientModule,],
  controllers: [

  ],
  providers: [

  ],
})
export class AppModule { }
