import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        PrismaModule,
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '1d' },
            })
        })
    ],
    controllers: [
        AuthController,],
    providers: [
        AuthService,],
})
export class AuthModule { }
