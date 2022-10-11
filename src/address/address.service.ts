
import { Injectable } from '@nestjs/common';
import { Decimal } from '@prisma/client/runtime';
import { response } from 'express';

import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class AddressService {

    constructor(
        private prisma: PrismaService,
    ) {}
    
    async getById(id: number) {
        id = Number(id);

        if(isNaN(id)){
            return response.status(400).json({error: 'Id is not a number'});
        }

        return await this.prisma.address.findUnique({
            where: {
                id,
            },
        });
    }

    async getAll() {
        return await this.prisma.address.findMany();
    }

    async create({
        logradouro,
        number,
        complement,
        district,
        city,
        state,
        zipcode,
        latitude,
        longitude,
        clientId,
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
        clientId: number;
    }
    ){
       
        const { cnpj } = await this.prisma.clients.findUnique({
            where: {
                id: clientId,
            },
            select: {
                cnpj: true, 
            }
        })

            return this.prisma.address.create({
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
                clients: {
                    connect: {
                        id: clientId,
                    }                         
                },
            },

        });
       

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
    ){
        id = Number(id);
        if(isNaN(id)){
            return response.status(400).json({error: 'Id is not a number'});
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
        if(isNaN(id)){
            return response.status(400).json({error: 'Id is not a number'});
        }

        const addressDeleted = await this.prisma.address.delete({
            where: {
                id,
            }
        });

        return addressDeleted;  
    }
 }







    
    
