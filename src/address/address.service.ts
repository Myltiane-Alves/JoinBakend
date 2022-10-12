
import { Injectable } from '@nestjs/common';
import { Decimal } from '@prisma/client/runtime';
import { response } from 'express';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreatedAddressDto } from './dto/create-address.dto';


@Injectable()
export class AddressService {

    constructor(
        private prisma: PrismaService,
    ) { }

    async getById(id: number) {
        id = Number(id);

        if (isNaN(id)) {
            return response.status(400).json({ error: 'Id is not a number' });
        }

        return await this.prisma.address.findUnique({
            where: {
                id,
            },
        });
    }

    async getByClientcnpj(reason: string) {

        if (!reason) {
            throw new Error('Reason is required');
        }

        const client = await this.prisma.clients.findMany({
            where: {
                reason,
            },
        });

        return client;
    }

    async getAll() {
        return await this.prisma.address.findMany();
    }

    async create(addressId: number, {
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

        if (!logradouro) {
            throw new Error('Logradouro is required');
        }

        if (!number) {
            throw new Error('Number is required');
        }

        if (!district) {
            throw new Error('District is required');
        }

        if (!city) {
            throw new Error('City is required');
        }

        if (!state) {
            throw new Error('State is required');
        }

        if (!zipcode) {
            throw new Error('Zipcode is required');
        }

        if (!latitude) {
            throw new Error('Latitude is required');
        }

        if (!longitude) {
            throw new Error('Longitude is required');
        }

        const { clientId } = await this.prisma.address.findUnique({
            where: {
                id: addressId,
            },
            select: {
                clientId: true,
            }
        })

        if(!clientId) {
            throw new Error('Client not found');
        }

        const addressCreated = await this.prisma.address.create({
            data: {
                clients: {
                    connect: {
                        id: clientId,
                    }
                },
                logradouro,
                number,
                complement,
                district,
                city,
                state,
                zipcode,
                latitude,
                longitude, 
            },
        });

        return addressCreated;
    }

    async update(id: number,
        {
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
            logradouro: string;
            number: string;
            complement: string;
            district: string;
            city: string;
            state: string;
            zipcode: string;
            latitude: Decimal;
            longitude: Decimal;
        }
    ) {
        id = Number(id);
        if (isNaN(id)) {
            return response.status(400).json({ error: 'Id is not a number' });
        }

        const addressUpdated = await this.prisma.address.update({
            where: {
                id,
            },
            data: {
                logradouro,
                number,
                complement,
                district,
                city,
                state,
                zipcode,
                latitude,
                longitude,
            }
        });

        return addressUpdated;
    }

    async delete(id: number) {
        id = Number(id);
        if (isNaN(id)) {
            return response.status(400).json({ error: 'Id is not a number' });
        }

        const addressDeleted = await this.prisma.address.delete({
            where: {
                id,
            }
        });

        return addressDeleted;
    }
}









