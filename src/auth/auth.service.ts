/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientService } from 'src/Client/client.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private prisma: PrismaService,
        private clientService: ClientService,
    
    ) {}

    async getToken(clientId: number) {
        
        const {email, name, id} = await this.clientService.get(clientId);

        return this.jwtService.sign({email, id});
    }
    
    async login({ email, password }: { email: string, password: string }) {
        const client = await this.clientService.getByEmail(email);

        await this.clientService.checkPassword(client.id, password);

        const token = await this.getToken(client.id);

        return {
            token
        }
    }

    async decodeToken(token: string) {
        try {
            await this.jwtService.verify(token);
        } catch (e) {
            throw new UnauthorizedException(e.message);
        }

        return this.jwtService.decode(token);
    }
}
