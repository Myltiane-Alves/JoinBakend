import { Injectable, UnauthorizedException, BadRequestException,NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientService {
    
    constructor(
        private prisma: PrismaService,
    ) { }

    async get(id: number, hash = false) {
      
        id = Number(id);

        if (isNaN(id)) {
            throw new BadRequestException('Id is not a number')
        }
        const clients = await this.prisma.clients.findUnique({
            where: {
                id,
            }
        })

        if(!hash) {
            delete clients.password
        }

        if(!clients) {
            throw new NotFoundException('Client not found')
        }

        return clients;
    }

    async getById(id: number) {
        id = Number(id);

        if (isNaN(id)) {
            return response.status(400).json({ error: 'Id is not a number' });
        }

        const client = await this.prisma.clients.findUnique({
            where: {
                id,
            },
            include: {
                address: true,
            }
        });

        return client;
    }

    async getByEmail(email: string) {
        if (!email) {
            throw new Error('Email is required');
        }

        const client = await this.prisma.clients.findUnique({
            where: {
                email,
            },
            // include: {
            //     address: true,
            // }
        });

        delete client.password;

        if (!client) {
            throw new Error('Client not found');
        }

        return client;
    }

    async create({
        name,
        cnpj,
        reason,
        phone,
        email,
        password,
        
    }: {
        name: string;
        cnpj: string;
        reason: string;
        phone: string;
        email: string;
        password: string;

    }) {

        if(!name) {
            throw new Error('Contact name is required');
        }

        if(!cnpj) {
            throw new Error('CNPJ is required');        
        }

        if(!reason) {
            throw new Error('Reason is required');
        }

        if(!phone) {
            throw new Error('Phone is required');
        }

        if(!email) {
            throw new Error('Email is required');
        }

        if(!password) {
            throw new Error('Password is required');
        }
        
        const clientCreated = await this.prisma.clients.create({
            data: {
                name,
                cnpj,
                reason,
                phone,
                email,
                password: bcrypt.hashSync(password, 10),
            },
            
        });

        delete clientCreated.password;
        
        return clientCreated;
    }

    async update(id: number, {
        name,
        cnpj,
        reason,
        phone
    } : {
        name: string;
        cnpj: string;
        reason: string;
        phone: string;
    }
    
    ) {
        id = Number(id);

        if (isNaN(id)) {
            return response.status(400).json({ error: 'Id is not a number' });
        }

        const clientUpdated = await this.prisma.clients.update({
            where: {
                id,
            },
            data: {
                name,
                cnpj,
                reason,
                phone
            },
            
        });
        return clientUpdated;
    }

    async checkPassword(id: number, password: string) {
        const client = await this.get(id, true)

        const checked = await bcrypt.compare(password, client.password);

        if(!checked) {
            throw new UnauthorizedException('Email or password is invalid')
        }

        return true;
    }

    async delete(id: number) {
        id = Number(id);

        if (isNaN(id)) {
            return response.status(400).json({ error: 'Id is not a number' });
        }

        const clientDeleted = await this.prisma.clients.delete({
            where: {
                id,
            }
        });
        return clientDeleted;
    }
}

