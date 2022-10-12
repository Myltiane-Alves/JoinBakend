
import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { CreatedAddressDto } from 'src/address/dto/create-address.dto';
import { Client } from 'src/Client/client.decorator';
import { AddressService } from './address.service';
import { UpdatedAddressDto } from './dto/update-address.dto';

@Controller('address')
export class AddressController { 
    constructor(
        private addressService: AddressService,
    
    ) {}

    @Get(':id')
    async getById(@Param('id') id){
        return this.addressService.getById(id);
    }

    @Get()
    async getAll(){
        return this.addressService.getAll();
    }

    @Post()
    async create(@Body() data: CreatedAddressDto, @Client() client){
        return this.addressService.create(client.id, data);
    }

    @Put(':id') 
    async update(@Param('id') id, @Body() data: UpdatedAddressDto){
        return this.addressService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: number){
        return this.addressService.delete(id);
    }
    
}
