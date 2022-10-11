import { Injectable } from '@nestjs/common';
import { Decimal } from '@prisma/client/runtime';
import { response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientService {
    [x: string]: any;
    constructor(
        private prisma: PrismaService,
    ) { }

    async getAll() {
        return await this.prisma.clients.findMany();
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

    async create({
        contactName,
        cnpj,
        reason,
        phone,
        logradouro,
        number,
        complement,
        district,
        city,
        state,
        zipcode,
        latitude,
        longitude,
    }: {
        contactName: string;
        cnpj: string;
        reason: string;
        phone: string;
        logradouro: string;
        number: string;
        complement: string;
        district: string;
        city: string;
        state: string;
        zipcode: string;
        latitude: Decimal;
        longitude: Decimal;
    }) {
        const clientCreated = await this.prisma.clients.create({
            data: {
                contactName,
                cnpj,
                reason,
                phone
            },
            include: {
                address: true,
            }
        });
        return clientCreated;
    }

    async update(id: number, {
        contactName,
        cnpj,
        reason,
        phone
    } : {
        contactName: string;
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
                contactName,
                cnpj,
                reason,
                phone
            }
        });
        return clientUpdated;
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

